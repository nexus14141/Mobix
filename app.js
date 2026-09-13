/* ================= Utilities ================= */

function getProduct(id){ return MOBIX_PRODUCTS.find(p => p.id === id); }

function fieldsForCategory(cat){ return CATEGORY_SCORE_FIELDS[cat] || ["performance","value"]; }

function sharedFields(catA, catB){
  const a = fieldsForCategory(catA), b = fieldsForCategory(catB);
  return a.filter(f => b.includes(f));
}

/* weighted score 0-100 given a weights map { field: 0-100 } */
function weightedScore(product, weights, fields){
  let sum = 0, wsum = 0;
  fields.forEach(f => {
    const w = weights[f] ?? 50;
    const s = product.scores[f];
    if (s === undefined) return;
    sum += s * w;
    wsum += w;
  });
  return wsum === 0 ? 0 : Math.round(sum / wsum);
}

function fieldLabel(f){
  const map = { performance:"Performance", gaming:"Gaming", battery:"Battery", camera:"Camera", display:"Display", value:"Value", longevity:"Longevity" };
  return map[f] || f;
}

function parseHash(){
  const raw = location.hash.replace(/^#/, "") || "/";
  const [path, queryStr] = raw.split("?");
  const params = new URLSearchParams(queryStr || "");
  return { path: path || "/", params };
}

function navigate(hash){ location.hash = hash; }

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

/* ================= Device icons =================
   Generic per-category illustrations (not real product photography —
   manufacturer photos are copyrighted and can't be reproduced here). */

const DEVICE_ICONS = {
  phones: `<svg viewBox="0 0 48 48" fill="none"><rect x="14" y="4" width="20" height="40" rx="4" stroke="currentColor" stroke-width="2.2"/><line x1="20" y1="9" x2="28" y2="9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="24" cy="38.5" r="1.6" fill="currentColor"/></svg>`,
  laptops: `<svg viewBox="0 0 48 48" fill="none"><rect x="10" y="8" width="28" height="19" rx="2" stroke="currentColor" stroke-width="2.2"/><path d="M6 37h36l-3 4H9l-3-4z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><line x1="6" y1="37" x2="42" y2="37" stroke="currentColor" stroke-width="2.2"/></svg>`,
  components: `<svg viewBox="0 0 48 48" fill="none"><rect x="12" y="12" width="24" height="24" rx="3" stroke="currentColor" stroke-width="2.2"/><rect x="19" y="19" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><line x1="18" y1="6" x2="18" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="30" y1="6" x2="30" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="18" y1="36" x2="18" y2="42" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="30" y1="36" x2="30" y2="42" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="6" y1="18" x2="12" y2="18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="6" y1="30" x2="12" y2="30" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="36" y1="18" x2="42" y2="18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="36" y1="30" x2="42" y2="30" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  consoles: `<svg viewBox="0 0 48 48" fill="none"><path d="M12 18h24a8 8 0 018 8v6a5 5 0 01-9 3l-3-4H16l-3 4a5 5 0 01-9-3v-6a8 8 0 018-8z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><line x1="16" y1="24" x2="16" y2="30" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="13" y1="27" x2="19" y2="27" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="33" cy="24" r="1.7" fill="currentColor"/><circle cx="29" cy="29" r="1.7" fill="currentColor"/></svg>`,
  handhelds: `<svg viewBox="0 0 48 48" fill="none"><rect x="5" y="15" width="38" height="20" rx="7" stroke="currentColor" stroke-width="2.2"/><rect x="18" y="19" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="11" cy="25" r="2" fill="currentColor"/><circle cx="37" cy="25" r="2" fill="currentColor"/></svg>`,
  tablets: `<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="5" width="32" height="38" rx="4" stroke="currentColor" stroke-width="2.2"/><line x1="18" y1="39" x2="30" y2="39" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  monitors: `<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="23" rx="2.5" stroke="currentColor" stroke-width="2.2"/><line x1="24" y1="31" x2="24" y2="38" stroke="currentColor" stroke-width="2.2"/><line x1="15" y1="41" x2="33" y2="41" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`
};

function deviceIconHtml(category){
  return DEVICE_ICONS[category] || DEVICE_ICONS.phones;
}

function accentVars(category){
  const a = CATEGORY_ACCENT[category] || "amber";
  return { color: `var(--${a})`, bg: `var(--${a}-dim)` };
}

/* ================= Product card ================= */

function productCardHtml(p){
  const av = accentVars(p.category);
  return `
  <a class="pcard" href="#/product/${p.id}">
    <div class="img" style="background:${av.bg}; color:${av.color};"><div style="width:34px;height:34px;">${deviceIconHtml(p.category)}</div></div>
    <div class="body">
      <div class="name">${p.name}</div>
      <div class="price">$${p.price}</div>
      <div class="match"><span class="dot"></span>${weightedScore(p, {}, fieldsForCategory(p.category))} MOBIX score</div>
    </div>
  </a>`;
}

/* ================= View: HOME ================= */

function renderHome(){
  const trending = MOBIX_PRODUCTS.slice(0, 6);
  const cheapestFirst = [...MOBIX_PRODUCTS].sort((a,b) => a.price - b.price);
  const drops = cheapestFirst.slice(2, 5);
  const bestForYou = [...MOBIX_PRODUCTS].sort((a,b) => weightedScore(b,{},fieldsForCategory(b.category)) - weightedScore(a,{},fieldsForCategory(a.category))).slice(0,3);

  document.getElementById("app").innerHTML = `
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-text">
          <h1>Don't just compare tech.<br>Find what fits you.</h1>
          <p>MOBIX analyzes performance, price, gaming, battery, cameras, longevity, and real-world use to help you choose the right device for your needs.</p>
          <form class="hero-search" id="heroSearchForm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;color:var(--dim)"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="heroSearchInput" placeholder="Search phones, laptops, GPUs, consoles...">
            <button class="btn-amber" type="submit">Search</button>
          </form>
          <div class="hero-cta-row">
            <a class="btn-solid" href="#/find">Find My Device</a>
            <a class="btn-ghost" href="#/compare">Compare Devices</a>
          </div>
        </div>
        <div class="dial-wrap">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" stroke="var(--elevated)" stroke-width="10" fill="none"/>
            <circle cx="60" cy="60" r="52" stroke="var(--amber)" stroke-width="10" fill="none" stroke-dasharray="326.7" stroke-dashoffset="30" stroke-linecap="round"/>
          </svg>
          <div class="dial-center"><div class="num">91</div><div class="lbl">MOBIX MATCH</div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Categories</h2></div>
      <div class="cat-strip">
        ${CATEGORIES.map(c => `<a class="cat-tile" href="#/search?cat=${c.id}"><div class="ic" style="background:${accentVars(c.id).bg}; color:${accentVars(c.id).color};"><div style="width:24px;height:24px;">${deviceIconHtml(c.id)}</div></div><span>${c.label}</span></a>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Trending devices</h2><a href="#/search">See all</a></div>
      <div class="h-scroll">${trending.map(productCardHtml).join("")}</div>
    </section>

    <section class="section">
      <div class="fmd-panel" style="background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-l); padding:26px 22px; display:flex; flex-direction:column; gap:16px;">
        <div>
          <h3 style="font-size:19px; font-weight:600;">Not sure what to buy?</h3>
          <p style="color:var(--muted); font-size:14px; margin-top:8px; max-width:420px; line-height:1.5;">Answer a few quick questions about budget and how you'll use it — MOBIX narrows the field down to one clear pick.</p>
        </div>
        <a class="btn-amber" style="align-self:flex-start;" href="#/find">Start →</a>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><h2>Price drops</h2><a href="#/search">See all</a></div>
      ${drops.map(p => `
        <a href="#/product/${p.id}" style="text-decoration:none;">
          <div style="display:flex; align-items:center; gap:14px; background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-m); padding:12px 14px; margin-bottom:10px;">
            <div style="width:44px; height:44px; border-radius:10px; background:${accentVars(p.category).bg}; color:${accentVars(p.category).color}; flex-shrink:0; display:flex; align-items:center; justify-content:center;"><div style="width:22px;height:22px;">${deviceIconHtml(p.category)}</div></div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:13.5px; font-weight:600; color:var(--text);">${p.name}</div>
              <div style="font-size:12px; color:var(--dim); margin-top:2px;">$${p.price}</div>
            </div>
          </div>
        </a>
      `).join("")}
    </section>

    <section class="section">
      <div class="section-head"><h2>Best for you</h2></div>
      ${bestForYou.map(p => `
        <a href="#/product/${p.id}" style="text-decoration:none;">
          <div style="display:flex; gap:14px; align-items:center; background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-l); padding:16px; margin-bottom:10px;">
            <div style="width:56px; height:56px; border-radius:12px; background:${accentVars(p.category).bg}; color:${accentVars(p.category).color}; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><div style="width:28px;height:28px;">${deviceIconHtml(p.category)}</div></div>
            <div style="flex:1; min-width:0;">
              <div style="font-size:14px; font-weight:600; color:var(--text);">${p.name}</div>
              <div style="font-size:12.5px; color:var(--muted); margin-top:3px;">${p.bestFor.slice(0,2).join(" · ")}</div>
            </div>
            <div style="text-align:center; flex-shrink:0;">
              <div style="font-family:'Space Grotesk'; font-size:19px; font-weight:700; color:var(--mint);">${weightedScore(p,{},fieldsForCategory(p.category))}</div>
              <div style="font-size:9.5px; color:var(--dim);">MATCH</div>
            </div>
          </div>
        </a>
      `).join("")}
      <span class="demo-tag">Demo data — not yet based on a real profile</span>
    </section>
  `;

  document.getElementById("heroSearchForm").addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("heroSearchInput").value.trim();
    navigate(`#/search?q=${encodeURIComponent(q)}`);
  });
}

/* ================= View: SEARCH ================= */

function renderSearch(params){
  const q = (params.get("q") || "").toLowerCase();
  const cat = params.get("cat") || "";

  let results = MOBIX_PRODUCTS.filter(p => {
    const matchesQ = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) || Object.values(p.specs).join(" ").toLowerCase().includes(q);
    const matchesCat = !cat || p.category === cat;
    return matchesQ && matchesCat;
  });

  document.getElementById("app").innerHTML = `
    <div class="search-page-bar">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" id="searchPageInput" placeholder="Search phones, laptops, GPUs, consoles..." value="${escapeHtml(q)}">
    </div>
    <div class="filter-row">
      <button class="btn-chip ${cat==='' ? 'active':''}" data-cat="">All</button>
      ${CATEGORIES.map(c => `<button class="btn-chip ${cat===c.id?'active':''}" data-cat="${c.id}">${c.icon} ${c.label}</button>`).join("")}
    </div>
    <div class="section-head"><h2>${results.length} result${results.length===1?'':'s'}</h2></div>
    ${results.length ? `<div class="grid-cards">${results.map(productCardHtml).join("")}</div>` : `<div class="empty-state">No devices match that search yet. Try a different term or category.</div>`}
  `;

  const input = document.getElementById("searchPageInput");
  input.addEventListener("input", () => {
    const sp = new URLSearchParams(location.hash.split("?")[1] || "");
    sp.set("q", input.value);
    if (!input.value) sp.delete("q");
    navigate(`#/search?${sp.toString()}`);
  });
  document.querySelectorAll(".filter-row .btn-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const sp = new URLSearchParams(location.hash.split("?")[1] || "");
      const c = btn.dataset.cat;
      if (c) sp.set("cat", c); else sp.delete("cat");
      navigate(`#/search?${sp.toString()}`);
    });
  });
}

