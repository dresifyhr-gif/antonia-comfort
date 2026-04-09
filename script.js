/* ═══════════════════════════════════════════════════════
   Antonia Comfort — script.js
   ═══════════════════════════════════════════════════════ */

const WHATSAPP_NUMBER = "385919190123";
const FORM_ENDPOINT   = "https://formsubmit.co/ajax/info.antoniacomfort@gmail.com";

/* ── Category definitions ──────────────────────────────── */
const categoryDefs = [
  { key: "zenske-papuce-ljetne",  label: "Ženske ljetne papuče",  sub: "Koža / Umjetni materijali" },
  { key: "zenske-klompe-ljetne",  label: "Ženske ljetne klompe",  sub: "Koža / Umjetni materijali" },
  { key: "zenske-papuce-zimske",  label: "Ženske zimske papuče",  sub: "Umjetni materijali" },
  { key: "muske-klompe-ljetne",   label: "Muške ljetne klompe",   sub: "Djelomično koža" },
  { key: "muske-papuce-ljetne",   label: "Muške ljetne papuče",   sub: "Umjetni materijali" },
  { key: "cizme-zimske",          label: "Zimske čizme",          sub: "Guma / PVC" },
];

/* ── Real product data ─────────────────────────────────────
   Ženske veličine: 37-41 | Muške veličine: 41-47 | MOQ: 10
   ─────────────────────────────────────────────────────────── */
