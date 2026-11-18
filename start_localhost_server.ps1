param(
  [int]$Port = 8090,
  [switch]$OpenBrowser
)

$ErrorActionPreference = "Continue"
$RootDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $RootDir) {
  $RootDir = "c:\Users\victor.maitto\Downloads\tjl\agents\vtex_engineer\prototypes\tjl-vtex-faststore-prototype"
}

$endpoint = New-Object System.Net.IPEndPoint([System.Net.IPAddress]::Loopback, $Port)
$listener = New-Object System.Net.Sockets.TcpListener($endpoint)

try {
  $listener.Start()
} catch {
  Write-Host "Port $Port is already in use or unavailable: $_" -ForegroundColor Yellow
  exit 0
}

$url = "http://localhost:$Port/"
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host " THE JOY LAB — REVISAO TJL (VTEX FASTSTORE SIMULATOR)" -ForegroundColor Cyan
Write-Host " Home URL (Desktop & Mobile): $url" -ForegroundColor Green
Write-Host " PDP URL  (Desktop & Mobile): ${url}pdp.html" -ForegroundColor Green
Write-Host " Root Dir:                    $RootDir" -ForegroundColor Gray
Write-Host "================================================================" -ForegroundColor Cyan

if ($OpenBrowser) {
  Start-Process $url
}

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".otf"  = "font/otf"
  ".woff2"= "font/woff2"
  ".ico"  = "image/x-icon"
}

$crlf = [char]13 + [char]10

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $stream.ReadTimeout = 5000
      $stream.WriteTimeout = 5000
      $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
      $requestLine = $reader.ReadLine()
      if ([string]::IsNullOrEmpty($requestLine)) {
        $client.Close()
        continue
      }

      while ($true) {
        $headerLine = $reader.ReadLine()
        if ([string]::IsNullOrEmpty($headerLine)) { break }
      }

      $parts = $requestLine.Split(" ")
      $rawUrl = if ($parts.Length -ge 2) { $parts[1] } else { "/" }

      $cleanPath = ($rawUrl -split "\?")[0]
      $cleanPath = [System.Uri]::UnescapeDataString($cleanPath)
      if ($cleanPath -eq "/" -or [string]::IsNullOrWhiteSpace($cleanPath)) {
        $cleanPath = "/index.html"
      }

      $relPath = $cleanPath.TrimStart("/").Replace("/", "\")
      $fullPath = Join-Path $RootDir $relPath

      if (Test-Path -Path $fullPath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
        $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
        $bytes = [System.IO.File]::ReadAllBytes($fullPath)
        $headers = "HTTP/1.1 200 OK$crlf" +
                   "Content-Type: $contentType$crlf" +
                   "Content-Length: $($bytes.Length)$crlf" +
                   "Cache-Control: no-cache$crlf" +
                   "Connection: close$crlf$crlf"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($bytes, 0, $bytes.Length)
      } else {
        $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $headers = "HTTP/1.1 404 Not Found$crlf" +
                   "Content-Type: text/plain; charset=utf-8$crlf" +
                   "Content-Length: $($notFound.Length)$crlf" +
                   "Connection: close$crlf$crlf"
        $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
        $stream.Write($headerBytes, 0, $headerBytes.Length)
        $stream.Write($notFound, 0, $notFound.Length)
      }
    } catch {
      # Ignore transient client errors
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