/* ================= View: PRODUCT PAGE ================= */

function renderProduct(id){
  const p = getProduct(id);
  if (!p){ document.getElementById("app").innerHTML = `<div class="empty-state">Device not found.</div>`; return; }
  const fields = fieldsForCategory(p.category);
  const match = weightedScore(p, {}, fields);

  const ppAv = accentVars(p.category);
  document.getElementById("app").innerHTML = `
    <div class="pp-head">
      <div class="pp-image" style="background:${ppAv.bg}; color:${ppAv.color};"><div style="width:64px;height:64px;">${deviceIconHtml(p.category)}</div></div>
      <div class="pp-info">
        <div class="brand">${p.brand}</div>
        <h1>${p.name}</h1>
        <div class="price">$${p.price} ${p.currency}</div>
        <div class="pp-match-row">
          <div class="pp-match-num">${match}</div>
          <div>
            <div style="font-weight:600; font-size:13.5px;">MOBIX Match</div>
            <div class="pp-match-lbl">Out of 100, general-use weighting</div>
          </div>
        </div>
        <div class="pp-actions">
          <a class="btn-amber" href="#/compare?a=${p.id}">Compare</a>
          <a class="btn-solid" href="#/upgrade?to=${p.id}">Should I upgrade?</a>
        </div>
      </div>
    </div>

    <div class="best-not-grid">
      <div class="bn-card best"><h4>BEST FOR</h4><ul>${p.bestFor.map(b=>`<li>${b}</li>`).join("")}</ul></div>
      <div class="bn-card not"><h4>NOT IDEAL FOR</h4><ul>${p.notIdealFor.map(b=>`<li>${b}</li>`).join("")}</ul></div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Device DNA</h2></div>
      <div class="score-bars">
        ${fields.map(f => `
          <div class="score-bar-row">
            <div class="lbl">${fieldLabel(f)}</div>
            <div class="score-bar-track"><div class="score-bar-fill" style="width:${p.scores[f]}%;"></div></div>
            <div class="val">${p.scores[f]}</div>
          </div>
        `).join("")}
      </div>
      <div class="dna-actions">
        <button class="btn-chip" data-dna="camera">📸 Better camera</button>
        <button class="btn-chip" data-dna="battery">🔋 Better battery</button>
        <button class="btn-chip" data-dna="cheaper">💰 Cheaper</button>
        <button class="btn-chip" data-dna="performance">⚡ More powerful</button>
      </div>
      <div id="dnaResults" style="margin-top:14px;"></div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Specifications</h2></div>
      <table class="spec-table">
        ${Object.entries(p.specs).filter(([,v]) => v !== "—").map(([k,v]) => `<tr><td>${k.charAt(0).toUpperCase()+k.slice(1)}</td><td>${v}</td></tr>`).join("")}
      </table>
      <div class="source-line">Source: ${p.source} · Last updated: ${p.lastUpdated}</div>
    </div>
  `;

  document.querySelectorAll("[data-dna]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-dna]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.dataset.dna;
      let pool = MOBIX_PRODUCTS.filter(x => x.category === p.category && x.id !== p.id);
      let sorted;
      if (mode === "cheaper"){
        sorted = pool.filter(x => x.price < p.price).sort((a,b)=>a.price-b.price);
      } else {
        sorted = pool.filter(x => (x.scores[mode] || 0) > (p.scores[mode] || 0)).sort((a,b)=>(b.scores[mode]||0)-(a.scores[mode]||0));
      }
      const top = sorted.slice(0,3);
      const box = document.getElementById("dnaResults");
      box.innerHTML = top.length
        ? `<div class="h-scroll">${top.map(productCardHtml).join("")}</div>`
        : `<div class="empty-state">Nothing in this category beats it on that yet.</div>`;
    });
  });
}

