(function () {
  "use strict";

  const DATA = window.TJL_DATA;
  const ALL_ITEMS = [...DATA.routines, ...DATA.products];

  const state = {
    benefitIndex: 0,
    benefitClosed: false,
    heroIndex: 0,
    activeFilter: null, // concern or category
    cart: JSON.parse(localStorage.getItem("tjl_revisao_cart") || "[]"),
    coupon: localStorage.getItem("tjl_revisao_coupon") || ""
  };

  function saveCart() {
    localStorage.setItem("tjl_revisao_cart", JSON.stringify(state.cart));
  }

  const formatBRL = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  /* ========================================================================
     1. TOP BENEFIT BAR (Auto-rotate + Arrows + Close X)
     ======================================================================== */
  const benefitBar = document.getElementById("benefit-bar");
  const benefitText = document.getElementById("benefit-text");
  const benefitPrev = document.getElementById("benefit-prev");
  const benefitNext = document.getElementById("benefit-next");
  const benefitClose = document.getElementById("benefit-close");
  let benefitTimer = null;

  function showBenefit(nextIdx, direction = "next") {
    const total = DATA.benefits.length;
    state.benefitIndex = ((nextIdx % total) + total) % total;
    const outClass = direction === "prev" ? "is-leaving-right" : "is-leaving-left";
    const inClass = direction === "prev" ? "is-entering-left" : "is-entering-right";

    benefitText.classList.remove("is-leaving-left", "is-leaving-right", "is-entering-left", "is-entering-right");
    benefitText.classList.add(outClass);

    setTimeout(() => {
      benefitText.textContent = DATA.benefits[state.benefitIndex];
      benefitText.classList.remove(outClass);
      benefitText.classList.add(inClass);
      void benefitText.offsetWidth;
      benefitText.classList.remove(inClass);
    }, 180);
  }

  function startBenefitAuto() {
    stopBenefitAuto();
    benefitTimer = setInterval(() => {
      if (!state.benefitClosed) showBenefit(state.benefitIndex + 1, "next");
    }, 4500);
  }

  function stopBenefitAuto() {
    if (benefitTimer) clearInterval(benefitTimer);
  }

  benefitPrev.addEventListener("click", () => {
    showBenefit(state.benefitIndex - 1, "prev");
    startBenefitAuto();
  });

  benefitNext.addEventListener("click", () => {
    showBenefit(state.benefitIndex + 1, "next");
    startBenefitAuto();
  });

  benefitBar.addEventListener("mouseenter", stopBenefitAuto);
  benefitBar.addEventListener("mouseleave", startBenefitAuto);

  benefitClose.addEventListener("click", () => {
    state.benefitClosed = true;
    stopBenefitAuto();
    benefitBar.classList.add("is-closed");
    document.body.classList.add("benefit-closed");
  });

  startBenefitAuto();

  /* ========================================================================
     2. SMART HEADER (Scroll Down Collapse / Scroll Up Reveal + Full Width After Banner)
     ======================================================================== */
  const siteHeader = document.getElementById("site-header");
  const heroEl = document.getElementById("hero");
  let lastScrollY = window.scrollY;

  function updateHeaderOnScroll() {
    const currentY = window.scrollY;
    const heroBottom = heroEl.offsetTop + heroEl.offsetHeight - 90;

    if (currentY > heroBottom) {
      siteHeader.classList.add("is-full-width");
    } else {
      siteHeader.classList.remove("is-full-width");
    }

    if (currentY > 140 && currentY > lastScrollY) {
      siteHeader.classList.add("is-collapsed");
    } else {
      siteHeader.classList.remove("is-collapsed");
    }

    lastScrollY = currentY;
  }

  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  /* ========================================================================
     3. DRAWER MENU, SEARCH & ACCOUNT
     ======================================================================== */
  const navDrawer = document.getElementById("nav-drawer");
  document.getElementById("menu-open-btn").addEventListener("click", () => navDrawer.showModal());
  document.getElementById("menu-close-btn").addEventListener("click", () => navDrawer.close());

  navDrawer.querySelectorAll("[data-nav-filter]").forEach((link) => {
    link.addEventListener("click", () => {
      const f = link.getAttribute("data-nav-filter");
      navDrawer.close();
      applyFilter(f === "all" ? null : f, link.textContent.trim());
    });
  });

  document.getElementById("account-btn").addEventListener("click", () => {
    showToast("Área do cliente & Joy Coins disponível no checkout.");
  });

  /* ========================================================================
     4. HERO BANNER CAROUSEL (Real HTML Text + Arrows + Dots)
     ======================================================================== */
  const heroSlidesEl = document.getElementById("hero-slides");
  const heroDotsEl = document.getElementById("hero-dots");

  function renderHero() {
    heroSlidesEl.innerHTML = DATA.heroSlides
      .map(
        (s, i) => `
      <article class="hero__slide ${i === state.heroIndex ? "is-active" : ""}">
        <img class="hero__bg" src="${s.image}" alt="${s.title}" />
        <div class="hero__scrim"></div>
        <div class="hero__content container-85">
          <p class="hero__topic">${s.topic}</p>
          <h1 class="hero__title">${s.title}</h1>
          <p class="hero__desc">${s.description}</p>
          <a href="${s.ctaTarget}" class="hero__cta">
            <span>${s.ctaLabel}</span>
          </a>
          <p class="hero__subdesc">${s.subdescription}</p>
        </div>
      </article>`
      )
      .join("");

    heroDotsEl.innerHTML = DATA.heroSlides
      .map(
        (_, i) => `
      <button class="hero__dot ${i === state.heroIndex ? "is-active" : ""}" data-hero-dot="${i}" aria-label="Slide ${i + 1}"></button>`
      )
      .join("");

    heroDotsEl.querySelectorAll("[data-hero-dot]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.heroIndex = Number(btn.getAttribute("data-hero-dot"));
        renderHero();
      });
    });
  }

  document.getElementById("hero-prev").addEventListener("click", () => {
    state.heroIndex = (state.heroIndex - 1 + DATA.heroSlides.length) % DATA.heroSlides.length;
    renderHero();
  });

  document.getElementById("hero-next").addEventListener("click", () => {
    state.heroIndex = (state.heroIndex + 1) % DATA.heroSlides.length;
    renderHero();
  });

  renderHero();

  /* ========================================================================
     5. INTERACTIVE SKIN-CONCERN CATEGORIES
     ======================================================================== */
  const concernsGrid = document.getElementById("concerns-grid");
  const filterStatus = document.getElementById("filter-status");

  function renderConcerns() {
    concernsGrid.innerHTML = DATA.concerns
      .map(
        (c) => `
      <button class="concern-card ${state.activeFilter === c.filterKey ? "is-selected" : ""}" data-concern="${c.filterKey}" data-label="${c.title}">
        <img class="concern-card__img" src="${c.image}" alt="${c.title}" loading="lazy" />
        <div class="concern-card__scrim"></div>
        <div class="concern-card__body">
          <h3 class="concern-card__title">${c.title}</h3>
          <p class="concern-card__subtitle">${c.subtitle}</p>
          <div class="concern-card__meta">
            <span class="concern-card__actives">${c.actives}</span>
            <span class="concern-card__cta">Ver soluções</span>
          </div>
        </div>
      </button>`
      )
      .join("");

    concernsGrid.querySelectorAll(".concern-card").forEach((card) => {
      card.addEventListener("click", () => {
        const key = card.getAttribute("data-concern");
        const label = card.getAttribute("data-label");
        if (state.activeFilter === key) {
          applyFilter(null, "");
        } else {
          applyFilter(key, label);
          document.getElementById("produtos").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function applyFilter(filterKey, label) {
    state.activeFilter = filterKey;
    renderConcerns();
    renderCarousels();

    if (filterKey) {
      filterStatus.innerHTML = `
        <span class="filter-pill">
          Filtrando por: <strong>${label}</strong>
          <button id="clear-filter-btn" aria-label="Limpar filtro" style="margin-left:4px;font-weight:700;">×</button>
        </span>`;
      document.getElementById("clear-filter-btn").addEventListener("click", () => applyFilter(null, ""));
    } else {
      filterStatus.innerHTML = "";
    }
  }

  /* ========================================================================
     6. PRODUCT & ROUTINE CAROUSELS (Fashion Retail Cards + 1-Click Add to Bag)
     ======================================================================== */
  const routinesTrack = document.getElementById("routines-track");
  const productsTrack = document.getElementById("products-track");

  const BAG_ICON_SVG = `
    <svg width="16" height="20" viewBox="0 0 18 22.5" fill="none" aria-hidden="true">
      <rect class="bag-fill-body" x="1.37" y="6.19" width="15.26" height="14.96" fill="black" />
      <path d="M13.544 4.84232V4.4583C13.544 1.99513 11.5086 0 8.99924 0C6.48985 0 4.45451 1.99663 4.45451 4.4583V4.84232H0V22.5H18V4.84232H13.5455H13.544ZM5.82924 4.4568C5.82924 2.74218 7.25138 1.34859 8.99771 1.34859C10.744 1.34859 12.1662 2.74368 12.1662 4.4568V4.84082H5.82771V4.4568H5.82924ZM16.6237 21.1484H1.37473V6.19241H4.45298V8.45006H5.82924V6.19241H12.1677V8.45006H13.544V6.19241H16.6222V21.1484H16.6237Z" fill="black"/>
    </svg>`;

  function isItemInCart(id) {
    return state.cart.some((c) => c.id === id);
  }

  function buildProductCardHTML(item, isPromoted) {
    const oldPriceHtml =
      isPromoted && item.oldPrice
        ? `<span class="product-card__old-price">${formatBRL(item.oldPrice)}</span>`
        : "";
    const discountHtml =
      isPromoted && item.discountLabel
        ? `<span class="product-card__discount">${item.discountLabel}</span>`
        : "";
    const inBagClass = isItemInCart(item.id) ? "is-in-bag" : "";

    return `
      <article class="product-card" data-item-id="${item.id}">
        <a href="pdp.html?id=${item.id}" class="product-card__media">
          <img class="product-card__img" src="${item.image}" alt="${item.line} — ${item.format}" loading="lazy" />
        </a>
        <div class="product-card__body">
          <a href="pdp.html?id=${item.id}" class="product-card__titles">
            <h3 class="product-card__line">${item.line}</h3>
            <p class="product-card__format">${item.format}</p>
          </a>
          <div class="product-card__footer">
            <div class="product-card__pricing">
              ${oldPriceHtml}
              <div class="product-card__price-row">
                <span class="product-card__price">${formatBRL(item.price)}</span>
                ${discountHtml}
              </div>
            </div>
            <button class="add-bag-btn ${inBagClass}" data-add-bag="${item.id}" aria-label="Adicionar ou remover ${item.line} da sacola" aria-pressed="${isItemInCart(item.id)}">
              ${BAG_ICON_SVG}
            </button>
          </div>
        </div>
      </article>`;
  }

  function renderCarousels() {
    const matchFn = (item) =>
      !state.activeFilter ||
      item.concern === state.activeFilter ||
      item.category === state.activeFilter;

    const filteredRoutines = DATA.routines.filter(matchFn);
    const filteredProducts = DATA.products.filter(matchFn);

    routinesTrack.innerHTML = (filteredRoutines.length ? filteredRoutines : DATA.routines)
      .map((item) => buildProductCardHTML(item, true))
      .join("");

    productsTrack.innerHTML = (filteredProducts.length ? filteredProducts : DATA.products)
      .map((item) => buildProductCardHTML(item, false))
      .join("");

    bindCardEvents(routinesTrack);
    bindCardEvents(productsTrack);
  }

  function bindCardEvents(container) {
    container.querySelectorAll("[data-add-bag]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute("data-add-bag");
        toggleCartItem(id);
      });
    });
  }

  function syncCardBagIcons() {
    document.querySelectorAll("[data-add-bag]").forEach((btn) => {
      const id = btn.getAttribute("data-add-bag");
      const active = isItemInCart(id);
      btn.classList.toggle("is-in-bag", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function toggleCartItem(id) {
    const idx = state.cart.findIndex((c) => c.id === id);
    const item = ALL_ITEMS.find((x) => x.id === id);
    if (idx !== -1) {
      state.cart.splice(idx, 1);
      saveCart();
      updateCartUI();
      showToast(`${item ? item.line : "Produto"} removido da sacola.`);
    } else {
      state.cart.push({ id, qty: 1, mode: "single" });
      saveCart();
      updateCartUI();
      showToast(`${item ? item.line : "Produto"} adicionado à sacola.`);
    }
  }

  // Horizontal scroll arrows
  document.querySelectorAll("[data-carousel-prev]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const track = document.getElementById(btn.getAttribute("data-carousel-prev"));
      track.scrollBy({ left: -track.clientWidth * 0.78, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-carousel-next]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const track = document.getElementById(btn.getAttribute("data-carousel-next"));
      track.scrollBy({ left: track.clientWidth * 0.78, behavior: "smooth" });
    });
  });

  // Secondary banner quick-buy triggers
  document.querySelectorAll("[data-quick-buy]").forEach((btn) => {
    btn.addEventListener("click", () => openQuickPDP(btn.getAttribute("data-quick-buy")));
  });

  renderConcerns();
  renderCarousels();

  /* ========================================================================
     7. SOCIAL PROOF / RESULTADOS REAIS
     ======================================================================== */
  const resultsTrack = document.getElementById("results-track");
  resultsTrack.innerHTML = DATA.socialProof
    .map(
      (s) => `
    <article class="story-card">
      <img class="story-card__img" src="${s.image}" alt="${s.product}" loading="lazy" />
      <div class="story-card__scrim"></div>
      <div class="story-card__body">
        <p class="story-card__author">${s.author} · ★ ${s.rating}</p>
        <p class="story-card__product">${s.product}</p>
        <p class="story-card__quote">“${s.quote}”</p>
      </div>
    </article>`
    )
    .join("");

  /* ========================================================================
     8. QUICK-BUY PDP MODAL (Bottom-of-Funnel Checkout + Scientific Actives)
     ======================================================================== */
  const quickPdpModal = document.getElementById("quick-pdp-modal");
  const quickPdpContent = document.getElementById("quick-pdp-content");

  function openQuickPDP(itemId) {
    const item = ALL_ITEMS.find((x) => x.id === itemId);
    if (!item) return;

    const recurPrice = item.price * 0.85;
    const pixPrice = item.price * 0.96;

    quickPdpContent.innerHTML = `
      <div class="quick-pdp">
        <div class="quick-pdp__media">
          <img src="${item.image}" alt="${item.line}" />
        </div>
        <div class="quick-pdp__body">
          <div class="quick-pdp__top">
            <div>
              <h2 class="quick-pdp__line">${item.line}</h2>
              <p class="quick-pdp__format">${item.format} · ${item.volume}</p>
            </div>
            <button id="quick-pdp-close" aria-label="Fechar janela">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1L17 17M17 1L1 17" stroke="#000" stroke-width="1.5"/></svg>
            </button>
          </div>

          <p style="font-size:14px;color:#404040;margin:0;line-height:1.5;">${item.summary}</p>

          <div class="quick-pdp__purchase-options">
            <label class="purchase-opt">
              <span><input type="radio" name="quick-mode" value="single" checked /> Compra única</span>
              <strong>${formatBRL(item.price)}</strong>
            </label>
            <label class="purchase-opt">
              <span><input type="radio" name="quick-mode" value="recur" /> Compra recorrente <small style="color:#737373;">(-15% OFF · a cada 1 mês)</small></span>
              <strong>${formatBRL(recurPrice)}</strong>
            </label>
          </div>

          <p style="font-size:12px;color:#737373;margin:0;">
            Em até 3x de ${formatBRL(item.price / 3)} sem juros · ou <strong>${formatBRL(pixPrice)}</strong> (-4% no PIX)
          </p>

          <div style="display:flex;gap:10px;">
            <button id="quick-pdp-add" class="btn-primary-full">Adicionar à sacola</button>
            <a href="pdp.html?id=${item.id}" class="btn-primary-full" style="background:#fff;color:#000;border:1px solid #000;display:inline-flex;align-items:center;justify-content:center;max-width:170px;">Ver PDP Completa</a>
          </div>

          <details class="quick-pdp__accordion" open>
            <summary>Principais Ativos & Função <span>+</span></summary>
            <ul class="quick-pdp__actives-list">
              ${item.actives
                .map((a) => `<li><strong>${a.name}:</strong> ${a.role}</li>`)
                .join("")}
            </ul>
          </details>

          <details class="quick-pdp__accordion">
            <summary>Como usar essa fórmula <span>+</span></summary>
            <p style="font-size:13px;color:#404040;margin:10px 0 0;">${(item.usageSteps || []).join(" ") || item.usage || ""}</p>
          </details>
        </div>
      </div>`;

    quickPdpModal.showModal();

    document.getElementById("quick-pdp-close").addEventListener("click", () => quickPdpModal.close());
    document.getElementById("quick-pdp-add").addEventListener("click", () => {
      const mode = quickPdpContent.querySelector('input[name="quick-mode"]:checked').value;
      addToCart(item.id, 1, mode);
      quickPdpModal.close();
      openCartDrawer();
    });
  }

  /* ========================================================================
     9. CART / SACOLA DRAWER (Frete Grátis R$399 + Nécessaire R$499 + PIX -4%)
     ======================================================================== */
  const cartDrawer = document.getElementById("cart-drawer");
  const bagBadge = document.getElementById("bag-badge");
  const cartProgress = document.getElementById("cart-progress");
  const cartItemsEl = document.getElementById("cart-items");
  const cartFootEl = document.getElementById("cart-foot");

  function getUnitPrice(entry) {
    const item = ALL_ITEMS.find((x) => x.id === entry.id);
    if (!item) return 0;
    return entry.mode === "recur" ? item.price * 0.85 : item.price;
  }

  function addToCart(id, qty, mode) {
    const existing = state.cart.find((c) => c.id === id && c.mode === mode);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ id, qty, mode });
    }
    const item = ALL_ITEMS.find((x) => x.id === id);
    saveCart();
    updateCartUI();
    showToast(`${item ? item.line : "Produto"} adicionado à sacola.`);
  }

  function updateCartUI() {
    saveCart();
    syncCardBagIcons();
    const totalCount = state.cart.reduce((acc, c) => acc + c.qty, 0);
    bagBadge.textContent = String(totalCount);
    bagBadge.classList.toggle("is-empty", totalCount === 0);
    bagBadge.classList.remove("is-bump");
    void bagBadge.offsetWidth;
    if (totalCount > 0) bagBadge.classList.add("is-bump");

    const subtotal = state.cart.reduce((acc, c) => acc + getUnitPrice(c) * c.qty, 0);
    const couponObj = state.coupon && DATA.coupons ? DATA.coupons[state.coupon] : null;
    const discountVal = couponObj ? subtotal * couponObj.pct : 0;
    const finalTotal = Math.max(0, subtotal - discountVal);

    const freeShipTarget = 399;
    const necessaireTarget = 499;

    let progressMsg = "";
    let pct = Math.min(100, (finalTotal / necessaireTarget) * 100);
    if (finalTotal < freeShipTarget) {
      progressMsg = `Faltam <strong>${formatBRL(freeShipTarget - finalTotal)}</strong> para <strong>Frete Grátis</strong>`;
    } else if (finalTotal < necessaireTarget) {
      progressMsg = `Frete Grátis desbloqueado! Faltam <strong>${formatBRL(necessaireTarget - finalTotal)}</strong> para ganhar a <strong>Nécessaire TJL</strong>`;
    } else {
      progressMsg = `Você desbloqueou <strong>Frete Grátis + Nécessaire TJL</strong>`;
    }

    cartProgress.innerHTML = `
      <p class="cart-progress__label">${progressMsg}</p>
      <div class="cart-progress__bar"><div class="cart-progress__fill" style="width:${pct.toFixed(1)}%"></div></div>`;

    if (state.cart.length === 0) {
      cartItemsEl.innerHTML = `<p style="color:#737373;font-size:14px;text-align:center;margin-top:48px;">Sua sacola está vazia.</p>`;
      cartFootEl.innerHTML = "";
      return;
    }

    cartItemsEl.innerHTML = state.cart
      .map((entry, idx) => {
        const item = ALL_ITEMS.find((x) => x.id === entry.id);
        if (!item) return "";
        const unit = getUnitPrice(entry);
        return `
          <div class="cart-item">
            <img class="cart-item__img" src="${item.image}" alt="${item.line}" />
            <div>
              <p class="cart-item__line">${item.line}</p>
              <p class="cart-item__format">${item.format}${entry.mode === "recur" ? " · Recorrência (-15%)" : ""}</p>
              <div class="cart-item__stepper">
                <button data-cart-dec="${idx}" aria-label="Diminuir quantidade">−</button>
                <span>${entry.qty}</span>
                <button data-cart-inc="${idx}" aria-label="Aumentar quantidade">+</button>
              </div>
            </div>
            <div class="cart-item__right">
              <strong>${formatBRL(unit * entry.qty)}</strong>
              <button class="cart-item__remove" data-cart-rem="${idx}">Remover</button>
            </div>
          </div>`;
      })
      .join("");

    const pixTotal = finalTotal * 0.96;
    const joyCoins = Math.round(finalTotal * 0.05);

    cartFootEl.innerHTML = `
      <div style="display:flex;gap:8px;margin-bottom:14px;">
        <input id="home-coupon-input" type="text" placeholder="Cupom (ex: BLACKTJL, JOY10)" value="${state.coupon || ""}" style="flex:1;border:1px solid #e2e2e2;padding:8px 10px;font-size:12px;text-transform:uppercase;" />
        <button id="home-coupon-btn" type="button" style="background:#000;color:#fff;padding:0 14px;font-size:12px;">Aplicar</button>
      </div>
      ${couponObj ? `<div class="cart-summary-row" style="color:#141414;"><span>Cupom <strong>${state.coupon}</strong> (${couponObj.label})</span><span>−${formatBRL(discountVal)}</span></div>` : ""}
      <div class="cart-summary-row"><span>Subtotal</span><span>${formatBRL(subtotal)}</span></div>
      <div class="cart-summary-row"><span>Frete</span><span>${finalTotal >= freeShipTarget ? "Grátis" : "Calculado no checkout"}</span></div>
      <div class="cart-summary-row"><span>Joy Coins nesta compra</span><span>+${joyCoins} pts</span></div>
      <div class="cart-summary-total"><span>Total</span><span>${formatBRL(finalTotal)}</span></div>
      <p class="cart-pix-note">ou <strong>${formatBRL(pixTotal)}</strong> (-4% no PIX) · até 3x de ${formatBRL(finalTotal / 3)} sem juros</p>
      <button id="checkout-btn" class="btn-primary-full">Finalizar compra</button>`;

    const couponBtn = document.getElementById("home-coupon-btn");
    if (couponBtn) {
      couponBtn.addEventListener("click", () => {
        const raw = document.getElementById("home-coupon-input").value.trim().toUpperCase();
        if (!raw) {
          state.coupon = "";
          localStorage.removeItem("tjl_revisao_coupon");
          updateCartUI();
          return;
        }
        if (DATA.coupons && DATA.coupons[raw]) {
          state.coupon = raw;
          localStorage.setItem("tjl_revisao_coupon", raw);
          updateCartUI();
          showToast(`Cupom ${raw} aplicado com sucesso!`);
        } else {
          showToast("Cupom inválido. Tente BLACKTJL ou JOY10.");
        }
      });
    }

    cartItemsEl.querySelectorAll("[data-cart-dec]").forEach((b) =>
      b.addEventListener("click", () => {
        const i = Number(b.getAttribute("data-cart-dec"));
        if (state.cart[i].qty > 1) state.cart[i].qty--;
        else state.cart.splice(i, 1);
        updateCartUI();
      })
    );
    cartItemsEl.querySelectorAll("[data-cart-inc]").forEach((b) =>
      b.addEventListener("click", () => {
        const i = Number(b.getAttribute("data-cart-inc"));
        state.cart[i].qty++;
        updateCartUI();
      })
    );
    cartItemsEl.querySelectorAll("[data-cart-rem]").forEach((b) =>
      b.addEventListener("click", () => {
        const i = Number(b.getAttribute("data-cart-rem"));
        state.cart.splice(i, 1);
        updateCartUI();
      })
    );

    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        checkoutBtn.textContent = "Pedido simulado com sucesso ✓";
        setTimeout(() => {
          cartDrawer.close();
          showToast("Checkout rápido validado no protótipo.");
        }, 900);
      });
    }
  }

  function openCartDrawer() {
    updateCartUI();
    cartDrawer.showModal();
  }

  document.getElementById("bag-open-btn").addEventListener("click", openCartDrawer);
  document.getElementById("cart-close-btn").addEventListener("click", () => cartDrawer.close());
  updateCartUI();

  /* ========================================================================
     10. SEARCH MODAL & NEWSLETTER
     ======================================================================== */
  const searchModal = document.getElementById("search-modal");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  function renderSearchResults(q) {
    const term = q.trim().toLowerCase();
    const matches = ALL_ITEMS.filter(
      (i) =>
        !term ||
        i.line.toLowerCase().includes(term) ||
        i.format.toLowerCase().includes(term) ||
        i.concern.toLowerCase().includes(term) ||
        i.summary.toLowerCase().includes(term)
    ).slice(0, 8);

    searchResults.innerHTML = matches.length
      ? matches
          .map(
            (m) => `
          <button class="search-result-item" data-search-pick="${m.id}">
            <img src="${m.image}" alt="${m.line}" style="width:100%;aspect-ratio:1/1;object-fit:cover;margin-bottom:8px;background:#f4f4f4;" />
            <p style="font-weight:600;font-size:13px;margin:0 0 2px;">${m.line}</p>
            <p style="font-size:12px;color:#737373;margin:0 0 6px;">${m.format}</p>
            <strong style="font-size:13px;">${formatBRL(m.price)}</strong>
          </button>`
          )
          .join("")
      : `<p style="color:#737373;font-size:14px;">Nenhum produto encontrado para "${q}".</p>`;

    searchResults.querySelectorAll("[data-search-pick]").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-search-pick");
        searchModal.close();
        openQuickPDP(id);
      });
    });
  }

  document.getElementById("search-open-btn").addEventListener("click", () => {
    renderSearchResults("");
    searchModal.showModal();
    searchInput.focus();
  });
  document.getElementById("search-close-btn").addEventListener("click", () => searchModal.close());
  searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));

  document.getElementById("newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const feedback = document.getElementById("newsletter-feedback");
    if (!emailInput.value || !emailInput.value.includes("@")) {
      feedback.textContent = "Por favor, insira um e-mail válido.";
      return;
    }
    feedback.textContent = "Cadastro confirmado! Use o cupom JOY10 para 10% OFF.";
    emailInput.value = "";
  });

  /* ========================================================================
     11. TOAST MICRO-INTERACTION
     ======================================================================== */
  const toastEl = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");
  let toastTimeout = null;

  function showToast(msg) {
    toastMsg.textContent = msg;
    toastEl.classList.add("is-visible");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toastEl.classList.remove("is-visible"), 3200);
  }

  document.getElementById("toast-open-bag").addEventListener("click", () => {
    toastEl.classList.remove("is-visible");
    openCartDrawer();
  });
})();