const products = [

  /* ── Ženske ljetne papuče — djelomično koža (AP001–AP020) ── */
  ...Array.from({ length: 20 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `ap${n}`, sku: `AP${n}`, name: "Ženska ljetna papuča",
      image: `images/products/AP${n}_zenska_ljetna_papuca.jpg`,
      categoryKey: "zenske-papuce-ljetne", categoryLabel: "Ženske ljetne papuče",
      material: "Djelomično koža", size: "37-41", moq: 10,
      description: "Ženska ljetna papuča s djelomično kožnim gornjištem. Lagana, udobna i izdržljiva — idealna za ljekarne, wellness centre i specijalizirane prodavaonice.",
    };
  }),

  /* ── Ženske ljetne papuče — umjetni materijali (NP001–NP083) ── */
  ...Array.from({ length: 83 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `np${n}`, sku: `NP${n}`, name: "Ženska ljetna papuča",
      image: `images/products/NP${n}_zenske_ljetne_papuce.jpg`,
      categoryKey: "zenske-papuce-ljetne", categoryLabel: "Ženske ljetne papuče",
      material: "Umjetni materijali", size: "37-41", moq: 10,
      description: "Ženska ljetna papuča od visokokvalitetnih umjetnih materijala. Lako se čisti, otporna na vlagu — popularan izbor za medicinske ustanove i wellness.",
    };
  }),

  /* ── Ženske ljetne klompe — djelomično koža (AK001–AK072) ── */
  ...Array.from({ length: 72 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `ak${n}`, sku: `AK${n}`, name: "Ženska ljetna klompa",
      image: `images/products/AK${n}_zenska_ljetna_klompa.jpg`,
      categoryKey: "zenske-klompe-ljetne", categoryLabel: "Ženske ljetne klompe",
      material: "Djelomično koža", size: "37-41", moq: 10,
      description: "Ženska ljetna klompa s djelomično kožnim gornjištem. Anatomski oblikovana, izdržljiva i udobna za cijeli radni dan.",
    };
  }),

  /* ── Ženske ljetne klompe — umjetni materijali (DK001–DK032) ── */
  ...Array.from({ length: 32 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `dk${n}`, sku: `DK${n}`, name: "Ženska ljetna klompa",
      image: `images/products/DK${n}_zenska_ljetna_klompa.jpg`,
      categoryKey: "zenske-klompe-ljetne", categoryLabel: "Ženske ljetne klompe",
      material: "Umjetni materijali", size: "37-41", moq: 10,
      description: "Ženska ljetna klompa od visokokvalitetnih umjetnih materijala. Lako se čisti, otporna na vlagu — popularan izbor za medicinske ustanove i wellness.",
    };
  }),

  /* ── Ženske ljetne klompe — 700 serija (700-D1–D30) ── */
  ...Array.from({ length: 30 }, (_, i) => {
    const n = i + 1;
    return {
      id: `700d${n}`, sku: `700-D${n}`, name: "Ženska ljetna klompa",
      image: `images/products/700-D${n}_zenska_klompa_ljeto.jpg`,
      categoryKey: "zenske-klompe-ljetne", categoryLabel: "Ženske ljetne klompe",
      material: "Umjetni materijali", size: "37-41", moq: 10,
      description: "Ženska ljetna klompa od visokokvalitetnih umjetnih materijala. Lako se čisti, otporna na vlagu — popularan izbor za medicinske ustanove i wellness.",
    };
  }),

  /* ── Ženske ljetne klompe — 800 serija (800-D1–D16) ── */
  ...Array.from({ length: 16 }, (_, i) => {
    const n = i + 1;
    return {
      id: `800d${n}`, sku: `800-D${n}`, name: "Ženska ljetna klompa",
      image: `images/products/800-D${n}_zenska_klompa_ljeto.jpg`,
      categoryKey: "zenske-klompe-ljetne", categoryLabel: "Ženske ljetne klompe",
      material: "Umjetni materijali", size: "37-41", moq: 10,
      description: "Ženska ljetna klompa od visokokvalitetnih umjetnih materijala. Lako se čisti, otporna na vlagu — popularan izbor za medicinske ustanove i wellness.",
    };
  }),

  /* ── Ženske zimske papuče — umjetni materijali (PPZ001–PPZ016) ── */
  ...Array.from({ length: 16 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `ppz${n}`, sku: `PPZ${n}`, name: "Ženska zimska papuča",
      image: `images/products/PP${n}_zenska_zimska_papuca.jpg`,
      categoryKey: "zenske-papuce-zimske", categoryLabel: "Ženske zimske papuče",
      material: "Umjetni materijali", size: "37-41", moq: 10,
      description: "Ženska zimska papuča od toplih umjetnih materijala. Udobna i topla — idealna za zimsku sezonu u ljekarnama, wellness centrima i specijaliziranim prodavaonicama.",
    };
  }),

  /* ── Muške ljetne klompe — djelomično koža (AMK001–AMK006) ── */
  ...Array.from({ length: 6 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `amk${n}`, sku: `AMK${n}`, name: "Muška ljetna klompa",
      image: `images/products/AMK${n}_muska_ljetna_klompa.jpg`,
      categoryKey: "muske-klompe-ljetne", categoryLabel: "Muške ljetne klompe",
      material: "Djelomično koža", size: "41-47", moq: 10,
      description: "Muška ljetna klompa s djelomično kožnim gornjištem. Anatomski oblikovana, izdržljiva i udobna — idealna za medicinske ustanove i radna okruženja.",
    };
  }),

  /* ── Muške ljetne klompe — djelomično koža (DMK001–DMK004) ── */
  ...Array.from({ length: 4 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `dmk${n}`, sku: `DMK${n}`, name: "Muška ljetna klompa",
      image: `images/products/DMK${n}_muska_ljetna_klompa.jpg`,
      categoryKey: "muske-klompe-ljetne", categoryLabel: "Muške ljetne klompe",
      material: "Djelomično koža", size: "41-47", moq: 10,
      description: "Muška ljetna klompa s djelomično kožnim gornjištem. Anatomski oblikovana, izdržljiva i udobna — idealna za medicinske ustanove i radna okruženja.",
    };
  }),

  /* ── Muške ljetne papuče — umjetni materijali (PPM001–PPM016) ── */
  ...Array.from({ length: 16 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    const isSandala = n === "012" || n === "013";
    return {
      id: `ppm${n}`, sku: `PPM${n}`, name: isSandala ? "Muška ljetna sandala" : "Muška ljetna papuča",
      image: `images/products/PP${n}_muska_ljetna_${isSandala ? "sandala" : "papuca"}.jpg`,
      categoryKey: "muske-papuce-ljetne", categoryLabel: "Muške ljetne papuče",
      material: "Umjetni materijali", size: "41-47", moq: 10,
      description: "Muška ljetna papuča od visokokvalitetnih umjetnih materijala. Lako se čisti, otporna na vlagu — popularan izbor za medicinske ustanove i wellness.",
    };
  }),

  /* ── Zimske čizme — guma/PVC (C001–C002) ── */
  ...Array.from({ length: 2 }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `c${n}`, sku: `C${n}`, name: "Zimska čizma",
      image: `images/products/C${n}_cizma_zimska_gumenapvc.jpg`,
      categoryKey: "cizme-zimske", categoryLabel: "Zimske čizme",
      material: "Guma / PVC", size: "37-47", moq: 10,
      description: "Zimska čizma od gume i PVC materijala. Vodootporna, neklizajuća i izdržljiva — idealna za zahtjevna radna okruženja.",
    };
  }),
];

