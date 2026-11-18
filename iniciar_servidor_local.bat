@echo off
title The Joy Lab - Revisao TJL (VTEX FastStore Localhost Server)
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start_localhost_server.ps1" -Port 8090 -OpenBrowser
pause