/* ================= View: COMPARE ================= */

function renderCompare(params){
  const aId = params.get("a") || "";
  const bId = params.get("b") || "";
  const a = getProduct(aId), b = getProduct(bId);

  const optionsHtml = (selectedId) => CATEGORIES.map(c => `
    <optgroup label="${c.label}">
      ${MOBIX_PRODUCTS.filter(p=>p.category===c.id).map(p => `<option value="${p.id}" ${p.id===selectedId?'selected':''}>${p.name}</option>`).join("")}
    </optgroup>
  `).join("");

  document.getElementById("app").innerHTML = `
    <div class="section-head"><h2>Compare devices</h2></div>
    <div class="compare-picker">
      <select id="pickA" class="btn-solid" style="flex:1; padding:12px;"><option value="">Choose a device...</option>${optionsHtml(aId)}</select>
      <div class="vs-badge">VS</div>
      <select id="pickB" class="btn-solid" style="flex:1; padding:12px;"><option value="">Choose a device...</option>${optionsHtml(bId)}</select>
    </div>
    <div id="compareResult"></div>
  `;

  document.getElementById("pickA").addEventListener("change", e => {
    const sp = new URLSearchParams(location.hash.split("?")[1] || "");
    sp.set("a", e.target.value); navigate(`#/compare?${sp.toString()}`);
  });
  document.getElementById("pickB").addEventListener("change", e => {
    const sp = new URLSearchParams(location.hash.split("?")[1] || "");
    sp.set("b", e.target.value); navigate(`#/compare?${sp.toString()}`);
  });

  if (!a || !b){
    document.getElementById("compareResult").innerHTML = `<div class="empty-state">Choose two devices to see how they compare.</div>`;
    return;
  }

  const fields = sharedFields(a.category, b.category);
  const weights = {}; fields.forEach(f => weights[f] = 50);

  function renderResult(){
    const winners = fields.map(f => ({ field:f, winner: a.scores[f] === b.scores[f] ? "tie" : (a.scores[f] > b.scores[f] ? "a" : "b") }));
    const scoreA = weightedScore(a, weights, fields);
    const scoreB = weightedScore(b, weights, fields);

    document.getElementById("compareResult").innerHTML = `
      <div class="section-head"><h2>Who wins?</h2></div>
      <div class="winner-list">
        ${winners.map(w => `
          <div class="winner-row">
            <span>${fieldLabel(w.field)}</span>
            <span class="${w.winner!=='tie' ? 'win':''}">${w.winner==='tie' ? 'Tie' : (w.winner==='a' ? a.name : b.name)}</span>
          </div>
        `).join("")}
      </div>

      <div class="result-banner">
        <div class="result-item ${scoreA>=scoreB?'winner':''}"><div class="n">${scoreA}</div><div class="l">${a.name}</div></div>
        <div class="result-item ${scoreB>scoreA?'winner':''}"><div class="n">${scoreB}</div><div class="l">${b.name}</div></div>
      </div>

      <div class="weight-panel">
        <div class="section-head"><h2>Change what matters</h2></div>
        ${fields.map(f => `
          <div class="weight-row">
            <label>${fieldLabel(f)}</label>
            <input type="range" min="0" max="100" value="${weights[f]}" data-field="${f}">
            <span class="wv" id="wv-${f}">${weights[f]}</span>
          </div>
        `).join("")}
      </div>
    `;

    document.querySelectorAll('.weight-row input[type=range]').forEach(input => {
      input.addEventListener("input", () => {
        weights[input.dataset.field] = Number(input.value);
        document.getElementById(`wv-${input.dataset.field}`).textContent = input.value;
        updateBanner();
      });
    });
  }

  function updateBanner(){
    const scoreA = weightedScore(a, weights, fields);
    const scoreB = weightedScore(b, weights, fields);
    const bar = document.querySelector(".result-banner");
    bar.innerHTML = `
      <div class="result-item ${scoreA>=scoreB?'winner':''}"><div class="n">${scoreA}</div><div class="l">${a.name}</div></div>
      <div class="result-item ${scoreB>scoreA?'winner':''}"><div class="n">${scoreB}</div><div class="l">${b.name}</div></div>
    `;
  }

  renderResult();
}