/* ── Render catalog card (new design) ──────────────────── */
function renderCatalogCard(product, index) {
  return `
    <article class="product-card">
      <a class="product-card-img-wrap" href="proizvod.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </a>
      <div class="product-card-body">
        <p class="product-card-sku">${product.sku}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-meta">MOQ ${product.moq} pari &nbsp;·&nbsp; Vel. ${product.size}</p>
        <a class="product-card-btn" href="#inquiry-modal"
           data-open-inquiry data-product="${product.name}">Zatraži ponudu</a>
      </div>
    </article>`;
}

/* ── Catalog access unlock ──────────────────────────────── */
const CATALOG_KEY = "ac_catalog_key";
const UNLOCK_CODES = ["AC2025", "ANTONIA2025"]; // klijent može mijenjati

function checkCatalogUnlock() {
  /* Check URL param */
  const params = new URLSearchParams(window.location.search);
  const code = params.get("unlock");
  if (code && UNLOCK_CODES.includes(code.toUpperCase())) {
    localStorage.setItem(CATALOG_KEY, code.toUpperCase());
    /* Clean URL without reloading */
    const clean = window.location.pathname + (params.get("category") ? `?category=${params.get("category")}` : "");
    history.replaceState(null, "", clean);
    return true;
  }
  /* Check localStorage */
  const saved = localStorage.getItem(CATALOG_KEY);
  return saved && UNLOCK_CODES.includes(saved);
}

