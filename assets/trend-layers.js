/* ───────── 실시간 검색어 화면 뒤 — 3층 원판 다이어그램 (흰색) ─────────
   원판 3장(원을 아이소 시점으로 본 타원): 1 REALTIME SEARCH · 2 DESIRE · 3 FLOOR PLAN
   판마다 동그라미 10개. 아래 판의 동그라미 하나가 선 하나로 가운데 판, 위 판의 동그라미로 이어집니다 → 줄기 10개.
   정적인 SVG 한 장(화면 크기가 바뀔 때만 다시 그림). 검색어 칩·검색창 뒤에 깔리며 인터랙션에는 관여하지 않습니다. */
(function () {
  var sec = document.getElementById('essay'); if (!sec) return;
  var stk = sec.querySelector('.statement-sticky'), field = sec.querySelector('.tr-field');
  if (!stk || !field) return;

  var NS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'tl-layers'); svg.setAttribute('aria-hidden', 'true');
  stk.insertBefore(svg, field);

  var css = document.createElement('style');
  css.textContent =
    '.tl-layers{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;overflow:visible}' +
    '.tl-layers .pl{fill:#fff;fill-opacity:.1;stroke:#fff;stroke-width:1.2}' + /* a very faint white face on each disc */
    '.tl-layers .ln{fill:none;stroke:#fff;stroke-width:1.1;stroke-dasharray:3 2.5;opacity:.65;animation:tl-flow 1.1s linear infinite}' +
    /* dashes flow upward: each stem is drawn bottom → top, so a falling dash offset moves the pattern toward the top */
    '@keyframes tl-flow{from{stroke-dashoffset:0}to{stroke-dashoffset:-11}}' +
    '.trend:not(.is-in) .tl-layers .ln,html.is-locked .tl-layers .ln{animation-play-state:paused}' +
    '@media (prefers-reduced-motion:reduce){.tl-layers .ln{animation:none}}' +
    '.tl-layers .n{fill:#fff;stroke:none;opacity:.85;transform-box:fill-box;transform-origin:center;transition:opacity .35s ease,transform .35s ease}' +
    /* one stem at a time brightens, holds briefly, and settles back */
    '.tl-layers .ln{transition:opacity .35s ease,stroke-width .35s ease}' +
    '.tl-layers .ln.hi{opacity:1;stroke-width:2;stroke-dasharray:6 2;animation-name:tl-flow-hi}' +
    '@keyframes tl-flow-hi{from{stroke-dashoffset:0}to{stroke-dashoffset:-16}}' +
    '.tl-layers .n.hi{opacity:1;transform:scale(1.18);stroke:#fff;stroke-width:.6}' +   /* lit nodes grow a little, still open rings */
    '.tl-layers .lb{fill:#fff;font-family:"Departure Mono",ui-monospace,monospace;font-weight:400;letter-spacing:.16em}' +
    '.tl-layers .lb-no{fill:#fff;fill-opacity:.6}' +
    '.tl-layers .lb-ln{fill:none;stroke:#fff;stroke-width:1}' +
    '.tl-layers .lb-sq{fill:#fff}';
  css.textContent +=
    /* searched plan, shown behind the chips as white halftone dots; the diagram fades back meanwhile */
    '.tl-halftone{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0;transition:opacity .9s ease}' +
    '.tl-halftone.on{opacity:1}' +
    'html.tl-demo-hide .cursor{opacity:0!important;transition:opacity .15s}' +
    'html .cursor{transition:opacity .15s}' +
    '.tl-lift{position:absolute;inset:0;z-index:0;pointer-events:none;background:#fff;opacity:.36}' +
    '.tl-veil{position:absolute;inset:0;z-index:0;pointer-events:none;background:#000;opacity:0;transition:opacity .9s ease}' +
    '.statement-sticky.tl-dim .tl-veil{opacity:.07}' +
    'html.is-locked .tl-veil{opacity:0}' +
    '.tl-layers{transition:opacity .9s ease}' +
    '.statement-sticky.tl-dim .tl-layers{opacity:.22}' +
    'html.is-locked .tl-halftone{opacity:0}' +
    /* "ENTER THE ARCHIVE →": same box as ABOUT THE PROJECT, bottom centre, shows once a plan has surfaced */
    '.tl-go{position:absolute;left:50%;bottom:calc(var(--trk,1) * 38px);transform:translate(-50%,6px);z-index:6;pointer-events:none;opacity:0;' +
    'transition:opacity .6s ease .35s,transform .6s ease .35s;cursor:pointer;background:none;border:0;color:#fff;padding:12px 16px;' +
    'font:400 calc(var(--trk,1) * 14px)/1 "IBM Plex Mono",ui-monospace,monospace;letter-spacing:.18em;text-transform:uppercase}' +
    /* same voice as "CLICK PLAN TO CONTINUE" on the intro, in white, with its slow pulse */
    '.tl-go.on{transform:translate(-50%,0);pointer-events:auto;opacity:1;animation:tl-go-pulse 1.6s ease-in-out .9s infinite}' +
    '@keyframes tl-go-pulse{0%,100%{opacity:1}50%{opacity:.35}}' +
    '.tl-go:hover,.tl-go:focus-visible{animation:none;opacity:1;outline:none;text-decoration:underline;text-underline-offset:4px}' +
    'html.is-locked .tl-go{opacity:0;pointer-events:none}' +
    /* the centre ■ of the bottom bar makes way for the button only while a plan is shown */
    '.tr-foot .sq.c{transition:opacity .4s ease}' +
    '.statement-sticky.tl-dim .tr-foot .sq.c{opacity:0}';
  document.head.appendChild(css);

  var seed = 3;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

  // disc + title geometry, shared with the keyword layout (trend.js) so chips keep clear of the titles
  function geom(W, H) {
    var Ry = H * 0.104, gap = Ry * 3, Rx = Math.min(W * 0.46, Ry / 0.28 * 0.8); // width at 80% of the original
    var cx = W / 2, cys = [H / 2 + gap, H / 2, H / 2 - gap];
    var fs = Math.max(10, Math.min(W, H * 1.6) * 0.0095);
    var labels = cys.map(function (cy) {
      // a long level line that starts inside the disc, below its centre, cuts through the rim and runs out to the right
      // starts a little inside the disc, toward its lower right (small square there), cuts through the rim and runs out to the right
      var y0 = cy + Ry * 0.56, x0 = cx + Rx * 0.62, x1 = x0, y1 = y0, x2 = cx + Rx + (fs * 14.5 + Math.max(fs * 18, W * 0.15)) / 2; // halfway between hugging the disc and the earlier long line
      return { x0: x0, y0: y0, x1: x1, y1: y1, x2: x2 };
    });
    return { Ry: Ry, Rx: Rx, gap: gap, cx: cx, cys: cys, fs: fs, labels: labels };
  }
  window.__tlAvoid = function (W, H) {
    var g = geom(W, H);
    // only the part outside the disc needs to stay clear: the line and the title above its far end
    return g.labels.map(function (l) { var xs = g.cx + g.Rx * 0.85; return { x: xs, y: l.y1 - g.fs * 2.2, w: l.x2 - xs, h: g.fs * 2.8 }; });
  };

  function draw() {
    var W = stk.clientWidth, H = stk.clientHeight; if (!W || !H) return;
    seed = 3;
    var f = function (n) { return n.toFixed(1); };
    // three iso discs, bottom → top
    // proportions from the sketch: flat discs (ry ≈ 0.28·rx), a wide gap between layers (≈ 3·ry)
    // same height and spacing as before; only the width is narrowed (85%)
    var G = geom(W, H), Ry = G.Ry, gap = G.gap, Rx = G.Rx, cx = G.cx, cys = G.cys;
    var names = ['REALTIME SEARCH', 'DESIRE', 'FLOOR PLAN'];
    var fs = G.fs;
    var out = [];
    cys.forEach(function (cy, k) {
      out.push('<ellipse class="pl" cx="' + f(cx) + '" cy="' + f(cy) + '" rx="' + f(Rx) + '" ry="' + f(Ry) + '"/>');
      // title pulled out to the right: disc edge → short diagonal → small square → long rule, "01  REALTIME SEARCH" above the rule
      var Lb = G.labels[k], x0 = Lb.x0, y0 = Lb.y0, x1 = Lb.x1, y1 = Lb.y1, x2 = Lb.x2;
      out.push('<polyline class="lb-ln" points="' + f(x0) + ',' + f(y0) + ' ' + f(x1) + ',' + f(y1) + ' ' + f(x2) + ',' + f(y1) + '"/>');
      out.push('<rect class="lb-sq" x="' + f(x0 - 2.5) + '" y="' + f(y0 - 2.5) + '" width="5" height="5"/>');
      out.push('<text class="lb" font-size="' + f(fs) + '" x="' + f(x2) + '" y="' + f(y1 - fs * 0.7) + '" text-anchor="end"><tspan class="lb-no">0' + (k + 1) + '</tspan>\u2002' + names[k] + '</text>');
    });

    // 10 stems. Each disc gets 10 points scattered evenly over it (minimum spacing, no clumps);
    // stems join point i below to a shifted point above, so they lean diagonally and cross.
    if (!L) {
      var scatter = function () {
        var pts = [], tries = 0;
        while (pts.length < 10 && tries++ < 4000) {
          var a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * 0.8, p = [Math.cos(a) * d, Math.sin(a) * d];
          if (pts.every(function (q) { return Math.hypot(q[0] - p[0], q[1] - p[1]) > 0.36; })) pts.push(p);
        }
        return pts.sort(function (a, b) { return a[0] - b[0]; });          // left → right
      };
      L = [scatter(), scatter(), scatter()];
    }
    geo = { cx: cx, cys: cys, Rx: Rx, Ry: Ry, r: Math.max(7, Ry * 0.115) };

    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = out.join('') + '<g class="tl-stems"></g><g class="tl-rings"></g>';
    var gS = svg.querySelector('.tl-stems'), gR = svg.querySelector('.tl-rings');
    els = [];
    for (var i = 0; i < 10; i++) {
      var pl = document.createElementNS(NS, 'polyline'); pl.setAttribute('class', 'ln'); gS.appendChild(pl);
      var rs = [];
      for (var k = 0; k < 3; k++) { var rp = document.createElementNS(NS, 'path'); rp.setAttribute('class', 'n'); rp.setAttribute('fill-rule', 'evenodd'); gR.appendChild(rp); rs.push(rp); }
      els.push({ pl: pl, rs: rs });
    }
    place(angle);
  }

  // slow rotation: the whole stack turns about its vertical axis — every point travels round its disc
  var L = null, geo = null, els = [], angle = 0, shift = [0, 3, 6];
  var f2 = function (n) { return n.toFixed(1); };
  function ring(x, y, r) { // iso ring: thick at the sides, thinner at top and bottom
    var ox = r, oy = r * 0.41, ix = r * 0.79, iy = oy * 0.68;
    return 'M' + f2(x - ox) + ' ' + f2(y) + 'a' + f2(ox) + ' ' + f2(oy) + ' 0 1 0 ' + f2(ox * 2) + ' 0a' + f2(ox) + ' ' + f2(oy) + ' 0 1 0 ' + f2(-ox * 2) + ' 0Z' +
      'M' + f2(x - ix) + ' ' + f2(y) + 'a' + f2(ix) + ' ' + f2(iy) + ' 0 1 0 ' + f2(ix * 2) + ' 0a' + f2(ix) + ' ' + f2(iy) + ' 0 1 0 ' + f2(-ix * 2) + ' 0Z';
  }
  function place(a) {
    if (!geo || !L) return;
    var c = Math.cos(a), s = Math.sin(a);
    els.forEach(function (e, i) {
      var pts = L.map(function (layer, k) {
        var q = layer[(i + shift[k]) % layer.length], x = q[0] * c - q[1] * s, y = q[0] * s + q[1] * c;
        return [geo.cx + x * geo.Rx, geo.cys[k] + y * geo.Ry];
      });
      e.pl.setAttribute('points', pts.map(function (p) { return f2(p[0]) + ',' + f2(p[1]); }).join(' '));
      pts.forEach(function (p, k) { e.rs[k].setAttribute('d', ring(p[0], p[1], geo.r)); });
    });
  }
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SPEED = Math.PI * 2 / 180000, last = 0, acc = 0;           // one turn every 3 minutes
  function spin(now) {
    requestAnimationFrame(spin);
    var dt = last ? Math.min(100, now - last) : 0; last = now;
    if (reduce || document.hidden || document.documentElement.classList.contains('is-locked')) return;
    var r = stk.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight || !sec.classList.contains('is-in')) return;
    angle += dt * SPEED; acc += dt;
    if (acc < 33) return;                                          // ~30 updates a second is plenty this slow
    acc = 0; place(angle);
  }
  requestAnimationFrame(spin);

  // highlight: hovering a keyword chip lights one stem, picked at random but never the one lit just before
  var hiLast = -1, hiOn = null, hiChip = null;
  function hiOff() {
    if (!hiOn) return;
    hiOn.pl.classList.remove('hi'); hiOn.rs.forEach(function (r) { r.classList.remove('hi'); }); hiOn = null;
  }
  function hiPick() {
    if (!els.length) return;
    var i; do { i = Math.floor(Math.random() * els.length); } while (els.length > 1 && i === hiLast);
    hiLast = i; hiOn = els[i];
    hiOn.pl.classList.add('hi'); hiOn.rs.forEach(function (r) { r.classList.add('hi'); });
  }
  // a keyword counts as hovered when the cursor is on it or near it (within ~70px of its box)
  var nearRaf = 0, px = -1e4, py = -1e4;
  function nearest() {
    nearRaf = 0;
    if (document.documentElement.classList.contains('is-locked')) { if (hiChip) { hiChip = null; hiOff(); } return; }
    var R = 70 * (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--trk')) || 1), best = null, bd = R;
    field.querySelectorAll(':scope > .tr-e:not(.is-gone)').forEach(function (el) {
      var r = el.getBoundingClientRect(); if (!r.width) return;
      var dx = px < r.left ? r.left - px : px > r.right ? px - r.right : 0;
      var dy = py < r.top ? r.top - py : py > r.bottom ? py - r.bottom : 0;
      var d = Math.hypot(dx, dy); if (d <= bd) { bd = d; best = el; }
    });
    if (best === hiChip) return;
    hiChip = best; hiOff(); if (best) hiPick();
  }
  window.addEventListener('pointermove', function (e) {
    px = e.clientX; py = e.clientY;
    var r = stk.getBoundingClientRect(); if (r.bottom < 0 || r.top > window.innerHeight) return;
    if (!nearRaf) nearRaf = requestAnimationFrame(nearest);
  }, { passive: true });
  document.addEventListener('pointerleave', function () { if (hiChip) { hiChip = null; hiOff(); } });

  // ── searched plan as a white halftone ──
  var ht = document.createElement('canvas'); ht.className = 'tl-halftone'; ht.setAttribute('aria-hidden', 'true');
  stk.insertBefore(ht, field);
  // a faint dark veil behind the halftone while a plan is shown, so the white dots read more clearly
  var veil = document.createElement('div'); veil.className = 'tl-veil'; veil.setAttribute('aria-hidden', 'true'); stk.insertBefore(veil, ht);
  // this screen sits a touch lighter than the rest of the site
  var lift = document.createElement('div'); lift.className = 'tl-lift'; lift.setAttribute('aria-hidden', 'true'); stk.insertBefore(lift, stk.firstChild);
  var htPlan = -1, htImg = null;
  function halftone() {
    var W = stk.clientWidth, H = stk.clientHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
    ht.width = Math.round(W * dpr); ht.height = Math.round(H * dpr);
    var c = ht.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H);
    if (!htImg) return;
    // find where the drawing actually is (plans carry their own margins), then fit that box inside the screen
    var iw = htImg.naturalWidth, ih = htImg.naturalHeight, P = 200;
    var pc = document.createElement('canvas'); pc.width = P; pc.height = P;
    var px = pc.getContext('2d'); px.fillStyle = '#fff'; px.fillRect(0, 0, P, P); px.drawImage(htImg, 0, 0, P, P);
    var pd = px.getImageData(0, 0, P, P).data, bx0 = P, by0 = P, bx1 = -1, by1 = -1;
    for (var yy = 0; yy < P; yy++) for (var xx = 0; xx < P; xx++) {
      var q = (yy * P + xx) * 4;
      if (pd[q] + pd[q + 1] + pd[q + 2] < 600) { if (xx < bx0) bx0 = xx; if (xx > bx1) bx1 = xx; if (yy < by0) by0 = yy; if (yy > by1) by1 = yy; }
    }
    if (bx1 < 0) { bx0 = 0; by0 = 0; bx1 = P - 1; by1 = P - 1; }
    var sx = bx0 / P * iw, sy = by0 / P * ih, sw = (bx1 - bx0 + 1) / P * iw, sh = (by1 - by0 + 1) / P * ih;
    var k = Math.min(W * 0.62 / sw, H * 0.72 / sh), DW = sw * k, DH = sh * k;  // drawing size on screen, with air around it
    var g = Math.max(4.2, Math.min(DW, DH) / 120);                              // dot pitch
    var nx = Math.round(DW / g), ny = Math.round(DH / g);
    var sm = document.createElement('canvas'); sm.width = nx; sm.height = ny;
    var sc = sm.getContext('2d'); sc.fillStyle = '#fff'; sc.fillRect(0, 0, nx, ny); sc.drawImage(htImg, sx, sy, sw, sh, 0, 0, nx, ny);
    var d = sc.getImageData(0, 0, nx, ny).data, x0 = (W - nx * g) / 2, y0 = (H - ny * g) / 2;
    c.fillStyle = '#fff'; c.beginPath();
    for (var y = 0; y < ny; y++) for (var x = 0; x < nx; x++) {
      var o = (y * nx + x) * 4, dark = 1 - (d[o] * 0.299 + d[o + 1] * 0.587 + d[o + 2] * 0.114) / 255;
      if (dark < 0.06) continue;                                   // paper stays empty
      var r = g * 0.5 * Math.min(1, Math.sqrt(dark) * 1.15);
      var cx = x0 + (x + 0.5) * g, cy = y0 + (y + 0.5) * g;
      c.moveTo(cx + r, cy); c.arc(cx, cy, r, 0, 6.2832);
    }
    c.fill();
  }
  window.__tlShowPlan = function (i) {
    var p = (window.__extraPlans || [])[i]; if (!p || !p.image) return;
    htPlan = i; var im = new Image();
    im.onload = function () { if (htPlan !== i) return; htImg = im; halftone(); ht.classList.add('on'); stk.classList.add('tl-dim'); goBtn.classList.add('on'); };
    im.src = p.image;
  };
  window.__tlClear = function () { htPlan = -1; ht.classList.remove('on'); stk.classList.remove('tl-dim'); goBtn.classList.remove('on'); };

  // ── the way on: scrolling stops at the end of this screen; once a plan has surfaced,
  //    "ENTER THE ARCHIVE →" appears at the bottom and takes you on to the archive ──
  var goBtn = document.createElement('button');
  goBtn.type = 'button'; goBtn.className = 'tl-go'; goBtn.textContent = 'to the archive \u2193';
  stk.appendChild(goBtn);
  var unlocked = false;
  // stop where this screen has fully faded in and before scrolling starts taking keywords away (trend.js: progress 0 at one screen in)
  function endY() { var r = sec.getBoundingClientRect(); return Math.max(0, r.top + window.scrollY + window.innerHeight * 0.98); }
  function unlock() { unlocked = true; document.documentElement.classList.add('tl-open'); }
  if (window.scrollY > endY() + 2) unlock();                          // already past it (reload, back from a plan): don't trap
  window.addEventListener('scroll', function () {
    if (unlocked) return;
    var L = endY(); if (window.scrollY > L + 1) window.scrollTo(0, L);
  }, { passive: true });
  window.addEventListener('wheel', function (e) {
    if (!unlocked && e.deltaY > 0 && window.scrollY >= endY() - 1) e.preventDefault();
  }, { passive: false });
  window.addEventListener('keydown', function (e) {
    if (unlocked || window.scrollY < endY() - 1) return;
    if (['ArrowDown', 'PageDown', 'End', ' '].indexOf(e.key) >= 0 && !(e.target && /INPUT|TEXTAREA/.test(e.target.tagName))) e.preventDefault();
  });
  // links elsewhere on the page that jump past this screen still work
  document.addEventListener('click', function (e) { var a = e.target.closest && e.target.closest('a[href^="#"]'); if (a && a.getAttribute('href') !== '#essay') unlock(); }, true);
  goBtn.addEventListener('click', function () {
    unlock();
    // land where the archive has fully taken over (it overlaps the end of this screen): 1.5 screens past its top edge
    var cloud = document.getElementById('cloud'), top = cloud ? cloud.getBoundingClientRect().top + window.scrollY + window.innerHeight * 1.5 : endY() + window.innerHeight * 3;
    if (window.__tsRelease) window.__tsRelease();
    glide(top);
  });
  // a slow, scroll-like glide down: keywords fall away one by one as they do when scrolling, then the archive takes over
  var glideId = 0;
  function glide(to) {
    var from = window.scrollY, dist = to - from, id = ++glideId;
    if (Math.abs(dist) < 2) return;
    var dur = Math.min(6200, Math.max(4500, Math.abs(dist) * 1.0 + 2000)), t0 = performance.now();   // about 5.5s for the usual distance
    gliding = true;                                                // runs to the end; scroll input is held off meanwhile
    (function step(now) {
      if (id !== glideId) return;
      // steady speed with only a soft start and stop (first/last 12%), so keywords fall away at an even pace
      var k = Math.min(1, (now - t0) / dur), a = 0.12, v = 1 / (1 - a), e;
      if (k < a) e = v * k * k / (2 * a);
      else if (k > 1 - a) e = 1 - v * (1 - k) * (1 - k) / (2 * a);
      else e = v * (k - a / 2);
      window.scrollTo(0, from + dist * e);
      if (k < 1) requestAnimationFrame(step); else gliding = false;
    })(t0);
  }
  var gliding = false;
  function hold(e) { if (gliding) e.preventDefault(); }
  window.addEventListener('wheel', hold, { passive: false });
  window.addEventListener('touchmove', hold, { passive: false });
  window.addEventListener('keydown', function (e) { if (gliding && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'End', 'Home', ' '].indexOf(e.key) >= 0) e.preventDefault(); });

  // ── first visit to this screen: a one-time demo — the cursor picks a random keyword, drags it into the
  //    search bar, presses search, lets the plan surface, then clicks the background to come back.
  //    Real mouse/keyboard input is held off while it runs. ──
  (function () {
    var coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
    if (coarse) return;
    var done = false, running = false, userTouched = false, cx0 = -1, cy0 = -1;
    field.addEventListener('pointerdown', function (e) { if (e.isTrusted) userTouched = true; }, true);
    window.addEventListener('pointermove', function (e) { if (e.isTrusted) { cx0 = e.clientX; cy0 = e.clientY; } }, { passive: true });
    var BLOCK = ['pointerdown', 'pointerup', 'pointermove', 'mousedown', 'mouseup', 'mousemove', 'click', 'dblclick', 'contextmenu', 'wheel', 'keydown', 'touchstart', 'touchmove'];
    function block(e) { if (running && e.isTrusted) { e.stopImmediatePropagation(); if (e.cancelable) e.preventDefault(); } }
    BLOCK.forEach(function (t) { window.addEventListener(t, block, { capture: true, passive: false }); });

    var X = -1, Y = -1, PID = 77;
    var lastT = null;
    function fire(type, x, y, extra) {
      var t = document.elementFromPoint(x, y) || document.body;
      if (t !== lastT) {                                          // hover in/out like a real pointer (cursor tags, ring state)
        var ov = { bubbles: true, composed: true, clientX: x, clientY: y, pointerId: PID, pointerType: 'mouse', isPrimary: true, relatedTarget: lastT };
        if (lastT) lastT.dispatchEvent(new PointerEvent('pointerout', Object.assign({}, ov, { relatedTarget: t })));
        t.dispatchEvent(new PointerEvent('pointerover', ov)); lastT = t;
      }
      var o = { bubbles: true, cancelable: true, composed: true, clientX: x, clientY: y, pointerId: PID, pointerType: 'mouse', isPrimary: true, button: 0, buttons: type === 'pointerup' ? 0 : (extra && extra.down ? 1 : 0) };
      t.dispatchEvent(new PointerEvent(type, o));
      if (type === 'pointermove') t.dispatchEvent(new MouseEvent('mousemove', o));
      return t;
    }
    // hand-like moves: a gentle arc (not a ruler line), a bell-shaped speed curve, duration from distance
    function moveTo(x, y, ms, down) {
      return new Promise(function (res) {
        var x1 = X, y1 = Y, dx = x - x1, dy = y - y1, dist = Math.hypot(dx, dy) || 1, t0 = performance.now();
        var dur = ms || Math.min(1900, 650 + dist * 1.1);             // unhurried: ~1.2–1.9s for the usual distances
        var bend = (Math.random() < 0.5 ? -1 : 1) * Math.min(90, dist * (0.08 + Math.random() * 0.08));
        var qx = x1 + dx / 2 - dy / dist * bend, qy = y1 + dy / 2 + dx / dist * bend;   // control point off to one side
        (function step(now) {
          var k = Math.min(1, (now - t0) / dur), e = -(Math.cos(Math.PI * k) - 1) / 2, u = 1 - e;   // sine in-out: no sharp burst of speed
          X = u * u * x1 + 2 * u * e * qx + e * e * x; Y = u * u * y1 + 2 * u * e * qy + e * e * y;
          fire('pointermove', X, Y, { down: down });
          if (k < 1) requestAnimationFrame(step); else res();
        })(t0);
      });
    }
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    function hide(on) { document.documentElement.classList.toggle('tl-demo-hide', on); }
    function centre(el) { var r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }

    async function run() {
      running = true; document.documentElement.classList.add('tl-demo');
      try {
        var bar = sec.querySelector('.tr-search'), ic = sec.querySelector('.ts-ic'); if (!bar) return;
        var br = bar.getBoundingClientRect();
        var chips = [].slice.call(field.querySelectorAll(':scope > .tr-e[data-plan]:not(.is-gone)')).filter(function (el) {
          var r = el.getBoundingClientRect(), k = el.querySelector('.kw');
          return r.width && r.top > 60 && r.bottom < window.innerHeight - 80 && k && k.textContent.trim().length > 1 &&
            !(r.right > br.left - 40 && r.left < br.right + 40 && r.bottom > br.top - 60 && r.top < br.bottom + 60);
        });
        if (!chips.length) return;
        var chip = chips[Math.floor(Math.random() * chips.length)], kw = chip.querySelector('.kw');
        X = cx0 >= 0 ? cx0 : window.innerWidth / 2; Y = cy0 >= 0 ? cy0 : window.innerHeight * 0.78;
        fire('pointermove', X, Y);
        var c = centre(kw); c[0] += (Math.random() - 0.5) * Math.min(20, kw.offsetWidth * 0.3);
        await moveTo(c[0], c[1]); await wait(550);                // arrive, a beat to "read" it
        fire('pointerdown', X, Y, { down: true }); await wait(280);
        await moveTo(X + 8, Y - 6, 240, true);                    // small lift before carrying it off
        var b = centre(bar); await moveTo(b[0] - br.width * 0.12, b[1] + 2, null, true); await wait(320);
        fire('pointerup', X, Y);
        await wait(300); hide(true);                              // the cursor leaves the scene after the drop
        await wait(1900);                                         // query types in, then turns into its desire
        if (ic) {                                                 // reappears only for the search click
          var s = centre(ic); X = s[0]; Y = s[1]; fire('pointermove', X, Y); await wait(500);   // let the site cursor settle there while hidden
          hide(false); await wait(380);
          ic.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX: X, clientY: Y }));
          await wait(420); hide(true);
        }
        await wait(3200);                                         // the plan surfaces — let it sit a moment
        X = window.innerWidth * 0.5; Y = window.innerHeight * 0.86; fire('pointermove', X, Y); await wait(80);
        document.body.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, clientX: X, clientY: Y }));   // unseen click on the background
        await wait(900);
      } finally {
        running = false; document.documentElement.classList.remove('tl-demo');
        // the cursor stays hidden until the visitor moves their own mouse
        window.addEventListener('pointermove', function show(e) { if (!e.isTrusted) return; hide(false); window.removeEventListener('pointermove', show, true); }, true);
      }
    }
    // start once the screen has fully arrived (sticky in place, chips shown), only the first time
    var poll = setInterval(function () {
      if (done) return clearInterval(poll);
      if (document.documentElement.classList.contains('is-locked') || document.hidden) return;
      if (!sec.classList.contains('is-in')) return;
      var r = stk.getBoundingClientRect(); if (Math.abs(r.top) > 2) return;
      done = true; clearInterval(poll);
      setTimeout(function () { if (!userTouched && !document.documentElement.classList.contains('is-locked')) run(); }, 900);
    }, 250);
  })();

  var rt = 0;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { draw(); if (htPlan >= 0) halftone(); }, 150); });
  draw();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