/* ================= View: FIND MY DEVICE ================= */

const wizardState = { step: 1, category: null, budget: 700, weights: {}, useCases: [] };

const USE_CASES = [
  { id:"gaming", label:"🎮 Gaming", boosts:{ gaming:25, performance:10 } },
  { id:"editing", label:"🎬 Video editing", boosts:{ performance:25, display:10 } },
  { id:"coding", label:"💻 Coding", boosts:{ performance:20, battery:10 } },
  { id:"school", label:"📚 School", boosts:{ value:20, battery:10 } },
  { id:"photo", label:"📸 Photography", boosts:{ camera:30 } },
  { id:"work", label:"💼 Work", boosts:{ battery:15, longevity:15 } },
];

function renderFind(){
  const s = wizardState;
  const app = document.getElementById("app");

  if (s.step === 1){
    app.innerHTML = wizardShell("Step 1 of 4", "What are you buying?", `
      <div class="choice-grid">
        ${CATEGORIES.map(c => `<button class="choice-btn ${s.category===c.id?'selected':''}" data-cat="${c.id}">${c.icon}<br>${c.label}</button>`).join("")}
      </div>
    `, false, !!s.category);
    document.querySelectorAll("[data-cat]").forEach(b => b.addEventListener("click", () => { s.category = b.dataset.cat; renderFind(); }));
  }

  else if (s.step === 2){
    app.innerHTML = wizardShell("Step 2 of 4", "What's your budget?", `
      <div style="margin-top:18px;">
        <input type="range" min="150" max="2000" step="50" value="${s.budget}" id="budgetRange" style="width:100%; accent-color:var(--amber);">
        <div style="text-align:center; font-family:'Space Grotesk'; font-size:28px; font-weight:700; margin-top:10px;">$${s.budget}</div>
      </div>
    `, true, true);
    document.getElementById("budgetRange").addEventListener("input", e => {
      s.budget = Number(e.target.value);
      renderFind();
    });
  }

  else if (s.step === 3){
    const fields = fieldsForCategory(s.category);
    fields.forEach(f => { if (s.weights[f] === undefined) s.weights[f] = 50; });
    app.innerHTML = wizardShell("Step 3 of 4", "What matters most?", `
      <div class="weight-panel" style="margin-top:6px;">
        ${fields.map(f => `
          <div class="weight-row">
            <label>${fieldLabel(f)}</label>
            <input type="range" min="0" max="100" value="${s.weights[f]}" data-field="${f}">
            <span class="wv" id="fwv-${f}">${s.weights[f]}</span>
          </div>
        `).join("")}
      </div>
    `, true, true);
    document.querySelectorAll('[data-field]').forEach(input => {
      input.addEventListener("input", () => {
        s.weights[input.dataset.field] = Number(input.value);
        document.getElementById(`fwv-${input.dataset.field}`).textContent = input.value;
      });
    });
  }

  else if (s.step === 4){
    app.innerHTML = wizardShell("Step 4 of 4", "What will you actually do with it?", `
      <div class="choice-grid">
        ${USE_CASES.map(u => `<button class="choice-btn ${s.useCases.includes(u.id)?'selected':''}" data-uc="${u.id}">${u.label}</button>`).join("")}
      </div>
      <p style="color:var(--muted); font-size:12.5px; margin-top:14px;">Pick as many as apply — or skip ahead to see your match.</p>
    `, true, true, "See my match");
    document.querySelectorAll("[data-uc]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.uc;
      if (s.useCases.includes(id)) s.useCases = s.useCases.filter(x=>x!==id); else s.useCases.push(id);
      renderFind();
    }));
  }

  else if (s.step === 5){
    const fields = fieldsForCategory(s.category);
    const effWeights = { ...s.weights };
    s.useCases.forEach(id => {
      const uc = USE_CASES.find(u=>u.id===id);
      Object.entries(uc.boosts).forEach(([f,v]) => { if (fields.includes(f)) effWeights[f] = Math.min(100, (effWeights[f]||50) + v); });
    });

    let pool = MOBIX_PRODUCTS.filter(p => p.category === s.category && p.price <= s.budget);
    let usedFallback = false;
    if (pool.length === 0){ pool = MOBIX_PRODUCTS.filter(p => p.category === s.category).sort((a,b)=>a.price-b.price).slice(0,3); usedFallback = true; }

    const ranked = pool.map(p => ({ p, score: weightedScore(p, effWeights, fields) })).sort((a,b)=>b.score-a.score);
    const top = ranked[0];

    const highWeightFields = fields.filter(f => (effWeights[f]||50) >= 60);
    const reasonsOk = top ? top.p.bestFor.slice(0,3) : [];
    const reasonsWarn = top ? top.p.notIdealFor.slice(0,1) : [];

    app.innerHTML = `
      <div class="wizard-card">
        <div class="wizard-step-lbl">YOUR MOBIX MATCH</div>
        ${usedFallback ? `<p style="color:var(--coral); font-size:13px; margin-top:8px;">Nothing in ${s.category} fit that budget — showing the closest options instead.</p>` : ""}
        ${top ? `
          <div class="match-hero"><div class="n">${top.score}%</div></div>
          <h3 style="text-align:center;">${top.p.name} — ${top.score}% match</h3>
          <div style="max-width:340px; margin:16px auto 0;">
            ${reasonsOk.map(r => `<div class="reason-line ok">✅ ${r}</div>`).join("")}
            ${reasonsWarn.map(r => `<div class="reason-line warn">⚠️ ${r}</div>`).join("")}
          </div>
          <div style="text-align:center; margin-top:18px;"><a class="btn-amber" href="#/product/${top.p.id}">View ${top.p.name}</a></div>
        ` : `<div class="empty-state">No devices found in that category yet.</div>`}
      </div>
      ${ranked.length > 1 ? `
        <div class="section">
          <div class="section-head"><h2>Other options</h2></div>
          <div class="h-scroll">${ranked.slice(1,4).map(r => productCardHtml(r.p)).join("")}</div>
        </div>
      ` : ""}
      <div style="text-align:center; margin-top:10px;">
        <button class="btn-ghost" id="restartWizard">Start over</button>
      </div>
    `;
    document.getElementById("restartWizard").addEventListener("click", () => {
      wizardState.step = 1; wizardState.category = null; wizardState.weights = {}; wizardState.useCases = [];
      renderFind();
    });
  }
}