/* ── Catalog page ───────────────────────────────────────── */
function renderCatalogPage() {
  const productGrid    = document.getElementById("productGrid");
  const countEl        = document.getElementById("catalogCount");
  const emptyEl        = document.getElementById("catalogEmpty");
  const sizeFiltersEl  = document.getElementById("sizeFilters");
  const resetBtn       = document.getElementById("filterReset");
  const mobileCatSel   = document.getElementById("mobileCatSelect");
  const mobileSizeSel  = document.getElementById("mobileSizeSelect");
  const mobileResetBtn = document.getElementById("mobileFilterReset");

  if (!productGrid) return;

  const catalogUnlocked = checkCatalogUnlock();

  /* Render size checkboxes (desktop sidebar) */
  const allSizes = [...new Set(products.map(p => p.size))].sort();
  if (sizeFiltersEl) {
    sizeFiltersEl.innerHTML = allSizes.map(s => `
      <label class="sidebar-check">
        <input type="checkbox" class="size-filter" value="${s}" />
        <span>${s}</span>
      </label>`).join("");
  }

  /* Populate mobile size select */
  if (mobileSizeSel) {
    allSizes.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s;
      mobileSizeSel.appendChild(opt);
    });
  }

  /* Pre-select category from URL */
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("category");
  if (urlCat) {
    const checkbox = document.querySelector(`.cat-filter[value="${urlCat}"]`);
    if (checkbox) checkbox.checked = true;
    if (mobileCatSel) mobileCatSel.value = urlCat;
  }

  function applyFilters() {
    /* Desktop checkboxes */
    const checkedCats  = [...document.querySelectorAll(".cat-filter:checked")].map(el => el.value);
    const checkedSizes = [...document.querySelectorAll(".size-filter:checked")].map(el => el.value);

    /* Mobile selects (take priority if a value is set) */
    const mobileCat  = mobileCatSel?.value  || "";
    const mobileSize = mobileSizeSel?.value || "";

    const activeCats  = mobileCat  ? [mobileCat]  : checkedCats;
    const activeSizes = mobileSize ? [mobileSize] : checkedSizes;

    const filtered = products.filter(p => {
      const catOk  = activeCats.length  === 0 || activeCats.includes(p.categoryKey);
      const sizeOk = activeSizes.length === 0 || activeSizes.includes(p.size);
      return catOk && sizeOk;
    });

    const VISIBLE = 8;
    const visible = catalogUnlocked ? filtered : filtered.slice(0, VISIBLE);
    const locked  = catalogUnlocked ? [] : filtered.slice(VISIBLE);

    let html = visible.map(renderCatalogCard).join("");

    if (locked.length > 0) {
      html += `
        <div class="catalog-locked-wrap">
          <div class="catalog-locked-grid">
            ${locked.slice(0, 12).map(renderCatalogCard).join("")}
          </div>
          <div class="catalog-locked-overlay">
            <div class="catalog-locked-cta">
              <p class="catalog-locked-count">+ ${locked.length} modela dostupno</p>
              <h3 class="catalog-locked-title">Zatražite pristup katalogu</h3>
              <p class="catalog-locked-sub">Ispunite kratki upit i dobit ćete pristupni link s cijelim katalogom i cijenama.</p>
              <div class="catalog-locked-btns">
                <button class="btn btn-black" onclick="document.getElementById('inquiry-modal').classList.add('open'); document.getElementById('cf-message').value = 'Molim pristup cijelom katalogu (ime, tvrtka: ___).'; document.body.style.overflow='hidden';">
                  Zatraži pristup
                </button>
                <a class="btn btn-outline" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Pozdrav, zanima me pristup cijelom katalogu Antonia Comfort.')}" target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>`;
    }

    productGrid.innerHTML = html;
    if (countEl) countEl.textContent = `${filtered.length} modela`;
    if (emptyEl) emptyEl.hidden = filtered.length > 0;
  }

  /* Desktop checkbox listeners */
  document.addEventListener("change", e => {
    if (e.target.classList.contains("cat-filter") ||
        e.target.classList.contains("size-filter")) {
      applyFilters();
    }
  });

  /* Mobile select listeners */
  mobileCatSel?.addEventListener("change",  applyFilters);
  mobileSizeSel?.addEventListener("change", applyFilters);

  /* Desktop reset */
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.querySelectorAll(".cat-filter, .size-filter").forEach(el => (el.checked = false));
      if (mobileCatSel)  mobileCatSel.value  = "";
      if (mobileSizeSel) mobileSizeSel.value = "";
      applyFilters();
    });
  }

  /* Mobile reset */
  if (mobileResetBtn) {
    mobileResetBtn.addEventListener("click", () => {
      if (mobileCatSel)  mobileCatSel.value  = "";
      if (mobileSizeSel) mobileSizeSel.value = "";
      document.querySelectorAll(".cat-filter, .size-filter").forEach(el => (el.checked = false));
      applyFilters();
    });
  }

  applyFilters();
}

