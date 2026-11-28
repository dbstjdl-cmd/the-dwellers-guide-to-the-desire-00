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
    '.tl-layers .pl{fill:#fff;fill-opacity:.08;stroke:#fff;stroke-width:1.2}' + /* a very faint white face on each disc */
    '.tl-layers .ln{fill:none;stroke:#fff;stroke-width:1.1;stroke-dasharray:3 2.5;opacity:.65;animation:tl-flow 1.1s linear infinite}' +
    /* dashes flow upward: each stem is drawn bottom → top, so a falling dash offset moves the pattern toward the top */
    '@keyframes tl-flow{from{stroke-dashoffset:0}to{stroke-dashoffset:-11}}' +
    '.trend:not(.is-in) .tl-layers .ln,html.is-locked .tl-layers .ln{animation-play-state:paused}' +
    '@media (prefers-reduced-motion:reduce){.tl-layers .ln{animation:none}}' +
    '.tl-layers .n{fill:#fff;stroke:none}' +
    '.tl-layers .lb{fill:#fff;font-family:"Departure Mono",ui-monospace,monospace;font-weight:400;letter-spacing:.16em}' +
    '.tl-layers .lb-no{fill:#fff;fill-opacity:.6}' +
    '.tl-layers .lb-ln{fill:none;stroke:#fff;stroke-width:1}' +
    '.tl-layers .lb-sq{fill:#fff}';
  css.textContent +=
    /* searched plan, shown behind the chips as white halftone dots; the diagram fades back meanwhile */
    '.tl-halftone{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0;transition:opacity .9s ease}' +
    '.tl-halftone.on{opacity:1}' +
    '.tl-layers{transition:opacity .9s ease}' +
    '.statement-sticky.tl-dim .tl-layers{opacity:.22}' +
    'html.is-locked .tl-halftone{opacity:0}';
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
  var SPEED = Math.PI * 2 / 240000, last = 0, acc = 0;           // one turn every 4 minutes
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

  // ── searched plan as a white halftone ──
  var ht = document.createElement('canvas'); ht.className = 'tl-halftone'; ht.setAttribute('aria-hidden', 'true');
  stk.insertBefore(ht, field);
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
    im.onload = function () { if (htPlan !== i) return; htImg = im; halftone(); ht.classList.add('on'); stk.classList.add('tl-dim'); };
    im.src = p.image;
  };
  window.__tlClear = function () { htPlan = -1; ht.classList.remove('on'); stk.classList.remove('tl-dim'); };

  var rt = 0;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { draw(); if (htPlan >= 0) halftone(); }, 150); });
  draw();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
