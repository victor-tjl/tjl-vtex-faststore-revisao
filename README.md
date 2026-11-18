# 🏛️ The Joy Lab — Revisão TJL (Simulador VTEX FastStore: Home, Abas/Popups & PDP)

> **Figma Oficial:** [`Revisão TJL (32mjETxf0SdgkCprK0UL0L)`](https://www.figma.com/design/32mjETxf0SdgkCprK0UL0L/Revis%C3%A3o-TJL?node-id=0-1&t=wr9tcZmvNXOP0nPr-1)  
> **Conta VTEX Alvo:** `lojajoy` (`www.thejoylab.com.br`)  
> **Escopo Focado:** Simulação enxuta e 100% interativa da **Home (`index.html`)** com todas as suas **abas e popups**, mais a **Página de um Produto (`pdp.html` — Lumiscent Body Mist Lavander Thé Bleu)** para **Desktop e Mobile**, sem páginas de listagem/PLP intermediárias.

---

## 🌐 Como Rodar Localmente (`localhost:8090`) ou pelo GitHub

### Opção 1 — Rodar Direto pelo GitHub Pages (Sem instalar nada)
- 🔗 **Home (`60:632` Desktop & `142:428` Mobile):** `https://victor-tjl.github.io/tjl-vtex-faststore-revisao/`
- 🔗 **PDP Única (`0:1` Desktop & `154:230` Mobile):** `https://victor-tjl.github.io/tjl-vtex-faststore-revisao/pdp.html`

### Opção 2 — Rodar em `localhost:8090` (Windows, 1 clique)
1. Clone o repositório:
   ```bash
   git clone https://github.com/victor-tjl/tjl-vtex-faststore-revisao.git
   cd tjl-vtex-faststore-revisao
   ```
2. Clique duas vezes em **`iniciar_servidor_local.bat`** (ou rode no PowerShell):
   ```powershell
   powershell -NoProfile -ExecutionPolicy Bypass -File .\start_localhost_server.ps1 -Port 8090 -OpenBrowser
   ```
3. Acesse:
   - **Home:** `http://localhost:8090/`
   - **PDP:** `http://localhost:8090/pdp.html`

---

## ✨ O Que Está Simulado (Desktop & Mobile — Fiel ao Figma `32mjETxf0SdgkCprK0UL0L`)

### 1. Home (`index.html` — Nodes `60:632` e `142:428`) + Abas e Popups
- **Barra de Benefícios Superior (`74:387` / `142:432`):** Rotação automática (4,5s), setas laterais `<` `>` e botão fechar `X` no desktop (`50px`); no mobile (`45px`), desaparece ao rolar para baixo e retorna no topo.
- **Smart Header + Aba de Pesquisa Expandida (`60:785` / `142:500`):**
  - No **Mobile**, inicia com a barra de pesquisa expandida no centro (ao lado de Menu + Perfil à esquerda e Busca + Sacola à direita) e alterna para o logo `THE JOY LAB` no primeiro scroll down.
  - Clicar na lupa abre a **Aba Dropdown de Resultados da Pesquisa** logo abaixo do header (cobrindo o conteúdo com cards de produtos, botão `Popup Rápido` e link direto para a `PDP`).
- **Aba Lateral de Navegação (`nav-drawer` — `74:435`):** Menu sanduíche deslizante com fundo em blur (`backdrop-filter: blur(5px)`), filtrando vitrines por *Limpeza*, *Tratamento*, *Corporal* e *Todos os produtos*, além de links de *Blog* e *Nossos Programas*.
- **Hero Banner Fullscreen com Sobreposição 50% no Scroll (`138:346` / `142:573`):** Texto HTML real (`Vonnes LightExtended` + `Vonnes Book`), setas laterais e efeito `sticky` no desktop onde o conteúdo inferior cobre gradualmente 50% do banner ao rolar.
- **Categorias Guiadas por Dor da Pele (`75:602` / `147:153`) + Abas de Filtro na Home:**
  - No **Desktop**, 4 cards interativos que expandem horizontalmente (`flex: 1.48`) no hover/seleção com gradiente inferior.
  - No **Mobile**, barra seletora `"Manchas na Pele"` com setas `<` `>` (`147:153`).
  - **Abas de Filtro na Vitrine:** Permite alternar entre *Todas as Soluções*, *Manchas & Uniformização*, *Hidratação & Barreira*, *Limpeza & Oleosidade* e *Renovação & Firmeza* diretamente na Home.
- **Carrosséis `Nossas Rotinas` e `Nossos Produtos` (`83:952` & `103:188`):** Cards `1:1`, preço original riscado + badge `-4%` nas rotinas, e ícone da sacola com micro-animação elástica (expande no hover quando vazio; preenche de preto ao adicionar; remove ao clicar novamente). Qualquer clique fora da sacola leva para a PDP única (`pdp.html`).
- **Popup de Compra Rápida (`quick-pdp-modal`):** Acionado pelos banners secundários ou pela aba de busca, permitindo escolher entre *Compra única* e *Compra recorrente (-15% OFF)* ou abrir a PDP completa.
- **Popup Minha Conta & Programas (`account-modal`):** Demonstra o funcionamento integrado de *Joy Coins (5% cashback)*, *Compra Recorrente (-15% OFF)* e *Seja Avaliador TJL*.
- **Aba Lateral da Sacola (`cart-drawer`):** Barra de progresso dupla (**Frete Grátis R$ 399** + **Nécessaire TJL R$ 499**), seletor de quantidade, cálculo de **Joy Coins (+5%)**, **PIX (-4%)** e campo de cupom com normalização `.toUpperCase()` (`BLACKTJL`, `JOY10`).
- **Resultados Reais UGC 9:16 (`75:579` / `138:345`):** Cards formato Stories `9:16` com sombras laterais demarcatórias e botão de ativar/desativar áudio (`🔇 Áudio` / `🔊 Áudio ON`).
- **Rodapé Responsivo (`74:116` Desktop / `142:602` Mobile):** Newsletter minimalista `10% OFF`, 4 colunas no desktop que se transformam em **acordeões (`+`) no mobile**, e faixa monograma `TJL`.

### 2. Página de Produto Única (`pdp.html` — Nodes `0:1` Desktop e `154:230` Mobile)
- **Galeria Sticky à Esquerda (`28:7`) + Barra de Progresso Mobile (`178:493`):** 6 miniaturas verticais + palco `1:1` fixo durante o scroll da coluna direita.
- **Card Unificado de Compra Única vs. Compra Recorrente (`63:993` / `63:1015`):** Radio buttons, badge `-15%` (`R$ 168,00` $\rightarrow$ `R$ 142,80`), dropdown de frequência (`a cada 1 mês`, `2`, `3`, `4 meses`), **Joy Coins** e **`-4% no PIX`**.
- **Ilha Flutuante de Checkout (`51:268` / Nota `52:329`):** Surge automaticamente na base da tela quando o botão principal *Adicionar à sacola* sai de vista no scroll.
- **Calculadora de CEP (`16:7`) + 5 Sanfonas Técnicas (`22:13`) + Popup INCI (`<dialog id="inci-modal">`):** Acordeões para *Sobre o produto*, *Benefícios*, *Resultados*, *Ingredientes* (com busca de ativos em tempo real no popup INCI) e *Como usar*.
- **Complete sua Rotina 1+2 (`22:14`) + Antes/Depois (`60:778`):** Compre Junto de 3 produtos com **Frete Grátis + 4% OFF** (`R$ 484,80`) e comparador visual Antes/Depois.
- **Principais Ativos Expansíveis (`60:781`), Vídeo Como Usar (`50:209`), Slider de Avaliações (`61:906`), FAQ (`27:223`), Stories UGC (`61:889`) e Outras Rotinas (`60:780`).**