/* ── Product detail page ───────────────────────────────── */
function renderProductPage() {
  const detailRoot  = document.getElementById("productDetail");
  const relatedGrid = document.getElementById("relatedGrid");
  const breadcrumb  = document.getElementById("productBreadcrumb");

  if (!detailRoot) return;

  const params  = new URLSearchParams(window.location.search);
  const product = products.find(p => p.id === params.get("id")) || products[0];

  if (breadcrumb) breadcrumb.textContent = product.name;
  document.title = `Antonia Comfort | ${product.name}`;

  const waText = encodeURIComponent(
    `Pozdrav! Zanima me model ${product.name} (${product.sku}). Možete li poslati informacije o MOQ uvjetima i dostupnosti?`
  );

  detailRoot.innerHTML = `
    <div class="detail-media">
      <div class="detail-image-frame">
        <img src="${product.image}" alt="${product.name}" />
      </div>
    </div>
    <div class="detail-copy">
      <span class="detail-pill">${product.categoryLabel} &nbsp;·&nbsp; ${product.sku}</span>
      <h1 class="detail-title">${product.name}</h1>
      <p class="detail-description">${product.description}</p>

      <div class="detail-specs">
        <div class="detail-spec">
          <p class="detail-spec-label">Kategorija</p>
          <p class="detail-spec-value">${product.categoryLabel}</p>
        </div>
        <div class="detail-spec">
          <p class="detail-spec-label">MOQ</p>
          <p class="detail-spec-value">${product.moq} pari</p>
        </div>
        <div class="detail-spec">
          <p class="detail-spec-label">Veličine</p>
          <p class="detail-spec-value">${product.size}</p>
        </div>
        <div class="detail-spec">
          <p class="detail-spec-label">Boja</p>
          <p class="detail-spec-value">${product.color}</p>
        </div>
      </div>

      <ul class="detail-features">
        <li>Premium materijali certificirani za profesionalnu upotrebu</li>
        <li>Dostupan u više boja i veličinskih raspona</li>
        <li>OEM i Private Label mogućnosti</li>
        <li>Brza EU dostava, pouzdani rokovi isporuke</li>
      </ul>

      <div class="detail-actions">
        <a class="btn btn-black btn-lg" href="#inquiry-modal"
           data-open-inquiry data-product="${product.name}">Zatraži ponudu</a>
        <a class="btn btn-outline-black btn-lg"
           href="https://wa.me/${WHATSAPP_NUMBER}?text=${waText}"
           target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
        <a class="btn btn-outline-black btn-lg" href="katalog.html?category=${product.categoryKey}">
          Pogledaj kolekciju
        </a>
      </div>
    </div>`;

  if (relatedGrid) {
    const related = products
      .filter(p => p.categoryKey === product.categoryKey && p.id !== product.id)
      .slice(0, 3);

    relatedGrid.innerHTML = related.map((p, i) => `
      <article class="product-card">
        <a class="product-card-img-wrap" href="proizvod.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </a>
        <div class="product-card-body">
          <p class="product-card-sku">${p.sku}</p>
          <h3 class="product-card-name">${p.name}</h3>
          <p class="product-card-meta">MOQ ${p.moq} pari &nbsp;·&nbsp; Vel. ${p.size}</p>
          <a class="product-card-btn" href="proizvod.html?id=${p.id}">Pogledaj model</a>
        </div>
      </article>`).join("");
  }

}


