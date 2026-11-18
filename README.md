# 🏛️ The Joy Lab — Revisão TJL (Simulador Interativo VTEX FastStore)

> **Figma Oficial:** [`Revisão TJL (32mjETxf0SdgkCprK0UL0L)`](https://www.figma.com/design/32mjETxf0SdgkCprK0UL0L/Revis%C3%A3o-TJL?node-id=0-1&t=wr9tcZmvNXOP0nPr-1)  
> **Conta VTEX Alvo:** `lojajoy` (`www.thejoylab.com.br`)  
> **Arquitetura:** Simulador Interativo Standalone 100% estruturado nos padrões **VTEX FastStore** (Design Tokens Brandless, Sections Modulares, Schema GraphQL/OrderForm e Zero-Dependency Localhost Server).

---

## 🌐 Como Rodar Localmente (`localhost:8090`) ou pelo GitHub

### Opção 1 — Rodar em 1 Clique no Windows (`localhost:8090`, sem precisar de Node.js)
1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/victor-tjl/tjl-vtex-faststore-revisao.git
   cd tjl-vtex-faststore-revisao
   ```
2. Dê dois cliques em **`iniciar_servidor_local.bat`** (ou execute no PowerShell):
   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File .\start_localhost_server.ps1 -Port 8090 -OpenBrowser
   ```
3. Acesse no navegador:
   - **Home (`60:632` & `142:428`):** `http://localhost:8090/`
   - **PDP Completa (`0:1` & `154:230`):** `http://localhost:8090/pdp.html?id=lumiscent_lavander`
   - **Categorias / Coleções:** `http://localhost:8090/category.html?type=rotinas`

### Opção 2 — Rodar Direto pelo GitHub Pages (Sem instalar nada)
O repositório já possui **GitHub Pages** ativado na branch `main`:
- 🔗 **URL Live:** `https://victor-tjl.github.io/tjl-vtex-faststore-revisao/`
- 🔗 **PDP Live (`Lumiscent Body Mist`):** `https://victor-tjl.github.io/tjl-vtex-faststore-revisao/pdp.html?id=lumiscent_lavander`

---

## 🎨 Mapeamento 1:1 do Figma (`32mjETxf0SdgkCprK0UL0L`) para Componentes VTEX FastStore

| Página / Seção no Figma | Node ID Figma | Arquivo / Section no Projeto | Destaques de UX & Engenharia FastStore |
| :--- | :---: | :--- | :--- |
| **Top Benefit Bar** | `74:387` / `142:432` | `index.html`, `pdp.html` (`<aside id="benefit-bar">`) | Carrossel automático (4,5s) + setas `<` `>` + botão fechar `X` (`50px` desktop / `45px` mobile). |
| **Smart Header + Drawer Lateral** | `60:785` / `65:1193` | `<header id="site-header">` + `<dialog id="nav-drawer">` | Logo `THE JOY LAB` centralizado, colapsa no scroll down e reaparece no scroll up; menu gaveta com `backdrop-filter: blur(5px)`. |
| **Hero Banner Fullscreen** | `74:433` / `142:573` | `<section id="hero">` | Texto HTML real para SEO/GEO (`Vonnes LightExtended` + `Vonnes Book`), setas laterais e CTA direto. |
| **Navegação Guiada por Dor da Pele** | `75:602` / `147:153` | `<section id="categorias">` | 4 cards interativos (`Manchas`, `Acne & Oleosidade`, `Pele Seca & Barreira`, `Renovação & Firmeza`) que filtram as vitrines em tempo real. |
| **Carrosséis: Nossas Rotinas & Produtos** | `74:234` / `80:822` | `<section id="rotinas">` & `<section id="produtos">` | Cards minimalistas `83:952` e `103:188` (`1:1`), preço riscado em ofertas e sacola interativa com micro-animação elástica. |
| **Banners Editoriais Secundários** | `74:225` / `75:570` | `<section class="editorial-banner">` | Destaque humanizado para `AquaPro Cooler` e `Powerful Retinoid` com notas de uso clínico. |
| **PDP — Galeria Sticky + Painel Estático** | `28:7` + `60:779` | `pdp.html` (`.pdp-hero-grid`) | Coluna esquerda `position: sticky` com 6 miniaturas verticais + palco `1:1` e barra de progresso mobile (`178:493`). |
| **PDP — Compra Única vs. Recorrente (-15%)** | `63:993` / `63:1015` | `pdp.html` (`#pdp-purchase-card`) | Seletor unificado com radio buttons, badge `-15%` (`R$ 168,00` $\rightarrow$ `R$ 142,80`), dropdown de frequência (`a cada 1 mês`, `2`, `3`, `4 meses`), Joy Coins e `-4% no PIX`. |
| **PDP — Ilha Flutuante de Checkout** | `51:268` / Nota `52:329` | `pdp.html` (`#pdp-floating-island`) | Ao rolar além do botão principal, surge a ilha flutuante inferior sincronizada com a modalidade de compra. |
| **PDP — Calculadora de Frete & 5 Sanfonas** | `16:7` + `22:13` | `pdp.html` (`.pdp-shipping-box`, `.pdp-accordions`) | Cálculo de CEP + 5 acordeões (*Sobre o produto*, *Benefícios*, *Resultados*, *Ingredientes* com modal INCI `<dialog closedby="any">`, *Como usar*). |
| **PDP — Complete sua Rotina (1+2)** | `22:14` + `60:778` | `pdp.html` (`.pdp-bundle-card`, `.pdp-ba-card`) | Compre Junto de 3 produtos com **Frete Grátis + 4% OFF** (`De R$ 505,00 Por R$ 484,80`) + comparador **Antes/Depois**. |
| **PDP — Principais Ativos, Vídeo, Reviews e FAQ** | `60:781`, `50:209`, `61:906`, `27:223` | `pdp.html` | Cards expansíveis de ativos, passo a passo em 3 etapas com área de vídeo, slider lateral de avaliações verificadas e FAQ completo. |
| **Drawer da Sacola (Dupla Meta + Cupom)** | `cart-drawer` | `<dialog id="cart-drawer">` | Barra de progresso dupla (**Frete Grátis R$ 399** + **Nécessaire TJL R$ 499**) e input de cupom com normalização `.toUpperCase()` (`BLACKTJL`, `JOY10`). |

---

## 📁 Estrutura de Arquivos

```text
├── index.html                  # Home Interativa (Figma 60:632 Desktop & 142:428 Mobile)
├── pdp.html                    # Página de Produto Completa (Figma 0:1 Desktop & 154:230 Mobile)
├── category.html               # Página de Categorias e Coleções (Rotinas, Limpeza, Tratamento, Corporal)
├── styles.css                  # Design Tokens FastStore, Grid 85vw (max 1632px), Zero-Radius (0px)
├── app.js                      # Controlador de Estado da Home, Carrosséis, Sacola e Busca
├── data.js                     # Catálogo Canônico (10 SKUs + 5 Kits), Composições INCI, Reviews e FAQs
├── discovery.config.js         # Configuração preparada para VTEX FastStore (@faststore/core — conta lojajoy)
├── package.json                # Scripts de execução e metadados do projeto
├── start_localhost_server.ps1  # Servidor HTTP local em PowerShell/.NET (porta 8090, zero dependências)
├── iniciar_servidor_local.bat  # Atalho de 1 clique para iniciar o servidor no Windows
└── assets/
    ├── figma/                  # Ícones SVG, logo, banners e renders oficiais extraídos via MCP Figma
    └── products/               # Fotografia oficial dos produtos The Joy Lab em alta resolução
```
