// Attorney Ramin design system — static viewer. No server code: upload index.html, viewer/ and project/
// to any web host. Everything is read from project/ at runtime; viewer/catalog.json lists the pages.
// Routes: #/overview  #/section/<id>  #/colors  #/type  #/scales  #/components[/<Name>]  #/preview/<Name>  #/assets
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const main = $('#main'), nav = $('#nav');
  const state = { mode: 'system', tokens: null, index: null, tokensCss: '', blobs: {}, sections: [], components: [], cover: null };
  const abs = (p) => new URL(p, location.href).href;
  // Cache key: the ?v= on this script's tag in index.html. Bump it there and every file the viewer loads gets the new key.
  const VERSION = (() => { try { return new URL(document.currentScript.src).searchParams.get('v') || ''; } catch { return ''; } })();
  const versioned = (url) => (VERSION ? `${url}${url.includes('?') ? '&' : '?'}v=${encodeURIComponent(VERSION)}` : url);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const tick = (s) => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
  const md = (text) => (window.marked ? window.marked.parse(text) : `<pre>${esc(text)}</pre>`);
  const showError = (msg) => { main.innerHTML = `<p class="muted">Something went wrong: ${String(msg).replace(/</g, '&lt;')}</p>`; };
  addEventListener('error', (e) => showError(e.message));
  addEventListener('unhandledrejection', (e) => showError(e.reason && (e.reason.stack || e.reason.message) || e.reason));
  const files = new Map();
  function get(path, type = 'text') {
    if (files.has(path)) return files.get(path);
    const p = fetch(versioned(path), { cache: 'no-cache' }).then((r) => { if (!r.ok) throw new Error(`${path} (${r.status})`); return type === 'json' ? r.json() : r.text(); });
    files.set(path, p);
    p.catch(() => files.delete(path));
    return p;
  }

  // ---------- tokens.json → CSS (same shape the hosted system compiles) ----------
  function compileTokens(T) {
    const e = (n) => n.replace(/\./g, '\\.');
    const first = T.color.themes[0].id;
    const val = (v, th) => (typeof v === 'string' ? v : v[th] ?? v[first]);
    const ref = (s) => (s.startsWith('{') ? `var(--${e(s.slice(1, -1))})` : s);
    let css = '';
    for (const f of T.type.fonts) css += `@font-face{font-family:"${f.family}";src:url("${versioned(abs('project/' + f.file))}") format("woff2");font-weight:${f.weight};font-style:${f.style || 'normal'};font-display:swap}\n`;
    const themed = [...T.color.tokens, ...((T.shadow && T.shadow.tokens) || [])];
    css += `:root, [data-theme="${first}"] {\n` + themed.map((t) => `  --${e(t.name)}: ${ref(val(t.value, first))};`).join('\n') + '\n}\n';
    for (const th of T.color.themes.slice(1)) {
      css += `[data-theme="${th.id}"] {\n  color-scheme: ${th.id === 'dark' ? 'dark' : 'light'};\n` +
        themed.filter((t) => typeof t.value !== 'string').map((t) => `  --${e(t.name)}: ${ref(val(t.value, th.id))};`).join('\n') + '\n}\n';
    }
    const plain = Object.entries(T).filter(([k, v]) => !['color', 'shadow', 'type'].includes(k) && v && Array.isArray(v.tokens));
    css += ':root {\n' + plain.flatMap(([, v]) => v.tokens.map((t) => `  --${e(t.name)}: ${t.value};`)).join('\n') + '\n' +
      Object.entries(T.type.families).map(([k, v]) => `  --font-${k}: ${v};`).join('\n') + '\n}\n';
    for (const g of T.type.groups) for (const s of g.styles) {
      css += `.${e(s.name)}{font-family:var(--font-${s.family || g.family});font-size:${s.fontSize};line-height:${s.lineHeight};font-weight:${s.fontWeight}` +
        `${s.letterSpacing ? `;letter-spacing:${s.letterSpacing}` : ''}${s.fontStyle ? `;font-style:${s.fontStyle}` : ''}}\n`;
    }
    return css;
  }

  // ---------- theme ----------
  const mq = matchMedia('(prefers-color-scheme: dark)');
  try { state.mode = localStorage.getItem('ds-theme') || 'system'; } catch {}
  const resolved = () => (state.mode === 'system' ? (mq.matches ? 'dark' : 'light') : state.mode);
  function applyTheme() {
    const th = resolved();
    document.documentElement.dataset.theme = th;
    document.querySelectorAll('#theme button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode)));
    document.querySelectorAll('iframe[data-preview]').forEach((f) => { try { if (f.srcdoc && f.contentDocument) { f.contentDocument.documentElement.dataset.theme = th; fit(f); } } catch {} });
  }
  $('#theme').addEventListener('click', (ev) => {
    const b = ev.target.closest('button'); if (!b) return;
    state.mode = b.dataset.mode; try { localStorage.setItem('ds-theme', state.mode); } catch {}
    applyTheme();
  });
  mq.addEventListener('change', () => state.mode === 'system' && applyTheme());
  $('#menu').addEventListener('click', () => { const open = nav.classList.toggle('is-open'); $('#menu').setAttribute('aria-expanded', String(open)); });

  // ---------- previews: preview.html + tokens + bundle.css, rendered in a srcdoc frame ----------
  function previewDoc(c) {
    let html = c.html.replace(/^<!--\s*@dsCard[^>]*-->\s*/, '');
    html = html.replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => state.blobs[id] || m);
    html = html.replace(/<html([^>]*)>/i, (m, a) => `<html${a.replace(/\sdata-theme="[^"]*"/, '')} data-theme="${resolved()}">`);
    const inject = `<style>${state.tokensCss}</style><link rel="stylesheet" href="${versioned(abs('project/components/bundle.css'))}">` +
      '<script>document.addEventListener("click",function(e){if(e.target.closest("a[href]"))e.preventDefault()},true)<\/script>';
    return /<head[^>]*>/i.test(html) ? html.replace(/<head([^>]*)>/i, `<head$1>${inject}`) : inject + html;
  }
  function frame(c, width = c.width) {
    const w = width || 0;
    return `<div class="frame" data-name="${esc(c.name)}" data-w="${w}" data-h="${c.height}"${w ? ` style="max-width:${w + 2}px"` : ''}><div class="frame__scaler"><iframe data-preview title="${esc(c.name)} preview" style="height:${c.height}px${w ? `;width:${w}px` : ''}"></iframe></div></div>`;
  }
  function fit(iframe) {
    const box = iframe.closest('.frame'), scaler = box.firstElementChild;
    const w = Number(box.dataset.w), avail = box.clientWidth;
    let h = Number(box.dataset.h);
    try { const d = iframe.srcdoc && iframe.contentDocument; if (d && d.documentElement) { iframe.style.height = h + 'px'; h = Math.max(h, d.documentElement.scrollHeight); } } catch {}
    iframe.style.height = h + 'px';
    const scale = w && avail < w ? avail / w : 1;
    scaler.style.transform = scale < 1 ? `scale(${scale})` : '';
    scaler.style.width = w ? w + 'px' : '100%';
    box.style.height = Math.ceil(h * scale) + 2 + 'px';
  }
  const lazy = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const f = en.target; lazy.unobserve(f);
      const name = f.closest('.frame').dataset.name;
      const c = state.cover && name === state.cover.name ? state.cover : state.components.find((x) => x.name === name);
      if (!c) continue;
      f.addEventListener('load', () => { fit(f); setTimeout(() => fit(f), 300); });
      f.srcdoc = previewDoc(c);
    }
  }, { rootMargin: '600px 0px' });
  const wireFrames = () => main.querySelectorAll('iframe[data-preview]').forEach((f) => { fit(f); lazy.observe(f); });
  addEventListener('resize', () => main.querySelectorAll('iframe[data-preview]').forEach(fit));

  // ---------- navigation ----------
  function renderNav(route) {
    const link = (href, label, cls = '') => `<a class="${cls}" href="${href}"${route === href ? ' aria-current="page"' : ''}>${esc(label)}</a>`;
    let html = '<h2>Brand book</h2>' + state.sections.map((s) => link(s.id === 'overview' ? '#/overview' : `#/section/${s.id}`, s.title)).join('');
    html += '<h2>Foundations</h2>' + link('#/colors', 'Colors') + link('#/type', 'Typography') + link('#/scales', 'Spacing, radius & more');
    html += '<h2>Components</h2>' + link('#/components', 'All components');
    let group = '';
    for (const c of state.components) {
      if (c.group !== group) { group = c.group; html += `<p class="nav-group">${esc(group)}</p>`; }
      html += link(`#/components/${c.name}`, c.name, 'sub');
    }
    html += '<h2>Assets</h2>' + link('#/assets', 'Logos, photos & icons');
    nav.innerHTML = html;
  }
  const head = (eyebrow, title, lead = '') => `<header class="page-head"><p class="eyebrow-v">${esc(eyebrow)}</p><h1 class="page-title">${esc(title)}</h1>${lead ? `<p class="page-lead">${lead}</p>` : ''}</header>`;

  // ---------- pages ----------
  function pageSection(id) {
    const s = state.sections.find((x) => x.id === id) || state.sections[0];
    const cover = s.id === 'overview' && state.cover ? `<div class="cover">${frame(state.cover, 960)}</div>` : '';
    return cover + `<article class="md">${md(s.text)}</article>`;
  }

  function pageColors() {
    const T = state.tokens, [l, d] = T.color.themes.map((t) => t.id);
    const all = Object.fromEntries(T.color.tokens.map((t) => [t.name, t.value]));
    const res = (v, th) => { let x = typeof v === 'string' ? v : (v[th] ?? v[l]); let n = 0; while (x.startsWith('{') && n++ < 16) { const y = all[x.slice(1, -1)]; x = typeof y === 'string' ? y : (y[th] ?? y[l]); } return x; };
    const raw = (v, th) => (typeof v === 'string' ? v : (v[th] ?? v[l]));
    const card = (t) => `<div class="sw"><div class="sw__chips"><span style="background:${res(t.value, l)}"></span><span style="background:${res(t.value, d)}"></span></div>
      <div class="sw__body"><div class="sw__name">${esc(t.name)}</div><div class="sw__vals">${esc(raw(t.value, l))} · ${esc(raw(t.value, d))}</div><div class="sw__use">${tick(t.usage || '')}</div></div></div>`;
    const prim = (n) => /^(navy|vermilion|pewter)-/.test(n);
    return head('Foundations', 'Colors', 'Each card shows the light value (left) and the dark value (right). Components use the semantic tokens; primitives feed them.') +
      '<h2 class="h-sec">Semantic</h2><div class="swatches">' + T.color.tokens.filter((t) => !prim(t.name)).map(card).join('') + '</div>' +
      ['navy', 'vermilion', 'pewter'].map((s) => `<h2 class="h-sec">${s[0].toUpperCase() + s.slice(1)}</h2><div class="swatches">` + T.color.tokens.filter((t) => t.name.startsWith(s + '-')).map(card).join('') + '</div>').join('');
  }

  function pageType() {
    const T = state.tokens;
    let html = head('Foundations', 'Typography', Object.entries(T.type.families).map(([k, v]) => `<code>font-${esc(k)}</code> ${esc(v.split(',')[0].replace(/"/g, ''))}`).join(' · '));
    for (const g of T.type.groups) {
      html += `<h2 class="h-sec" style="margin-top:32px">${esc(g.name)}</h2>${g.note ? `<p class="muted" style="max-width:70ch">${esc(g.note)}</p>` : ''}`;
      for (const s of g.styles) {
        html += `<div class="type-row"><div class="type-row__spec"><strong>${esc(s.name)}</strong>${esc(s.fontSize)} / ${esc(s.lineHeight)} · ${esc(s.fontWeight)}${s.letterSpacing ? ' · ' + esc(s.letterSpacing) : ''}${s.fontStyle ? ' · ' + esc(s.fontStyle) : ''}<br>${tick(s.usage || '')}</div>
          <div class="type-row__sample ${esc(s.name)}"${s.name === 'eyebrow' ? ' style="text-transform:uppercase"' : ''}>${esc(s.sample || 'The quick brown fox')}</div></div>`;
      }
    }
    return html;
  }

  function pageScales() {
    const T = state.tokens;
    const cssVar = (n) => `var(--${n.replace(/\./g, '\\.')})`;
    const table = (title, key, vis) => `<h2 class="h-sec">${esc(title)}</h2>${T[key].note ? `<p class="muted">${esc(T[key].note)}</p>` : ''}<table class="scale"><thead><tr><th>Token</th><th>Value</th><th></th><th>Use</th></tr></thead><tbody>` +
      T[key].tokens.map((t) => `<tr><td><code>${esc(t.name)}</code></td><td><code>${esc(typeof t.value === 'string' ? t.value : t.value.light)}</code></td><td>${vis ? vis(t) : ''}</td><td>${tick(t.usage || '')}</td></tr>`).join('') + '</tbody></table>';
    const extra = Object.keys(T).filter((k) => !['color', 'type', 'spacing', 'radius', 'shadow'].includes(k) && T[k] && Array.isArray(T[k].tokens));
    return head('Foundations', 'Spacing, radius & more') +
      (T.spacing ? table('Spacing', 'spacing', (t) => `<div class="bar" style="width:${cssVar(t.name)}"></div>`) : '') +
      (T.radius ? table('Radius', 'radius', (t) => `<div class="rbox" style="border-radius:${cssVar(t.name)}"></div>`) : '') +
      (T.shadow ? table('Shadow', 'shadow', (t) => `<div class="sbox" style="box-shadow:${cssVar(t.name)}"></div>`) : '') +
      extra.map((k) => table(k === 'zIndex' ? 'Z index' : k[0].toUpperCase() + k.slice(1), k)).join('');
  }

  async function compBlock(c) {
    let readme = '';
    try { readme = await get(`project/components/${c.name}/README.md`); } catch {}
    return `<section class="comp" id="c-${esc(c.name)}"><div class="comp__head"><h2 class="comp__name">${esc(c.name)}</h2>
      <div class="comp__meta"><span class="chip">${esc(c.group)}</span><a href="#/preview/${encodeURIComponent(c.name)}">Full width ↗</a></div></div>
      ${frame(c)}${readme ? `<div class="md">${md(readme.replace(/^#\s+.+\n/, ''))}</div>` : ''}</section>`;
  }
  async function pageComponents(name) {
    const list = state.components;
    const c = name && list.find((x) => x.name === name);
    if (c) return `<p class="eyebrow-v">${esc(c.group)}</p>` + await compBlock(c);
    return head('Components', 'All components', `${list.length} components. Each preview loads the same tokens and bundle.css the hosted system uses; the theme switch applies to every frame.`) + (await Promise.all(list.map(compBlock))).join('');
  }

  async function pageAssets() {
    const idx = state.index;
    let html = head('Assets', 'Logos, photos & icons', 'Files from project/assets. Click a file name to download it.');
    for (const g of idx.groups || []) {
      const grp = idx.assetGroups[g]; if (!grp) continue;
      let note = ''; try { note = await get(`project/assets/${g}/README.md`); } catch {}
      const tile = grp.tile === 'xs' || grp.tile === 's' ? 'xs' : 'l';
      html += `<h2 class="h-sec">${esc(g)}</h2>${note ? `<div class="md" style="margin-bottom:16px">${md(note.replace(/^#\s+.+\n/, ''))}</div>` : ''}<div class="assets assets--${tile}">` +
        (grp.order || Object.keys(grp.files)).map((n) => {
          const f = grp.files[n]; if (!f) return '';
          const src = esc(state.blobs[f.blob]);
          return `<figure class="asset" style="margin:0"><div class="asset__img${/reverse/.test(n) ? ' is-reverse' : ''}"><img src="${src}" alt="${esc(n)}" loading="lazy"></div><figcaption class="asset__name"><a href="${src}" download>${esc(n)}</a></figcaption></figure>`;
        }).join('') + '</div>';
    }
    return html;
  }

  // ---------- router ----------
  async function route() {
    const [, kind, arg] = (location.hash || '#/overview').split('/');
    const name = arg && decodeURIComponent(arg);
    document.body.classList.toggle('is-bare', kind === 'preview');
    renderNav(kind === 'components' && name ? `#/components/${name}` : kind === 'section' ? `#/section/${name}` : `#/${kind || 'overview'}`);
    nav.classList.remove('is-open');
    try {
      let html;
      if (kind === 'section') html = pageSection(name);
      else if (kind === 'colors') html = pageColors();
      else if (kind === 'type') html = pageType();
      else if (kind === 'scales') html = pageScales();
      else if (kind === 'components') html = await pageComponents(name);
      else if (kind === 'preview') { const c = state.components.find((x) => x.name === name); html = c ? `<p class="bare-bar"><a href="#/components/${encodeURIComponent(c.name)}">← Back to ${esc(c.name)}</a></p>${frame(c)}` : ''; }
      else if (kind === 'assets') html = await pageAssets();
      else html = pageSection('overview');
      main.innerHTML = html;
      wireFrames();
      window.scrollTo(0, 0);
    } catch (err) {
      main.innerHTML = `<p class="muted">Couldn’t load this page: ${esc(err.message)}.</p>`;
    }
  }

  // ---------- boot ----------
  const marker = (html) => {
    const line = html.split('\n', 1)[0];
    const attr = (k) => { const m = new RegExp(`\\b${k}=(?:"([^"]*)"|(\\d+))`).exec(line); return m ? (m[1] ?? m[2]) : undefined; };
    return { group: attr('group') || 'Other', height: Number(attr('height')) || 120, width: Number(attr('width')) || null };
  };
  async function loadComponent(name) {
    try { const html = await get(`project/components/${name}/preview.html`); return { name, html, ...marker(html) }; } catch { return null; }
  }
  async function boot() {
    applyTheme();
    try {
      const [catalog, tokens, index] = await Promise.all([get('viewer/catalog.json', 'json'), get('project/tokens.json', 'json'), get('project/design-system.json', 'json')]);
      state.tokens = tokens; state.index = index;
      state.tokensCss = compileTokens(tokens);
      const style = document.createElement('style'); style.id = 'ds-tokens'; style.textContent = state.tokensCss;
      document.head.insertBefore(style, document.head.querySelector('link[rel=stylesheet]'));
      for (const [group, g] of Object.entries(index.assetGroups || {})) {
        for (const f of Object.values(g.files || {})) state.blobs[f.blob] = versioned(abs(`project/assets/${encodeURIComponent(group)}/${f.name.split('/').map(encodeURIComponent).join('/')}`));
      }
      state.sections = await Promise.all(catalog.sections.map(async (p, i) => {
        const text = await get('project/' + p).catch(() => `# ${p}\n\nThis file is missing.`);
        const m = /^#\s+(.+)$/m.exec(text);
        return { id: i === 0 ? 'overview' : p.split('/').pop().replace(/\.md$/, ''), title: i === 0 ? 'Overview' : (m ? m[1].trim() : p), text };
      }));
      state.components = (await Promise.all(catalog.components.map(loadComponent))).filter(Boolean);
      state.cover = catalog.cover ? await loadComponent(catalog.cover) : null;
      document.title = `${index.title} — design system`;
      $('.brand__name').textContent = index.title;
    } catch (err) {
      main.innerHTML = `<p class="muted">Couldn’t load the design system (${esc(err.message)}). Open this page through a web server — your hosting, VS Code Live Server or <code>python3 -m http.server</code> — not by double-clicking the file.</p>`;
      document.body.classList.remove('is-loading');
      return;
    }
    document.body.classList.remove('is-loading');
    addEventListener('hashchange', route);
    route();
  }
  boot();
})();