/* ── Inquiry modal ─────────────────────────────────────── */
function setupInquiryModal() {
  const modal       = document.getElementById("inquiryModal");
  const form        = document.getElementById("inquiryForm");
  const successEl   = document.getElementById("inquirySuccess");
  const submitBtn   = document.getElementById("inquirySubmit");
  const contextEl   = document.getElementById("inquiryContext");
  const msgArea     = form?.querySelector('textarea[name="message"]');

  if (!modal || !form) return;

  function open(productName) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    if (successEl) { successEl.hidden = true; successEl.innerHTML = ""; }

    if (productName && contextEl) {
      contextEl.hidden = false;
      contextEl.textContent = `Upit za: ${productName}`;
      if (msgArea && !msgArea.value.trim()) {
        msgArea.value = `Zanima nas model ${productName}. Molimo informacije o MOQ količinama i roku isporuke.`;
      }
    } else if (contextEl) {
      contextEl.hidden = true;
      contextEl.textContent = "";
    }
    setTimeout(() => form.querySelector('input[name="name"]')?.focus(), 120);
  }

  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("click", e => {
    if (!(e.target instanceof Element)) return;
    const trigger = e.target.closest("[data-open-inquiry]");
    if (trigger) { e.preventDefault(); open(trigger.dataset.product || ""); return; }
    if (e.target.closest("[data-close-inquiry]")) close();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Šalje se...";
    if (successEl) { successEl.hidden = true; successEl.innerHTML = ""; }

    const waFallback = `<br><a class="wa-fallback-link" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">Kontaktirajte nas na WhatsApp →</a>`;

    try {
      const res = await fetch(`https://formsubmit.co/ajax/info.antoniacomfort@gmail.com`, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (res.ok) {
        if (successEl) {
          successEl.innerHTML = "Upit je zaprimljen. Javit ćemo se uskoro.";
          successEl.hidden = false;
        }
        form.reset();
        if (contextEl) { contextEl.hidden = true; contextEl.textContent = ""; }
      } else {
        if (successEl) { successEl.innerHTML = `Slanje nije uspjelo.${waFallback}`; successEl.hidden = false; }
      }
    } catch {
      if (successEl) { successEl.innerHTML = `Greška pri slanju.${waFallback}`; successEl.hidden = false; }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Pošalji upit";
    }
  });
}

/* ── Homepage contact form ─────────────────────────────── */
function setupContactForm() {
  const form    = document.getElementById("contactForm");
  const msgEl   = document.getElementById("contactMsg");
  const submitB = form?.querySelector('[type="submit"]');

  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!submitB) return;
    submitB.disabled = true;
    submitB.textContent = "Šalje se...";
    if (msgEl) { msgEl.className = "form-msg"; msgEl.style.display = "none"; }

    try {
      const res = await fetch(`https://formsubmit.co/ajax/info.antoniacomfort@gmail.com`, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (res.ok) {
        if (msgEl) { msgEl.textContent = "Poruka je zaprimljena. Javit ćemo Vam se uskoro."; msgEl.className = "form-msg success visible"; }
        form.reset();
      } else {
        if (msgEl) { msgEl.textContent = "Slanje nije uspjelo. Kontaktirajte nas direktno na WhatsApp."; msgEl.className = "form-msg error visible"; }
      }
    } catch {
      if (msgEl) { msgEl.textContent = "Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte na WhatsApp."; msgEl.className = "form-msg error visible"; }
    } finally {
      submitB.disabled = false;
      submitB.textContent = "Pošalji upit";
    }
  });
}

/* ── Nav toggle (mobile) ───────────────────────────────── */
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  function openNav() {
    links.classList.add("open");
    toggle.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    links.classList.remove("open");
    toggle.classList.remove("open");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    links.classList.contains("open") ? closeNav() : openNav();
  });

  // Close when any nav link is tapped
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));

  // Close when tapping outside the nav
  document.addEventListener("click", e => {
    if (links.classList.contains("open") &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)) {
      closeNav();
    }
  });
}

/* ── Update WA links with real number ──────────────────── */
function updateWALinks() {
  document.querySelectorAll('a[href*="385919190123"]').forEach(a => {
    a.href = a.href.replace("385919190123", WHATSAPP_NUMBER);
  });
}

/* ── Reveal on scroll ──────────────────────────────────── */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  els.forEach(el => obs.observe(el));
}