function wizardShell(stepLbl, title, body, showBack, canNext, nextLbl){
  const s = wizardState;
  return `
    <div class="wizard-card">
      <div class="wizard-step-lbl">${stepLbl}</div>
      <h3>${title}</h3>
      ${body}
      <div class="wizard-nav">
        ${showBack ? `<button class="btn-ghost" id="wizBack">Back</button>` : `<span></span>`}
        <button class="btn-amber" id="wizNext" ${canNext ? "" : "disabled style='opacity:.4;'"}>${nextLbl || "Next →"}</button>
      </div>
    </div>
  `;
}

document.addEventListener("click", e => {
  if (e.target && e.target.id === "wizNext"){ wizardState.step++; renderFind(); }
  if (e.target && e.target.id === "wizBack"){ wizardState.step--; renderFind(); }
});

/* ================= View: UPGRADE CALCULATOR ================= */

const UPGRADE_FIELDS = ["performance","gaming","battery","camera","display"];

function renderUpgrade(params){
  const toId = params.get("to") || "";
  const fromId = params.get("from") || "";
  const to = getProduct(toId);

  if (!to){
    document.getElementById("app").innerHTML = `<div class="empty-state">Pick a device from its product page to check an upgrade.</div>`;
    return;
  }
  const sameCategory = MOBIX_PRODUCTS.filter(p => p.category === to.category && p.id !== to.id);
  const from = getProduct(fromId) || sameCategory[0];

  document.getElementById("app").innerHTML = `
    <div class="section-head"><h2>Should I upgrade?</h2></div>
    <div class="upgrade-picker">
      <select id="fromPick">${sameCategory.map(p => `<option value="${p.id}" ${from && p.id===from.id?'selected':''}>${p.name}</option>`).join("")}</select>
      <div class="upgrade-arrow">→</div>
      <div class="btn-solid" style="flex:1; text-align:center;">${to.name}</div>
    </div>
    <div id="upgradeResult"></div>
  `;

  document.getElementById("fromPick").addEventListener("change", e => {
    navigate(`#/upgrade?to=${to.id}&from=${e.target.value}`);
  });

  if (!from){ document.getElementById("upgradeResult").innerHTML = `<div class="empty-state">No other ${to.category} to compare from yet.</div>`; return; }

  const fields = UPGRADE_FIELDS.filter(f => (fieldsForCategory(to.category).includes(f)) && from.scores[f] > 0 && to.scores[f] >= 0);
  const deltas = fields.map(f => {
    const pct = from.scores[f] === 0 ? 0 : Math.round(((to.scores[f] - from.scores[f]) / from.scores[f]) * 100);
    return { field:f, pct };
  });
  const avg = deltas.length ? Math.round(deltas.reduce((s,d)=>s+d.pct,0) / deltas.length) : 0;

  let verdictClass, verdictText, verdictSub;
  if (avg >= 50){ verdictClass="big"; verdictText="🚀 Big upgrade"; verdictSub="Worth it if the price fits your budget."; }
  else if (avg >= 15){ verdictClass="moderate"; verdictText="🟡 Moderate upgrade"; verdictSub="A real improvement, but not dramatic."; }
  else { verdictClass="skip"; verdictText="🔴 Not worth it yet"; verdictSub="Keep your current device for now."; }

  document.getElementById("upgradeResult").innerHTML = `
    <div class="section">
      ${deltas.map(d => `
        <div class="improve-row">
          <div class="top"><span>${fieldLabel(d.field)}</span><span>${d.pct>=0?'+':''}${d.pct}%</span></div>
          <div class="improve-track"><div class="improve-fill ${d.pct<0?'negative':''}" style="width:${Math.min(100,Math.abs(d.pct))}%;"></div></div>
        </div>
      `).join("")}
    </div>
    <div class="verdict-banner ${verdictClass}">
      ${verdictText}
      <div class="verdict-sub">${verdictSub} Biggest change: ${fieldLabel(deltas.slice().sort((a,b)=>b.pct-a.pct)[0]?.field || "performance")}.</div>
    </div>
  `;
}

