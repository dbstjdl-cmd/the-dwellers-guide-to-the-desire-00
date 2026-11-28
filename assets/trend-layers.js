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
    '.tl-layers .pl{fill:none;stroke:#fff;stroke-width:1.2}' +
    '.tl-layers .ln{fill:none;stroke:#fff;stroke-width:1.1;stroke-dasharray:3 2.5;opacity:.65;animation:tl-flow 1.1s linear infinite}' +
    /* dashes flow upward: each stem is drawn bottom → top, so a falling dash offset moves the pattern toward the top */
    '@keyframes tl-flow{from{stroke-dashoffset:0}to{stroke-dashoffset:-11}}' +
    '.trend:not(.is-in) .tl-layers .ln,html.is-locked .tl-layers .ln{animation-play-state:paused}' +
    '@media (prefers-reduced-motion:reduce){.tl-layers .ln{animation:none}}' +
    '.tl-layers .n{fill:#fff;stroke:none}' +
    '.tl-layers text{fill:#fff;font-family:var(--f-g,"Inter Tight",sans-serif);font-weight:500;letter-spacing:.08em}';
  document.head.appendChild(css);

  var seed = 3;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

  function draw() {
    var W = stk.clientWidth, H = stk.clientHeight; if (!W || !H) return;
    seed = 3;
    var f = function (n) { return n.toFixed(1); };
    // three iso discs, bottom → top
    // proportions from the sketch: flat discs (ry ≈ 0.28·rx), a wide gap between layers (≈ 3·ry)
    // same height and spacing as before; only the width is narrowed (85%)
    var Ry = H * 0.104, gap = Ry * 3, Rx = Math.min(W * 0.46, Ry / 0.28 * 0.8); // width at 80% of the original
    var cx = W / 2, cys = [H / 2 + gap, H / 2, H / 2 - gap];
    var names = ['1 — REALTIME SEARCH', '2 — DESIRE', '3 — FLOOR PLAN'];
    var fs = Math.max(11, Math.min(W, H * 1.6) * 0.012);
    var out = [];
    cys.forEach(function (cy, k) {
      out.push('<ellipse class="pl" cx="' + f(cx) + '" cy="' + f(cy) + '" rx="' + f(Rx) + '" ry="' + f(Ry) + '"/>');
      out.push('<text font-size="' + f(fs) + '" x="' + f(cx - Rx * 0.93) + '" y="' + f(cy - Ry * 0.42) + '">' + names[k] + '</text>');
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

  var rt = 0;
  window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(draw, 150); });
  draw();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