/* ── i18n — auto-detect language ───────────────────────── */
function detectLang() {
  // 1. User has manually chosen → always respect that
  const saved = localStorage.getItem("ac_lang");
  if (saved) return saved;

  // 2. Read browser / OS language preference
  const supported = typeof LANG_META !== "undefined"
    ? Object.keys(LANG_META)
    : ["hr","en","de","it","tr","sl","hu","es","fr","ru","ar"];

  const browserLangs = Array.from(navigator.languages || [navigator.language || "hr"]);

  for (const raw of browserLangs) {
    const code = raw.split("-")[0].toLowerCase();
    // Croatian / Bosnian / Serbian all map to Croatian version
    if (["hr","bs","sr"].includes(code)) return "hr";
    if (supported.includes(code)) return code;
  }

  return "hr"; // default fallback
}

function t(key) {
  const lang = detectLang();
  const dict = (typeof TRANSLATIONS !== "undefined" && TRANSLATIONS[lang]) || {};
  return dict[key] || (TRANSLATIONS?.hr?.[key]) || key;
}

function applyTranslations() {
  const lang = detectLang();
  /* RTL for Arabic */
  const isRtl = (typeof LANG_META !== "undefined" && LANG_META[lang]?.rtl) || false;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}

function setupLangSwitcher() {
  const switcher = document.querySelector(".lang-switcher");
  if (!switcher) return;

  const currentLang = detectLang();
  const meta = (typeof LANG_META !== "undefined" && LANG_META[currentLang]) || { flag: "🇭🇷", code: "HR" };

  const flagEl = switcher.querySelector(".lang-flag");
  const codeEl = switcher.querySelector(".lang-code");
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;

  /* Mark active */
  switcher.querySelectorAll("[data-lang]").forEach(li => {
    li.classList.toggle("active", li.dataset.lang === currentLang);
  });

  const btn = switcher.querySelector(".lang-current");
  btn?.addEventListener("click", e => {
    e.stopPropagation();
    switcher.classList.toggle("open");
    btn.setAttribute("aria-expanded", switcher.classList.contains("open"));
  });

  switcher.querySelectorAll("[data-lang]").forEach(li => {
    li.addEventListener("click", () => {
      const lang = li.dataset.lang;
      localStorage.setItem("ac_lang", lang);
      switcher.classList.remove("open");
      const m = LANG_META?.[lang] || { flag: "🇭🇷", code: "HR" };
      if (flagEl) flagEl.textContent = m.flag;
      if (codeEl) codeEl.textContent = m.code;
      switcher.querySelectorAll("[data-lang]").forEach(x => x.classList.toggle("active", x.dataset.lang === lang));
      applyTranslations();
    });
  });

  document.addEventListener("click", e => {
    if (!switcher.contains(e.target)) {
      switcher.classList.remove("open");
      btn?.setAttribute("aria-expanded", "false");
    }
  });
}

/* ── Cookie banner ─────────────────────────────────────── */
function setupCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  if (!banner) return;

  // Already decided → don't show
  if (localStorage.getItem("ac_cookies")) return;

  // Show after short delay so page loads first
  setTimeout(() => banner.removeAttribute("hidden"), 900);

  function dismiss(accepted) {
    localStorage.setItem("ac_cookies", accepted ? "1" : "0");
    banner.style.animation = "cookieSlideUp 0.3s ease reverse";
    setTimeout(() => banner.setAttribute("hidden", ""), 280);
  }

  banner.querySelector(".cookie-accept")
    ?.addEventListener("click", () => dismiss(true));
  banner.querySelector(".cookie-decline")
    ?.addEventListener("click", () => dismiss(false));
}

/* ── Init ──────────────────────────────────────────────── */
setupNav();
setupInquiryModal();
setupContactForm();
renderCatalogPage();
renderProductPage();
updateWALinks();
setupReveal();
setupLangSwitcher();
applyTranslations();
setupCookieBanner();