/* ================= Router ================= */

function updateBottomNavActive(path){
  document.querySelectorAll("#bottomNav a").forEach(a => {
    a.classList.toggle("active", a.dataset.route === path || (path.startsWith("/product") && a.dataset.route === "/search"));
  });
}

function render(){
  const { path, params } = parseHash();
  window.scrollTo(0,0);
  updateBottomNavActive(path);

  if (path === "/" ) renderHome();
  else if (path === "/search") renderSearch(params);
  else if (path.startsWith("/product/")) renderProduct(path.split("/")[2]);
  else if (path === "/compare") renderCompare(params);
  else if (path === "/find"){ if (wizardState.step === 5 && !params.get("stay")) { /* keep state */ } renderFind(); }
  else if (path === "/upgrade") renderUpgrade(params);
  else document.getElementById("app").innerHTML = `<div class="empty-state">Page not found. <a href="#/">Go home</a>.</div>`;
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  render();

  const themeBtn = document.getElementById("themeToggle");
  themeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
    themeBtn.textContent = isDark ? "🌙" : "☀️";
  });

  document.getElementById("navSearchForm").addEventListener("submit", e => {
    e.preventDefault();
    navigate(`#/search?q=${encodeURIComponent(document.getElementById("navSearchInput").value.trim())}`);
  });
  document.getElementById("navSearchFormMobile").addEventListener("submit", e => {
    e.preventDefault();
    navigate(`#/search?q=${encodeURIComponent(document.getElementById("navSearchInputMobile").value.trim())}`);
  });
});
