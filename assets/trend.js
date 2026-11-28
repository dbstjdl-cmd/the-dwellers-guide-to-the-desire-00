(function () {
  /* ───────── real-time search trends ───────── */
  var sec = document.getElementById('essay');
  if (sec) initTrend(sec);
  initAbout();

  function initTrend(sec) {
    var stage = sec.querySelector('.statement-sticky');
    var field = sec.querySelector('.tr-field');
    var leftEl = sec.querySelector('[data-left]');
    var clockEl = sec.querySelector('[data-clock]');
    var head = sec.querySelector('.tr-head'), foot = sec.querySelector('.tr-foot');
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    var Q = [
      '혼자 사는 법', 'how to be alone', '층간소음 해결', '노이즈캔슬링', '방해금지 모드', '창문 없는 방', 'soundproof room', '배달 비대면 요청', '원룸 방음', 'do not disturb',
      '인스타 감성 인테리어', 'how to go viral', '랜선 집들이', '팔로워 늘리는 법', '한강뷰 아파트', '통창 거실', '브이로그 조명', 'followers', '오늘의 집 랭킹', '유리집',
      '셀프스토리지', '드레스룸 만들기', '새벽배송', '한정판 리셀', '팬트리 수납', 'just in case', '창고형 마트', 'one-click purchase', '수납 정리', '맥시멀리스트',
      '어른 친구 사귀는 법', 'how to make friends as an adult', '코리빙 하우스', '셰어하우스 후기', '외로움', '반려식물', '동네 친구', 'co-living', '같이 밥 먹을 사람', 'loneliness',
      '우리 동네 치안', 'is my neighbourhood safe', '스마트 도어벨', '홈캠 추천', '전세사기', '현관 이중잠금', '안심귀가', 'CCTV 사각지대', 'a camera for every room', '방범창',
      '잠적하는 법', 'how to disappear', '디지털 디톡스', '잊혀질 권리', '한 달 살기', '오프그리드 주택', '무인도 매매', '퇴사 후 시골', 'the right to be forgotten', '연락 끊고 살기'
    ];

    // live mode: the queries are the search keywords of the plans synced from Drive (04_plan), newest first
    var DP = (window.__extraPlans || []).filter(function (p) { return p.query; });
    var drive = DP.length > 0, planIdx = [], planNo = [], planDate = [], planBand = [];
    var FULL = 40, FADE = 30; // newest FULL stay solid, the next FADE grow fainter, older ones are not shown
    if (drive) {
      var srt = DP.map(function (p) { return { p: p, i: window.__extraPlans.indexOf(p) }; })
        .sort(function (a, b) { return (a.p.band - b.p.band) || (a.p.no < b.p.no ? 1 : -1); });
      Q = srt.map(function (x) { return x.p.query; });
      planIdx = srt.map(function (x) { return x.i; });
      planNo = srt.map(function (x) { return x.p.no; });
      planDate = srt.map(function (x) { return String(x.p.at || '').slice(0, 10); });
      planBand = srt.map(function (x) { return x.p.band || 0; });
    }
    function fadeOf(r) { return r < FULL ? 1 : Math.max(0, 1 - (r - FULL + 1) / (FADE + 1)); }

    var seed = 11;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
    function rr(a, b) { return a + (b - a) * rnd(); }
    function p2(n) { return String(n).padStart(2, '0'); }
    function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    function hms(t) { return p2(Math.floor(t / 3600)) + ':' + p2(Math.floor(t / 60) % 60) + ':' + p2(t % 60); }

    // fixed ranking — each query keeps its number wherever it repeats, like a track list
    var rankOf = {}, order = Q.map(function (_, i) { return i; });
    if (!drive) for (var i = order.length - 1; i > 0; i--) { var k = Math.floor(rnd() * (i + 1)); var t = order[i]; order[i] = order[k]; order[k] = t; }
    order.forEach(function (qi, r) { rankOf[qi] = r + 1; });
    var age = Q.map(function () { return Math.floor(rr(40, 290)); }); // seconds since it started trending
    exposeDesire(Q, rankOf, age);

    // older searches — the faded layer underneath the live chart
    var P = ['미니멀 라이프', '자취 꿀팁', '고시원', '반지하', '옥탑방', '원룸 곰팡이', '월세 인상', '청약 당첨', '영끌', '재택근무 책상', '홈오피스', '캠핑카 생활', '타이니하우스', '컨테이너 하우스', '공유주방', '혼밥', '혼술', '무인 편의점', '비대면 계약', '집콕', '홈트', '베란다 텃밭', '캣타워', '호캉스', '루프탑', '다락방', '방공호', '비상식량', '생존 배낭', '정전 대비', '사생활 보호 필름', '암막 커튼', '수면 캡슐', '캡슐 호텔', '투룸 전세', '신축 빌라', '깡통전세', '집주인 연락두절', '이웃 인사', '반상회', '입주민 단톡방', '층간흡연', '택배 도난', '도어락 비밀번호', 'how to live small', 'tiny house', 'van life', 'bunker for sale', 'hikikomori', 'panic room', 'minimalism', 'cozy room ideas', 'room tour', 'aesthetic room', 'work from home', 'quiet quitting', 'social battery', 'third place', 'storage unit near me', 'off the grid'];
    var pastDate = P.map(function () { var d = new Date(Date.now() - rr(1, 900) * 864e5); return d.getFullYear() + '.' + p2(d.getMonth() + 1) + '.' + p2(d.getDate()); });
    var pastNo = P.map(function () { return Math.floor(rr(61, 999)); });

    // live queries show the day they started rising (a few days back at most); newly risen ones show today
    function ymd(d) { return d.getFullYear() + '.' + p2(d.getMonth() + 1) + '.' + p2(d.getDate()); }
    var liveDate = Q.map(function () { return ymd(new Date(Date.now() - Math.floor(rr(0, 7)) * 864e5)); });
    var entries = [], total = 0, lastV = -1;

    function make(qi, past) {
      var el = document.createElement('div'); el.className = 'tr-e' + (past ? ' is-past' : '');
      var no = past ? String(pastNo[qi]).padStart(3, '0') : drive ? planNo[qi] : String(rankOf[qi]).padStart(3, '0');
      el.innerHTML = '<span class="no">' + no + '</span><span class="kw"></span><span class="sub"></span>';
      el.children[1].textContent = past ? P[qi] : Q[qi];
      el.children[2].textContent = past ? pastDate[qi] : drive ? planDate[qi] : liveDate[qi];
      if (drive && !past) {
        var f = fadeOf(qi);
        el.style.setProperty('--fade', f.toFixed(3));
        el.style.setProperty('--fade', (0.35 + 0.65 * f).toFixed(3)); el.style.setProperty('--fblur', ((1 - f) * 0.5).toFixed(2) + 'px');
        el.dataset.plan = planIdx[qi];
        el.setAttribute('data-cursor', 'READ ↗');
      }
      field.appendChild(el);
      return el;
    }

    function layout() {
      field.innerHTML = ''; entries = []; news = [];
      field.appendChild(glow);
      seed = 29;
      var W = stage.clientWidth, H = stage.clientHeight;
      // above the 1110×908 reference, scale text by screen area and add columns, so size and density match the small screen
      var K = Math.max(1, Math.sqrt(W * H / (1110 * 908)));
      document.documentElement.style.setProperty('--trk', K.toFixed(4));
      var SZ = 0.85; // chips drawn at 85% of the layout size: smaller type, same amount and spacing
      var fsL = (K > 1 ? 11.2 * K : Math.max(11, Math.min(14.5, W * 0.0101))) * 1.18; // size the layout is spaced for
      var fs = fsL * SZ;                                      // size the chips are drawn at
      var lh = fsL * 1.02;                                    // one text line (layout)
      var cols = W >= 1100 ? Math.max(14, Math.round(14 * (W / 1110) / K)) : W >= 700 ? 10 : 6;
      var gx = parseFloat(getComputedStyle(head).left) || 20;
      var cw = (W - gx * 2) / cols;
      field.style.setProperty('--fs', fs + 'px');
      field.style.setProperty('--mw', Math.max(cw * 2.2, fs * 9) + 'px');
      var y0 = head.getBoundingClientRect().bottom - stage.getBoundingClientRect().top + lh * 2.5;
      var y1 = foot.getBoundingClientRect().top - stage.getBoundingClientRect().top - lh * 1.5;
      if (W < 860) y1 -= 44; // room for the About button
      var placed = [], qn = 0, pn = 0;
      // number stacks claim their space first
      // (vertical number stacks removed)
      // live queries stay clear of the HUD frame; faded past searches may drift behind the glass
      var hud = sec.querySelector('.tr-hud');
      if (hud) { var hr = hud.getBoundingClientRect(), sr0 = stage.getBoundingClientRect(), hp = fs * 0.6; placed.push({ x: hr.left - sr0.left - hp - 40, y: hr.top - sr0.top - hp, w: hr.width + hp * 2 + 80, h: hr.height + hp * 2, liveOnly: true }); }
      // keep the background diagram's titles clear (assets/trend-layers.js)
      if (window.__tlAvoid) window.__tlAvoid(W, H).forEach(function (q) { q.liveOnly = true; placed.push(q); });
      function tryPlace(c, y, past) {
        if (drive && !past && (qn >= Q.length || fadeOf(qn) <= 0)) return 0;
        var qi = past ? pn % P.length : order[qn % order.length];
        var el = make(qi, past);
        var x = gx + c * cw, w = el.offsetWidth, h = el.offsetHeight;
        if (x + w > W - gx || y + h > y1 + lh) { el.remove(); return 0; }
        var r = { x: x, y: y, w: w / SZ, h: h / SZ }, m = fsL * 1.4;
        for (var p = 0; p < placed.length; p++) { var o = placed[p]; if (past && o.liveOnly) continue; if (r.x < o.x + o.w + m && r.x + r.w + m > o.x && r.y < o.y + o.h + 1 && r.y + r.h + 1 > o.y) { el.remove(); return 0; } }
        if (past) pn++; else qn++;
        el.style.left = x + 'px'; el.style.top = y + 'px';
        el.style.setProperty('--d', Math.round(rr(0, 1300)) + 'ms');
        placed.push(r);
        // past searches leave first, the live chart holds on longer
        var at = past ? rr(0, 0.55) : rr(0.25, 0.97); el.dataset.at = at.toFixed(4);
        entries.push({ el: el, qi: qi, past: past, at: at, gone: false, sub: el.children[2] });
        return h;
      }
      // live chart: a few lanes, each its own nested list hanging down the sheet
      var laneW = cols >= 14 ? 5 : cols >= 10 ? 5 : 6;
      var lanes = [];
      for (var c0 = 0; c0 < cols; c0 += laneW) lanes.push([c0, Math.min(cols, c0 + laneW)]);
      lanes.forEach(function (ln) {
        var y = y0 + lh * Math.round(rr(0, 3)), ind = 0;
        while (y < y1) {
          if (rnd() < 0.2) ind = 0; else ind = Math.max(0, Math.min(laneW - 2, ind + Math.round(rr(-1.3, 1.3))));
          var h1 = tryPlace(ln[0] + ind, y, false), h2 = 0;
          if (rnd() < 0.18) h2 = tryPlace(ln[0] + ind + Math.round(rr(2, laneW)), y, false); // fewer side-by-side pairs
          var rowH = Math.max(h1, h2) / SZ || lh * 2;
          y += rowH + (rnd() < 0.35 ? lh * rr(3, 5) : lh * rr(1.6, 2.6)); // more air between rows
        }
      });
      // past searches fill whatever space is left, snapped to the same grid
      var rows = Math.floor((y1 - y0) / lh);
      for (var n = 0, pk = 0; !drive && n < 2600 && pk < 16; n++) if (tryPlace(Math.floor(rnd() * (cols - 1)), y0 + Math.floor(rnd() * rows) * lh, true)) pk++; if (0) tryPlace(Math.floor(rnd() * (cols - 1)), y0 + Math.floor(rnd() * rows) * lh, true);
      total = entries.length;
      live = entries.filter(function (e) { return !e.past; });
      // a handful start as "just in"
      if (drive) markNew(); else for (var k = 0; k < 6; k++) flash();
      lastV = -1; update();
      drawGrid(W, H, gx, cols, cw, laneW, y0, y1, lh);
      if (numTotal) numTotal.textContent = String(total).padStart(3, '0');
      ghost();
    }

    // vertical stacked numbers, poster-style: live count, total, and two of the top ranks
    var numLeft = null, numTotal = null;
    function nums(W, gx, y0, y1) {
      var box = sec.querySelector('.tr-nums'), rects = []; if (!box) return rects;
      box.innerHTML = '';
      var top3 = order.slice(0, 3).map(function (qi) { return String(rankOf[qi]).padStart(3, '0'); });
      var spec = [
        { x: gx, b: 0, v: '000', tot: true },
        { x: W * 0.355, b: 0.22, v: top3[1] },
        { x: W * 0.64, b: 0.12, v: '000', live: true },
        { x: W - gx, b: 0.34, v: top3[2], r: true }
      ];
      spec.forEach(function (sp) {
        var el = document.createElement('div'); el.className = 'tr-num'; el.textContent = sp.v;
        box.appendChild(el);
        var h = el.offsetHeight, w = el.offsetWidth;
        el.style.left = (sp.r ? sp.x - w : sp.x) + 'px';
        el.style.top = (y1 - h - (y1 - y0) * sp.b) + 'px';
        if (sp.live) numLeft = el;
        if (sp.tot) numTotal = el;
        rects.push({ x: parseFloat(el.style.left), y: parseFloat(el.style.top), w: w, h: h });
      });
      return rects;
    }

    /* ── layering: ghost copies of the chart, a drifting terminal dump, panel rules with nodes ── */
    var ghosts = [];
    function ghost() {
      if (!ghosts.length) ['g1', 'g2'].forEach(function (c) { var g = document.createElement('div'); g.className = 'tr-ghost ' + c; stage.insertBefore(g, field); ghosts.push(g); });
      var html = field.innerHTML;
      ghosts.forEach(function (g) { g.innerHTML = html; });
    }
    setInterval(function () { if (sec.classList.contains('is-in') && !document.hidden) ghost(); }, 2500);

    (function term() {
      var box = sec.querySelector('.tt-in'); if (!box) return;
      var lines = [], d = new Date();
      for (var i = 0; i < 28; i++) {
        var qi = order[i % order.length];
        var t = new Date(d - age[qi] * 1000);
        var row = i % 4 === 0 ? 'QRY.' + String(rankOf[qi]).padStart(3, '0') + ' >> ' + Q[qi].toUpperCase()
          : i % 4 === 1 ? 'ROSE ' + p2(t.getHours()) + ':' + p2(t.getMinutes()) + ':' + p2(t.getSeconds()) + '  [LIVE]  ' + Q[(qi + 7) % Q.length]
          : i % 4 === 2 ? 'C:\\DESIRE\\INDEX> ' + Q[(qi + 13) % Q.length] + ' _'
          : '0x' + Math.floor(rnd() * 0xffffff).toString(16).toUpperCase().padStart(6, '0') + '  ' + Q[(qi + 29) % Q.length] + '  ......  OK';
        lines.push('<p></p>');
        lines[i] = row;
      }
      var all = lines.concat(lines);
      box.innerHTML = '';
      all.forEach(function (s) { var p = document.createElement('p'); p.textContent = s; box.appendChild(p); });
    })();

    function drawGrid(W, H, gx, cols, cw, laneW, y0, y1, lh) {
      var svg = sec.querySelector('.tr-grid'); if (!svg) return;
      var NS = 'http://www.w3.org/2000/svg', o = 10;
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.innerHTML = '';
      var top = y0 - lh * 1.1, bot = y1 + lh * 0.9, L = gx * 0.55, R = W - gx * 0.55;
      var xs = [L, R];
      for (var c = laneW; c < cols; c += laneW) xs.push(gx + c * cw - cw * 0.35);
      var ys = [top, bot];
      function ln(x1, y1_, x2, y2) { var e = document.createElementNS(NS, 'line'); e.setAttribute('x1', x1); e.setAttribute('y1', y1_); e.setAttribute('x2', x2); e.setAttribute('y2', y2); svg.appendChild(e); }
      function dot(x, y) { var e = document.createElementNS(NS, 'circle'); e.setAttribute('cx', x); e.setAttribute('cy', y); e.setAttribute('r', 2.6); svg.appendChild(e); }
      function tx(x, y, s) { var e = document.createElementNS(NS, 'text'); e.setAttribute('x', x); e.setAttribute('y', y); e.textContent = s; svg.appendChild(e); }
      ys.forEach(function (y) { ln(L - o, y, R + o, y); });
      xs.forEach(function (x) { ln(x, top - o, x, bot + o); });
      xs.forEach(function (x) { ys.forEach(function (y) { dot(x, y); }); });
      var names = ['PANEL A-01 / PRIVACY · RECOGNITION', 'PANEL A-02 / ACCUMULATION · BELONGING', 'PANEL A-03 / SECURITY · ESCAPE'];
      var sx = xs.slice().sort(function (a, b) { return a - b; });
      for (var k = 0; k < sx.length - 1 && k < names.length; k++) tx(sx[k] + 8, top + 14, names[k]);
    }

    // newly risen queries: black, blinking dot, green glow drifting toward the latest one
    var glow = document.createElement('div'); glow.className = 'tr-glow';
    var news = [], live = [];
    function flash() {
      var pool = live.filter(function (e) { return !e.gone && !e.el.classList.contains('is-new'); });
      if (!pool.length) return;
      var e = pool[Math.floor(Math.random() * pool.length)];
      e.el.classList.add('is-new');
      age[e.qi] = 0; liveDate[e.qi] = ymd(new Date()); e.sub.textContent = liveDate[e.qi];
      news.push(e);
      if (news.length > 7) news.shift().el.classList.remove('is-new');
      glow.style.left = (parseFloat(e.el.style.left) + e.el.offsetWidth / 2) + 'px';
      glow.style.top = (parseFloat(e.el.style.top) + e.el.offsetHeight / 2) + 'px';
    }
    setInterval(function () { if (!drive && lastV < 0.97 && sec.classList.contains('is-in')) flash(); }, 1700);

    // newest batch = "just in": red, and typed out once when the sheet first comes into view
    var typed = false;
    function markNew() {
      news = live.filter(function (e) { return planBand[e.qi] === 0; });
      news.forEach(function (e) { e.el.classList.add('is-new'); });
      var first = news[0];
      if (first) {
        glow.style.left = (parseFloat(first.el.style.left) + first.el.offsetWidth / 2) + 'px';
        glow.style.top = (parseFloat(first.el.style.top) + first.el.offsetHeight / 2) + 'px';
      }
      if (!typed) {
        news.forEach(function (e) { var k = e.el.children[1]; k.dataset.full = k.textContent; k.textContent = ''; e.el.classList.add('is-typing'); });
        if (sec.classList.contains('is-in')) typeNew();
      }
    }
    function typeNew() {
      if (typed) return; typed = true;
      news.forEach(function (e, j) {
        var k = e.el.children[1], full = k.dataset.full || k.textContent, n = 0;
        setTimeout(function step() {
          if (!k.isConnected) return;
          k.textContent = full.slice(0, ++n);
          if (n < full.length) setTimeout(step, reduce ? 10 : 70 + Math.random() * 90);
          else e.el.classList.remove('is-typing');
        }, reduce ? 0 : 500 + j * 650);
      });
    }
    // ── news context: hover a keyword → why it trended + the articles; click → the main article ──
    var card = document.createElement('div'); card.className = 'tr-card'; card.setAttribute('role', 'dialog');
    sec.querySelector('.statement-sticky').appendChild(card);
    var cardFor = null, hideT = 0;
    function planOf(t) { var a = window.__extraPlans || []; return a[+t.dataset.plan]; }
    function openDetail(i) {
      if (typeof window.__openPlan !== 'function') return;
      document.documentElement.dataset.from = 'trend'; hideCard(true); window.__openPlan(i);
    }
    function showCard(t) {
      clearTimeout(hideT);
      var p = planOf(t); if (!p) return;
      var n = p.news || {}, src = n.sources || [];
      cardFor = t;
      card.innerHTML = '<div class="tc-h"><span class="tc-l">왜 검색됐나 · WHY IT TRENDED</span><span class="tc-d"></span></div>' +
        '<p class="tc-q"></p><p class="tc-r"></p><p class="tc-n"></p>' +
        '<div class="tc-l tc-al">관련 기사 · ARTICLES</div><ul class="tc-a"></ul>' +
        '<button type="button" class="tc-go" data-cursor="OPEN">도면 보기 — <b></b> →</button>';
      card.querySelector('.tc-d').textContent = p.at || '';
      card.querySelector('.tc-q').textContent = p.query || p.title;
      card.querySelector('.tc-r').textContent = n.reason || '';
      card.querySelector('.tc-n').textContent = n.note || '';
      card.querySelector('.tc-go b').textContent = p.title;
      var ul = card.querySelector('.tc-a');
      if (!src.length) ul.innerHTML = '<li class="tc-none">연결된 기사가 없습니다</li>';
      src.forEach(function (s, k) {
        var li = document.createElement('li'), a = document.createElement('a');
        a.href = s.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('data-cursor', 'READ');
        a.innerHTML = '<span class="tc-p"></span><span class="tc-t"></span><i>↗</i>';
        a.children[0].textContent = s.press || '기사';
        a.children[1].textContent = s.title || '기사 원문 읽기';
        li.appendChild(a); ul.appendChild(li);
      });
      card.querySelector('.tc-go').onclick = function () { openDetail(+t.dataset.plan); };
      // position beside the keyword, kept inside the sheet
      var box = card.parentNode.getBoundingClientRect(), r = t.getBoundingClientRect();
      card.classList.add('is-on');
      var cw = card.offsetWidth, ch = card.offsetHeight, m = 14;
      var x = r.right + m - box.left; if (x + cw > box.width - m) x = r.left - box.left - cw - m; if (x < m) x = Math.max(m, Math.min(box.width - cw - m, r.left - box.left));
      var y = r.top - box.top - 6; if (y + ch > box.height - m) y = box.height - ch - m; if (y < m) y = m;
      card.style.left = x + 'px'; card.style.top = y + 'px';
      field.querySelectorAll('.tr-e.is-hover').forEach(function (e) { e.classList.remove('is-hover'); });
      t.classList.add('is-hover');
    }
    function hideCard(now) {
      clearTimeout(hideT);
      hideT = setTimeout(function () { card.classList.remove('is-on'); if (cardFor) cardFor.classList.remove('is-hover'); cardFor = null; }, now ? 0 : 260);
    }
    var touch = window.matchMedia && matchMedia('(hover: none)').matches;
    /* hover card removed — keywords now turn into desires under the cursor */
    field.addEventListener('mouseout', function (ev) { var t = ev.target.closest && ev.target.closest('.tr-e[data-plan]'); if (t && !t.contains(ev.relatedTarget)) hideCard(); });
    card.addEventListener('mouseenter', function () { clearTimeout(hideT); });
    card.addEventListener('mouseleave', function () { hideCard(); });
    field.addEventListener('click', function (ev) {
      var t = ev.target.closest && ev.target.closest('.tr-e[data-plan]');
      if (!t) return;
      
      var p = planOf(t), s = p && p.news && p.news.sources && p.news.sources[0];
      if (!s) { openDetail(+t.dataset.plan); return; }
      var w = window.open(s.url, '_blank', 'noopener');
      
    });
    document.addEventListener('click', function (ev) { if (cardFor && !card.contains(ev.target) && !(ev.target.closest && ev.target.closest('.tr-e[data-plan]'))) hideCard(true); });

    function progress() {
      var r = sec.getBoundingClientRect(), vh = window.innerHeight;
      return clamp((-r.top - vh * 1.0) / (vh * 3.0));
    }
    // crossfade: intro sheet fades out while this one fades in, both pinned in place
    var introStage = document.querySelector('.tdgtd-stage');
    function fade() {
      var r = sec.getBoundingClientRect(), vh = window.innerHeight;
      var f = clamp(-r.top / (vh * 0.8));
      f = f * f * (3 - 2 * f);
      stage.style.opacity = f.toFixed(3);
      if (introStage) introStage.style.opacity = (1 - f).toFixed(3);
      if (f > 0.35) { sec.classList.add('is-in'); if (drive && news.length) typeNew(); }
    }
    fade();
    function update() {
      var v = reduce ? clamp(progress() * 1.2) : progress();
      if (Math.abs(v - lastV) < 0.0008) return;
      lastV = v;
      var left = 0;
      entries.forEach(function (e) {
        var g = v > e.at;
        if (g !== e.gone) { e.gone = g; e.el.classList.toggle('is-gone', g); }
        if (!g) left++;
      });
      glow.style.opacity = String(0.9 * (1 - clamp((v - 0.7) / 0.28)));
      leftEl.textContent = String(left).padStart(3, '0') + ' / ' + String(total).padStart(3, '0') + ' QUERIES';
      if (numLeft) numLeft.textContent = String(left).padStart(3, '0');
    }

    // live: clock + every query's "time trending" counter
    function tick() {
      var d = new Date();
      clockEl.textContent = d.getFullYear() + '.' + p2(d.getMonth() + 1) + '.' + p2(d.getDate()) + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()) + ' KST';
      for (var i = 0; i < age.length; i++) age[i]++;
    }
    tick(); setInterval(tick, 1000);

    // centre search bar: queries typed out one after another (Hangul composes jamo by jamo like a real IME)
    (function typer() {
      var bar = sec.querySelector('.tr-search'); if (!bar) return;
      var out = bar.querySelector('.ts-q');
      var hudN = sec.querySelector('[data-hud-n]'), hudXY = sec.querySelector('[data-hud]');
      if (hudXY) setInterval(function () { hudXY.textContent = 'X ' + (Math.random() * 999).toFixed(2).padStart(6, '0') + ' · Y ' + (Math.random() * 999).toFixed(2).padStart(6, '0'); }, 260);
      // glitch streaks: thin horizontal bars that reshuffle at irregular beats
      var noise = sec.querySelector('.tr-noise');
      if (noise && !reduce) {
        var bars = [];
        for (var b = 0; b < 26; b++) { var el = document.createElement('i'); noise.appendChild(el); bars.push(el); }
        (function shuffle() {
          bars.forEach(function (el, n) {
            var red = n < 3;
            el.className = red ? 'r' : '';
            el.style.setProperty('--y', (Math.random() * 100).toFixed(2) + '%');
            el.style.setProperty('--x', (Math.random() * (red ? 90 : 70)).toFixed(1) + '%');
            el.style.setProperty('--w', (red ? 1 + Math.random() * 3 : 8 + Math.random() * 45).toFixed(1) + '%');
            el.style.setProperty('--h', (1 + Math.random() * (Math.random() < .2 ? 22 : 6)).toFixed(0) + 'px');
            el.style.setProperty('--c', Math.random() < .5 ? '120,170,170' : '200,215,215');
            el.style.setProperty('--a', (0.03 + Math.random() * 0.12).toFixed(3));
            el.style.opacity = Math.random() < .25 ? '0' : '1';
          });
          setTimeout(shuffle, Math.random() < .15 ? 60 : 300 + Math.random() * 900);
        })();
      }
      var L = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
      function steps(word) { // every intermediate string a keyboard would show
        var s = [], done = '';
        for (var i = 0; i < word.length; i++) {
          var c = word.charCodeAt(i) - 0xAC00;
          if (c >= 0 && c < 11172) {
            var l = Math.floor(c / 588), v = Math.floor((c % 588) / 28), t = c % 28;
            s.push(done + L[l]);
            s.push(done + String.fromCharCode(0xAC00 + l * 588 + v * 28));
            if (t) s.push(done + word[i]);
          } else s.push(done + word[i]);
          done += word[i];
        }
        return s;
      }
      var pool = Q.slice(), last = '';
      function next() {
        if (!pool.length) pool = Q.slice();
        var q; do { q = pool.splice(Math.floor(Math.random() * pool.length), 1)[0]; } while (q === last && pool.length);
        last = q; return q;
      }
      function held() { return bar.classList.contains('is-held'); }
      function run() {
        if (held()) return setTimeout(run, 500);
        var q = next(), st = steps(q), i = 0;
        bar.classList.add('is-typing');
        (function type() {
          if (held()) { bar.classList.remove('is-typing'); return setTimeout(run, 500); }
          out.textContent = st[i++];
          if (i < st.length) return setTimeout(type, reduce ? 40 : 55 + Math.random() * 110 + (st[i - 1].slice(-1) === ' ' ? 120 : 0));
          bar.classList.remove('is-typing');
          if (!reduce) { bar.classList.add('is-glitch'); setTimeout(function () { bar.classList.remove('is-glitch'); }, 340); }
          if (hudN) hudN.textContent = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
          setTimeout(erase, 1900);
        })();
        function erase() {
          var n = q.length;
          bar.classList.add('is-typing');
          (function del() {
            if (held()) { bar.classList.remove('is-typing'); return setTimeout(run, 500); }
            out.textContent = q.slice(0, --n);
            if (n > 0) return setTimeout(del, 32);
            bar.classList.remove('is-typing');
            setTimeout(run, 550);
          })();
        }
      }
      window.__tsSteps = steps;
      setTimeout(run, 600);
    })();

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { ticking = false; fade(); update(); });
    }, { passive: true });
    var rt, lw = window.innerWidth;
    window.addEventListener('resize', function () { if (window.innerWidth === lw) return; lw = window.innerWidth; clearTimeout(rt); rt = setTimeout(layout, 150); });
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { requestAnimationFrame(layout); });
  }

  /* ───────── shared with the plan cloud: top-10 panel + which search each plan came from ───────── */
  function exposeDesire(Q, rankOf, age) {
    function p2(n) { return String(n).padStart(2, '0'); }
    function hms(t) { return p2(Math.floor(t / 3600)) + ':' + p2(Math.floor(t / 60) % 60) + ':' + p2(t % 60); }
    function stamp(d) { return d.getFullYear() + '.' + p2(d.getMonth() + 1) + '.' + p2(d.getDate()) + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes()) + ':' + p2(d.getSeconds()); }
    var born = Date.now(), map = null, rows = [], clock = null;
    var top = [];
    for (var r = 1; r <= 10; r++) for (var i = 0; i < Q.length; i++) if (rankOf[i] === r) top.push(i);
    var moves = ['▲3', '–', '▲1', 'NEW', '▼2', '▲5', '–', '▼1', 'NEW', '▲2'];
    function tickRank() {
      if (clock) { var d = new Date(); clock.textContent = 'UPDATED ' + d.getFullYear() + '.' + p2(d.getMonth() + 1) + '.' + p2(d.getDate()) + ' ' + p2(d.getHours()) + ':' + p2(d.getMinutes()); }
    }
    setInterval(tickRank, 1000);
    window.__desire = {
      forEntry: function (m, list) { build(list); return map[m] || null; },
      band: function (m, list) { build(list); return map[m] ? map[m].band : 0; },
      rank: function (qi) { return typeof qi === 'number' && qi >= 0 ? rankOf[qi] : 0; },
      stamp: stamp,
      mark: function (qi) { rows.forEach(function (row) { row.el.classList.toggle('is-hot', row.qi === qi); }); },
      mountRank: function (el) {
        if (el.__rk) return; el.__rk = true;
        el.innerHTML = '<ol></ol><p class="cr-h"><span>■ REAL TIME SEARCH</span><span class="cr-c"></span></p>';
        clock = el.querySelector('.cr-c');
        var ol = el.querySelector('ol'); rows = [];
        // with Drive plans loaded, the list is the newest plans' search keywords (newest batch first)
        var dp = (window.__extraPlans || []).filter(function (p) { return p.query; });
        var list = top;
        if (dp.length) {
          var seen = {}; list = [];
          dp.slice().sort(function (a, b) { return (a.band - b.band) || (a.no < b.no ? -1 : 1); })
            .forEach(function (p) { if (!seen[p.query] && list.length < 10) { seen[p.query] = 1; list.push(p.query); } });
        }
        list.forEach(function (qi, n) {
          var li = document.createElement('li');
          li.innerHTML = '<span class="cr-n">' + p2(n + 1) + '</span><span class="cr-k"></span>';
          li.children[1].textContent = typeof qi === 'string' ? qi : Q[qi];
          li.setAttribute('data-cursor', 'FIND');
          li.addEventListener('pointerenter', function () { findPlans(qi, li); });
          li.addEventListener('pointerleave', function () { findPlans(-1, null); });
          ol.appendChild(li);
          rows.push({ el: li, qi: qi });
        });
        tickRank();
      }
    };

    // every plan answers exactly one search; the first ten of each group are the live chart's queries
    var KEYS = ['privacy', 'recognition', 'accumulation', 'belonging', 'security', 'escape'];
    var MORE = [
      ['암막 커튼', '사생활 보호 필름', '수면 캡슐', '혼밥 맛집', '혼술 안주', '현관 가림막', '인터폰 끄는 법', '이웃과 마주치지 않는 법', '1인 가구 원룸', '귀마개 추천', '방음 부스', 'hikikomori', 'introvert house', 'quiet room ideas', 'social battery', '은둔형 생활', '재택근무만 하는 회사'],
      ['룸투어', 'room tour', 'aesthetic room', '링라이트 추천', '셀카 잘 나오는 조명', '집들이 선물', '포토존 만들기', '펜트하우스 매매', '라이브 방송 세팅', '인플루언서 되는 법', '조회수 올리는 법', '쇼룸 같은 집', '숏폼 편집', '좋아요 늘리기', 'open plan living', 'glass house for sale', '전신거울 인테리어'],
      ['storage unit near me', '붙박이장 시공', '리빙박스 대량', '비상식량', '생존 배낭', '컬렉션 진열장', '신발장 확장', '다락방 수납', '정리수납 전문가', '블랙프라이데이', '해외직구', '굿즈 보관법', '창고 임대', '로켓배송', '공간 늘리는 법', '압축팩', 'hoarding'],
      ['공유주방', '입주민 단톡방', '반상회', '이웃 인사', '소셜다이닝', '동호회 모임', '독서모임', '셰어하우스 규칙', 'third place', '반려동물 입양', '같이 사는 법', '공동체 주택', '마을 공동체', '식구', '함께 사는 집', '대화 상대', '혼자 아닌 법'],
      ['도어락 비밀번호', '택배 도난', '깡통전세', '집주인 연락두절', '방공호', 'panic room', '무인 경비', '호신용품', '창문 잠금장치', '보안 필름', '경비원 있는 아파트', '동작감지 센서', '정전 대비', '비상 탈출', '안전한 원룸', '여성 안심 주택', '현관 보조키'],
      ['off the grid', 'van life', '캠핑카 생활', '타이니하우스', '컨테이너 하우스', '산속 오두막', '계정 삭제하는 법', '번호 바꾸는 법', '해외 이민', '섬 생활', '빈집 매매', 'tiny house', '자연인', '휴대폰 없이 살기', '익명으로 사는 법', 'bunker for sale', '흔적 없이 이사']
    ];
    // when it rose → which cloud it sits in (0 = the first one the camera reaches)
    var BANDS = [[60, 3600], [3600, 12 * 3600], [24 * 3600, 48 * 3600], [2.2 * 86400, 7 * 86400], [8 * 86400, 30 * 86400], [32 * 86400, 90 * 86400]];
    function hsh(n) { return ((n + 1) * 2654435761 % 4294967296) / 4294967296; }
    function build(list) {
      if (map || !list) return;
      var cnt = {};
      map = list.map(function (e) {
        if (e.query) return { qi: e.query, q: e.query, at: e.at, drive: true, band: e.band || 0 }; // synced from Drive: name carries search + time
        var gi = Math.max(0, KEYS.indexOf(e.group));
        var k = cnt[gi] = (cnt[gi] || 0); cnt[gi]++;
        var qi = k < 10 ? gi * 10 + k : -1;
        return { qi: qi, q: qi >= 0 ? Q[qi] : (MORE[gi][k - 10] || Q[gi * 10 + k % 10]), live: qi >= 0 && rankOf[qi] <= 10 };
      });
      // live top-10 all sit in the "just now" cloud; the rest are dealt out evenly
      var per = Math.ceil(map.length / BANDS.length), fill = BANDS.map(function () { return 0; });
      var rest = [];
      map.forEach(function (m, i) { if (m.drive) { fill[m.band]++; } else if (m.live) { m.band = 0; fill[0]++; } else rest.push(i); });
      rest.sort(function (a, b) { return hsh(a * 7) - hsh(b * 7); });
      var b = 0;
      rest.forEach(function (i) { while (b < BANDS.length - 1 && fill[b] >= per) b++; map[i].band = b; fill[b]++; });
      map.forEach(function (m, i) {
        if (m.drive) return;
        var B = BANDS[m.band];
        var ago = m.live ? age[m.qi] : B[0] + hsh(i * 13 + 5) * (B[1] - B[0]);
        m.at = stamp(new Date(born - ago * 1000));
      });
    }

    // hovering a ranked search frames the plan in the cloud that came from it in the cloud that came from it
    var finding = -1, findRaf = 0, marks = [], layer = null;
    function findPlans(qi, li) {
      finding = qi;
      rows.forEach(function (row) { row.el.classList.toggle('is-hot', row.el === li); });
      var S = window.__cloud, stage = document.querySelector('.cloud-stage');
      if (!layer && stage) { layer = document.createElement('div'); layer.className = 'cloud-find'; stage.appendChild(layer); }
      if (!layer) return;
      layer.innerHTML = ''; marks = [];
      cancelAnimationFrame(findRaf);
      if (qi === -1 || qi === null || !S) { layer.classList.remove('is-on'); return; }
      build(S.entries);
      map.forEach(function (m, i) {
        if (m.qi !== qi) return;
        var e = S.entries[i], box = document.createElement('div');
        box.className = 'cf-box';
        box.innerHTML = '<span class="cf-l"></span>';
        box.firstChild.textContent = (e.no || '') + ' — ' + String(e.title || '').toUpperCase();
        layer.appendChild(box); marks.push({ i: i, el: box });
      });
      layer.classList.add('is-on');
      // leader lines: from the hovered search to every plan it framed
      var NS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('class', 'cf-lines'); layer.insertBefore(svg, layer.firstChild);
      marks.forEach(function (mk) {
        mk.path = document.createElementNS(NS, 'path'); svg.appendChild(mk.path);
        mk.d0 = document.createElementNS(NS, 'circle'); mk.d0.setAttribute('r', 2.5); svg.appendChild(mk.d0);
        mk.d1 = document.createElementNS(NS, 'circle'); mk.d1.setAttribute('r', 2.5); svg.appendChild(mk.d1);
      });
      (function loop() {
        if (finding !== qi) return;
        var cam = S.camera, t = Math.tan(cam.fov * Math.PI / 360);
        var sr = stage.getBoundingClientRect(), lr = li ? li.getBoundingClientRect() : null;
        var ax = lr ? lr.right - sr.left : 0, ay = lr ? lr.top + lr.height / 2 - sr.top : 0;
        marks.forEach(function (mk) {
          var v = S.positions[mk.i].clone().applyMatrix4(S.group.matrixWorld);
          var d = -v.clone().applyMatrix4(cam.matrixWorldInverse).z;
          var p = S.project(v);
          if (!p.front || d < 0.5) { mk.el.style.opacity = '0'; return; }
          var hh = 0.5 * S.scales[mk.i] / (d * t) * (S.h / 2), hw = hh * 1.25;
          mk.el.style.opacity = '1';
          mk.el.style.transform = 'translate3d(' + (p.x - hw - 4).toFixed(1) + 'px,' + (p.y - hh - 4).toFixed(1) + 'px,0)';
          mk.el.style.width = (hw * 2 + 8).toFixed(1) + 'px'; mk.el.style.height = (hh * 2 + 8).toFixed(1) + 'px';
          if (!lr) return;
          var bx = p.x - hw - 4, by = p.y, right = bx > ax;
          var ex = right ? bx : p.x + hw + 4, mx = ax + (ex - ax) * 0.5;
          var d = 'M' + ax.toFixed(1) + ' ' + ay.toFixed(1) + 'H' + mx.toFixed(1) + 'V' + by.toFixed(1) + 'H' + ex.toFixed(1);
          mk.path.setAttribute('d', d);
          mk.d0.setAttribute('cx', ax); mk.d0.setAttribute('cy', ay);
          mk.d1.setAttribute('cx', ex); mk.d1.setAttribute('cy', by);
          mk.path.style.opacity = mk.d0.style.opacity = mk.d1.style.opacity = '1';
        });
        marks.forEach(function (mk) { if (mk.path && mk.el.style.opacity === '0') mk.path.style.opacity = mk.d1.style.opacity = '0'; });
        findRaf = requestAnimationFrame(loop);
      })();
    }
  }

  /* ───────── About window ───────── */
  function initAbout() {
    var html = document.documentElement;
    var ab = document.getElementById('about');
    var openBtn = document.querySelector('.ab-open');
    var closeBtn = ab.querySelector('.ab-close');
    var body = ab.querySelector('.ab-body');
    function open() { html.classList.add('ab-on'); ab.setAttribute('aria-hidden', 'false'); body.scrollTop = 0; setTimeout(function () { closeBtn.focus({ preventScroll: true }); }, 50); }
    function close() { html.classList.remove('ab-on'); ab.setAttribute('aria-hidden', 'true'); openBtn.focus({ preventScroll: true }); }
    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    ab.addEventListener('click', function (e) { if (e.target === ab) close(); });
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && html.classList.contains('ab-on')) close(); });
  }
})();

/* ───────── plan detail: the search keyword gets its own block above the title ───────── */
(function () {
  var busy = false;
  function sync() {
    busy = false;
    if (!document.querySelector('.detail') && document.documentElement.dataset.from) delete document.documentElement.dataset.from;
    var box = document.querySelector('.detail-text'); if (!box) return;
    var q = '';
    box.querySelectorAll('.detail-meta > div').forEach(function (row) {
      var dt = row.querySelector('dt'), dd = row.querySelector('dd');
      if (dt && dd && dt.textContent.trim() === 'SEARCH') q = dd.textContent.trim();
    });
    var el = box.querySelector('.dt-search');
    if (!q) { if (el) el.remove(); return; }
    if (!el) {
      el = document.createElement('div'); el.className = 'dt-search';
      el.innerHTML = '<span class="dt-l">검색어 · SEARCH</span><span class="dt-q"></span>';
      var h2 = box.querySelector('h2');
      box.insertBefore(el, h2 || box.firstChild);
    }
    var qe = el.querySelector('.dt-q');
    if (qe.textContent !== q) qe.textContent = q;
    // why it trended + articles, matched by house name + search keyword
    var h2 = box.querySelector('h2'), title = h2 ? h2.textContent.trim() : '';
    var plan = (window.__extraPlans || []).filter(function (p) { return p.query === q && p.title === title; })[0];
    var nb = box.querySelector('.dt-news'), key = plan ? plan.id : '';
    if (!plan || !plan.news) { if (nb) nb.remove(); return; }
    if (nb && nb.dataset.k === key) return;
    if (!nb) { nb = document.createElement('div'); nb.className = 'dt-news'; el.parentNode.insertBefore(nb, el.nextSibling); }
    nb.dataset.k = key;
    var n = plan.news;
    nb.innerHTML = '<span class="dt-l">왜 검색됐나 · WHY IT TRENDED</span><p class="dn-r"></p><p class="dn-n"></p><ul class="dn-a"></ul>';
    nb.querySelector('.dn-r').textContent = n.reason || '';
    nb.querySelector('.dn-n').textContent = n.note || '';
    var ul = nb.querySelector('.dn-a');
    (n.sources || []).forEach(function (s, k) {
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = s.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('data-cursor', 'READ');
      a.innerHTML = '<span class="tc-p"></span><span class="tc-t"></span><i>↗</i>';
      a.children[0].textContent = s.press || '기사';
      a.children[1].textContent = s.title || '기사 원문 읽기';
      li.appendChild(a); ul.appendChild(li);
    });
  }
  new MutationObserver(function () { if (!busy) { busy = true; requestAnimationFrame(sync); } })
    .observe(document.body, { childList: true, subtree: true, characterData: true });
})();

/* ───────── plan detail: clicking outside the sheet returns to the cloud ───────── */
document.addEventListener('click', function (e) {
  var d = e.target.closest && e.target.closest('.detail');
  if (!d || e.target.closest('.detail-sheet')) return;
  var btns = d.querySelectorAll('.detail-bar button'), back = null;
  btns.forEach(function (b) { if (!back && /RETURN/i.test(b.textContent)) back = b; });
  (back || btns[0]) && (back || btns[0]).click();
});

/* ───────── archive: search rankings by date (replaces the six sample entries) ───────── */
(function () {
  var data = null, built = false, PER = window.__axPer || 10;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function idxOf(p) { var a = window.__extraPlans || []; for (var i = 0; i < a.length; i++) if (a[i].id === 'drive-' + p.driveId) return i; return -1; }
  function bDate(b) { return b.slice(0, 4) + '.' + b.slice(4, 6) + '.' + b.slice(6, 8); }
  function bTime(b) { var t = b.split('_')[1] || ''; return t.slice(0, 2) + ':' + t.slice(2, 4); }
  var DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  function dow(b) { return DOW[new Date(+b.slice(0, 4), +b.slice(4, 6) - 1, +b.slice(6, 8)).getDay()]; }
  function ofBatch(b) { return data.filter(function (p) { return p.batch === b; }).sort(function (a, c) { return a.n - c.n; }); }

  function rankRow(p) {
    return '<li><button type="button" class="ax-r" data-i="' + idxOf(p) + '" data-cursor="OPEN">' +
      '<span class="ax-rk">' + String(p.n).padStart(2, '0') + '</span><span class="ax-kw">' + esc(p.keyword || p.title) + '</span>' +
      '<span class="ax-ti">' + esc(p.title) + '</span><span class="ax-th"><img loading="lazy" alt="" src="' + esc(p.image) + '"></span>' +
      '<span class="ax-ar" aria-hidden="true">→</span></button></li>';
  }
  function cards(b) {
    return '<div class="ax-grid">' + ofBatch(b).slice(0, 10).map(function (p) {
      return '<button type="button" class="ax-card" data-i="' + idxOf(p) + '" data-cursor="OPEN"><span class="ax-fig"><img loading="lazy" alt="" src="' + esc(p.image) + '"></span>' +
        '<span class="ax-cap"><span class="ax-rk">' + String(p.n).padStart(2, '0') + '</span><span class="ax-kw">' + esc(p.keyword) + '</span><span class="ax-ti">' + esc(p.title) + '</span></span></button>';
    }).join('') + '</div>';
  }
  function gridSec(b, cls) {
    return '<section class="ax-sec ' + (cls || '') + '" data-d="' + b.slice(0, 8) + '"><div class="ax-lh"><span class="label">' + (cls === 'is-latest' ? 'LATEST — ' : '') +
      bDate(b) + ' <small>' + dow(b) + '</small> ' + bTime(b) + ' 실시간 검색어 TOP 10</span></div>' + cards(b) + '</section>';
  }
  function build(arch) {
    var batches = Array.from(new Set(data.map(function (p) { return p.batch; }))).sort().reverse();
    var days = {}; batches.forEach(function (b) { var d = b.slice(0, 8); (days[d] = days[d] || []).push(b); });
    var dayKeys = Object.keys(days).sort().reverse(), pages = Math.max(1, Math.ceil(dayKeys.length / PER)), page = 0;
    var latest = batches[0];

    var head = arch.querySelector('.archive-head');
    var lab = head && head.querySelector('.label'); if (lab) lab.textContent = '05 / SEARCH ARCHIVE — BY DATE';
    var intro = head && head.querySelector('.archive-intro');
    if (intro) intro.textContent = '날짜별로 정리한 실시간 검색어 1–10위. 날짜를 누르면 그날의 순위가 펼쳐지고, 그 시각의 도면 10장이 아래에 함께 놓입니다.';

    var box = document.createElement('div'); box.className = 'ax';
    box.innerHTML = '<ol class="ax-days"></ol><nav class="ax-pager"></nav>' + gridSec(latest, 'is-latest') + '<div class="ax-open"></div>';
    var list = box.querySelector('.ax-days'), pager = box.querySelector('.ax-pager'), openBox = box.querySelector('.ax-open');
    var openDays = {};   // d -> selected batch

    function dayRow(d, k) {
      var bs = days[d], top = ofBatch(bs[0]).slice(0, 3), isOpen = d in openDays, sel = openDays[d] || bs[0];
      return '<li class="ax-day' + (isOpen ? ' is-open' : '') + '" data-d="' + d + '"><button type="button" class="ax-dh" data-cursor="OPEN" aria-expanded="' + isOpen + '">' +
        '<span class="ax-dn">' + String(dayKeys.length - k).padStart(3, '0') + '</span>' +
        '<span class="ax-dd">' + bDate(bs[0]) + ' <small>' + dow(bs[0]) + '</small></span>' +
        '<span class="ax-dp">' + top.map(function (p) { return esc(p.keyword); }).join(' · ') + '</span>' +
        '<span class="ax-dc">' + bs.length + ' SNAPSHOT' + (bs.length > 1 ? 'S' : '') + ' · ' + data.filter(function (p) { return p.batch.slice(0, 8) === d; }).length + ' PLANS</span>' +
        '<span class="ax-ar" aria-hidden="true">+</span></button>' +
        '<div class="ax-panel"' + (isOpen ? '' : ' hidden') + '><div class="ax-tabs" role="tablist">' +
        bs.map(function (b) { return '<button type="button" role="tab" class="ax-tab' + (b === sel ? ' is-on' : '') + '" data-b="' + b + '">' + bTime(b) + '</button>'; }).join('') +
        '</div><div class="ax-snap">' + (isOpen ? '<ol class="ax-rank">' + ofBatch(sel).map(rankRow).join('') + '</ol>' : '') + '</div></div></li>';
    }
    function renderList() {
      list.innerHTML = dayKeys.slice(page * PER, page * PER + PER).map(function (d, j) { return dayRow(d, page * PER + j); }).join('');
      if (pages < 2) { pager.innerHTML = ''; return; }
      var h = '<button type="button" class="ax-pg" data-p="' + (page - 1) + '"' + (page ? '' : ' disabled') + '>← NEWER</button><span class="ax-pn">';
      for (var i = 0; i < pages; i++) h += '<button type="button" class="ax-pg' + (i === page ? ' is-on' : '') + '" data-p="' + i + '">' + (i + 1) + '</button>';
      h += '</span><button type="button" class="ax-pg" data-p="' + (page + 1) + '"' + (page < pages - 1 ? '' : ' disabled') + '>OLDER →</button>';
      pager.innerHTML = h;
    }
    var today = latest.slice(0, 8), shownMain = latest;
    function renderOpen() {
      // today's big grid follows the time picked on today's row (back to the latest when closed)
      var want = openDays[today] || latest;
      if (want !== shownMain) {
        var old = box.querySelector('.ax-sec.is-latest'), tmp = document.createElement('div');
        tmp.innerHTML = gridSec(want, 'is-latest');
        if (want !== latest) tmp.firstChild.querySelector('.label').innerHTML = tmp.firstChild.querySelector('.label').innerHTML.replace('LATEST — ', '');
        old.parentNode.replaceChild(tmp.firstChild, old); shownMain = want;
      }
      // other opened dates add their selected snapshot's 10 plans below, newest date first
      openBox.innerHTML = Object.keys(openDays).sort().reverse().filter(function (d) { return d !== today; })
        .map(function (d) { return gridSec(openDays[d], 'is-added'); }).join('');
    }
    renderList();
    var idx = arch.querySelector('.archive-index');
    arch.insertBefore(box, idx || arch.querySelector('.archive-grid') || null);

    box.addEventListener('click', function (e) {
      var o = e.target.closest('[data-i]');
      if (o) { var i = +o.dataset.i; if (i >= 0 && typeof window.__openPlan === 'function') window.__openPlan(i); return; }
      var pg = e.target.closest('.ax-pg');
      if (pg) { if (pg.disabled) return; page = Math.max(0, Math.min(pages - 1, +pg.dataset.p)); renderList(); list.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); return; }
      var t = e.target.closest('.ax-tab');
      if (t) {
        var dl = t.closest('.ax-day').dataset.d; openDays[dl] = t.dataset.b;
        var pn = t.closest('.ax-panel');
        pn.querySelectorAll('.ax-tab').forEach(function (x) { x.classList.toggle('is-on', x === t); });
        pn.querySelector('.ax-snap').innerHTML = '<ol class="ax-rank">' + ofBatch(t.dataset.b).map(rankRow).join('') + '</ol>';
        renderOpen(); return;
      }
      var h = e.target.closest('.ax-dh');
      if (h) {
        var li = h.parentNode, d = li.dataset.d, panel = li.querySelector('.ax-panel'), open = panel.hidden;
        if (open) { openDays[d] = days[d][0]; panel.querySelector('.ax-snap').innerHTML = '<ol class="ax-rank">' + ofBatch(days[d][0]).map(rankRow).join('') + '</ol>';
          panel.querySelectorAll('.ax-tab').forEach(function (x, j) { x.classList.toggle('is-on', !j); }); }
        else delete openDays[d];
        panel.hidden = !open; h.setAttribute('aria-expanded', open); li.classList.toggle('is-open', open);
        renderOpen();
      }
    });
    built = true;
  }
  function tick() {
    var arch = document.querySelector('.archive');
    if (!arch || !data) return;
    if (!arch.querySelector('.ax')) { built = false; build(arch); }
  }
  fetch('./assets/plans.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (j) { data = j; tick(); }).catch(function () {});
  new MutationObserver(function () { if (data && (!built || !document.querySelector('.archive .ax'))) tick(); }).observe(document.body, { childList: true, subtree: true });
})();

/* ───────── plan detail: DETAILS — how this plan came to be (01 → 02 → 03) ───────── */
(function () {
  var proc = null, loading = null, busy = false;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function load() {
    if (!loading) loading = fetch('./assets/process.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (j) { proc = j; return j; }).catch(function () { proc = {}; return proc; });
    return loading;
  }
  function keyFor(box) {
    var q = '', batch = '';
    box.querySelectorAll('.detail-meta > div').forEach(function (row) {
      var dt = row.querySelector('dt'), dd = row.querySelector('dd'); if (!dt || !dd) return;
      var l = dt.textContent.trim().toUpperCase();
      if (l === 'SEARCH') q = dd.textContent.trim(); if (l === 'BATCH') batch = dd.textContent.trim();
    });
    var h2 = box.querySelector('h2'), title = h2 ? h2.textContent.trim() : '';
    var a = window.__extraPlans || [], p = a.filter(function (x) { return x.query === q && x.title === title && x.meta.some(function (m) { return m.label === 'Batch' && m.value === batch; }); })[0];
    if (!p) return null;
    var same = a.filter(function (x) { return x.meta.some(function (m) { return m.label === 'Batch' && m.value === batch; }); });
    return { batch: batch, q: q, title: title, plan: p, same: same };
  }
  function li(arr, f) { return arr && arr.length ? '<ul>' + arr.map(function (x) { return '<li>' + f(x) + '</li>'; }).join('') + '</ul>' : ''; }
  function render(e) {
    if (!e) return '<p class="pd-none">이 도면의 과정 기록을 찾지 못했습니다.</p>';
    var h = '';
    var s1 = e.s1;
    h += '<section class="pd-step"><div class="pd-h"><span class="pd-n">01</span><span class="pd-t">사회 분석 — 실시간 검색어에서 욕망 찾기</span></div>';
    if (s1) {
      h += '<div class="pd-row"><b>검색어</b><span class="pd-big">“' + esc(s1.keyword) + '”</span></div>' +
        (s1.reason ? '<div class="pd-row"><b>검색 이유</b><span>' + esc(s1.reason) + '</span></div>' : '') +
        (s1.desire ? '<div class="pd-row"><b>사회적 욕망</b><span class="pd-acc">' + esc(s1.desire) + '</span></div>' : '') +
        (s1.note ? '<div class="pd-row"><b>해석</b><span class="pd-mut">' + esc(s1.note) + '</span></div>' : '') +
        (s1.sources && s1.sources.length ? '<div class="pd-row"><b>근거 기사</b><span>' + s1.sources.map(function (x) { return '<a href="' + esc(x[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(x[0] || '기사') + ' ↗</a>'; }).join(' · ') + '</span></div>' : '');
    } else h += '<p class="pd-none">기록 없음</p>';
    h += '</section><div class="pd-arrow">↓ 욕망을 극단으로 밀어붙인 세계</div>';
    var s2 = e.s2;
    h += '<section class="pd-step"><div class="pd-h"><span class="pd-n">02</span><span class="pd-t">세계관 — 욕망이 생활이 된 미래</span></div>';
    if (s2) {
      h += '<div class="pd-row"><b>세계</b><span class="pd-big">「' + esc(s2.title) + '」 <small>' + esc(s2.year) + '</small></span></div>' +
        (s2.core ? '<div class="pd-row"><b>핵심</b><span>' + esc(s2.core) + '</span></div>' : '') +
        (s2.resident ? '<div class="pd-row"><b>사는 사람</b><span>' + esc(s2.resident) + '</span></div>' : '') +
        (s2.scenario && s2.scenario.length ? '<div class="pd-row"><b>시나리오</b><span class="pd-mut">' + esc(s2.scenario[s2.scenario.length - 1]) + '</span></div>' : '') +
        (s2.living && s2.living.length ? '<div class="pd-row"><b>삶의 조건</b><span>' + li(s2.living, function (l) { return '<em>' + esc(l[0]) + '</em> ' + esc(l[2]); }) + '</span></div>' : '') +
        (s2.absurd && s2.absurd.length ? '<div class="pd-row"><b>부조리</b><span>' + li(s2.absurd, esc) + '</span></div>' : '') +
        (s2.good_home ? '<div class="pd-row"><b>좋은 집</b><span class="pd-acc">' + esc(s2.good_home) + '</span></div>' : '');
    } else h += '<p class="pd-none">이 묶음의 세계관 파일이 아직 드라이브에 없습니다.</p>';
    h += '</section><div class="pd-arrow">↓ 세계의 규칙을 공간의 규칙으로</div>';
    var s3 = e.s3;
    h += '<section class="pd-step"><div class="pd-h"><span class="pd-n">03</span><span class="pd-t">공간 설계 — 세계관을 공간 언어로 번역</span></div>';
    if (s3) {
      h += '<div class="pd-row"><b>집</b><span class="pd-big">' + esc(s3.title) + '</span></div>' +
        (s3.household ? '<div class="pd-row"><b>가구</b><span>' + esc(s3.household) + '</span></div>' : '') +
        (s3.concept ? '<div class="pd-row"><b>개념</b><span>' + esc(s3.concept) + '</span></div>' : '') +
        (s3.glance ? '<div class="pd-row"><b>한눈에</b><span>' + esc(s3.glance) + '</span></div>' : '') +
        (s3.why ? '<div class="pd-row"><b>규칙과 이유</b><span class="pd-mut">' + esc(s3.why) + '</span></div>' : '') +
        (s3.near && s3.near.length ? '<div class="pd-row"><b>붙어야 할 것</b><span>' + li(s3.near, function (x) { return '<em>' + esc(x[0]) + ' ↔ ' + esc(x[1]) + '</em>'; }) + '</span></div>' : '') +
        (s3.far && s3.far.length ? '<div class="pd-row"><b>떨어져야 할 것</b><span>' + li(s3.far, function (x) { return '<em>' + esc(x[0]) + ' ↔ ' + esc(x[1]) + '</em>'; }) + '</span></div>' : '') +
        (s3.lexicon && s3.lexicon.length ? '<div class="pd-row"><b>공간언어</b><span class="pd-lex">' + s3.lexicon.map(function (x) { return '<i title="' + esc(x[2]) + '">' + esc(x[0]) + ' <small>' + esc(x[1]) + '</small></i>'; }).join('') + '</span></div>' : '');
    } else h += '<p class="pd-none">기록 없음</p>';
    h += '</section><div class="pd-arrow">↓ 04 평면도 — 위의 도면</div>';
    return h;
  }
  function sync() {
    busy = false;
    var box = document.querySelector('.detail-text'); if (!box) return;
    var k = keyFor(box), meta = box.querySelector('.detail-meta'); if (!meta) return;
    var wrap = box.querySelector('.pd'), id = k ? k.plan.id : '';
    if (wrap && wrap.dataset.k === id) return;
    if (wrap) wrap.remove();
    if (!k) return;
    wrap = document.createElement('div'); wrap.className = 'pd'; wrap.dataset.k = id;
    wrap.innerHTML = '<button type="button" class="pd-btn" aria-expanded="false" data-cursor="OPEN"><span class="pd-ttl">DETAILS — 이 도면이 나온 과정</span><i>+</i><span class="pd-steps">01 사회 분석 → 02 세계관 → 03 공간 설계 → 04 도면</span></button><div class="pd-body" hidden></div>';
    meta.parentNode.insertBefore(wrap, meta.nextSibling);
    var btn = wrap.querySelector('.pd-btn'), body = wrap.querySelector('.pd-body');
    btn.addEventListener('click', function () {
      var open = body.hidden; body.hidden = !open; btn.setAttribute('aria-expanded', open); wrap.classList.toggle('is-open', open);
      if (open && !body.innerHTML) {
        body.innerHTML = '<p class="pd-none">불러오는 중…</p>';
        var n = k.plan.image ? null : null;
        load().then(function (pj) {
          // find "<batch>_<NNN>": match by driveId through plans.json order is not available here, so match keyword within batch
          var key = null;
          Object.keys(pj).forEach(function (kk) { if (!key && kk.indexOf(k.batch + '_') === 0 && pj[kk].s1 && pj[kk].s1.keyword === k.q && (!pj[kk].s3 || pj[kk].s3.title === k.title)) key = kk; });
          if (!key) Object.keys(pj).forEach(function (kk) { if (!key && kk.indexOf(k.batch + '_') === 0 && pj[kk].s1 && pj[kk].s1.keyword === k.q) key = kk; });
          body.innerHTML = render(key ? pj[key] : null);
        });
      }
    });
  }
  new MutationObserver(function () { if (!busy) { busy = true; requestAnimationFrame(sync); } }).observe(document.body, { childList: true, subtree: true });
})();

/* ───────── plan detail: one screen — 01 검색어 → 02 욕망 → (세계관) → 04 집, details behind toggles ───────── */
(function () {
  var busy = false;
  function txt(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }
  function sync() {
    busy = false;
    var box = document.querySelector('.detail-text'); if (!box) return;
    var q = '', world = '';
    box.querySelectorAll('.detail-meta > div').forEach(function (row) {
      var dt = row.querySelector('dt'), dd = row.querySelector('dd'); if (!dt || !dd) return;
      var l = dt.textContent.trim().toUpperCase();
      if (l === 'SEARCH') q = dd.textContent.trim(); if (l === 'WORLD') world = dd.textContent.trim();
    });
    var h2 = box.querySelector('h2'), title = h2 ? h2.textContent.trim() : '';
    var plan = (window.__extraPlans || []).filter(function (p) { return p.query === q && p.title === title; })[0];
    var made = box.querySelectorAll('.sq-search,.dt-desire,.dt-world,.dt-planlab');
    if (!plan) { box.classList.remove('is-seq', 'world-open'); made.forEach(function (e) { e.remove(); }); return; }
    var first = box.querySelector('.sq-search');
    if (first && first.dataset.k === plan.id) { box.classList.add('is-seq'); return; }
    made.forEach(function (e) { e.remove(); }); box.classList.remove('world-open');
    var n = plan.news || {}, src = n.sources || [];
    var s = document.createElement('div'); s.className = 'sq-search sq-blk'; s.dataset.k = plan.id;
    s.innerHTML = '<div class="sq-box"><span class="sq-step"><b>01</b>검색어 · SEARCH</span><p class="sq-h">' + txt(q) + '</p></div>' +
      (n.reason ? '<p class="sq-sub">' + txt(n.reason) + '</p>' : '') +
      ((n.note || src.length) ? '<button type="button" class="sq-more" data-cursor="OPEN">왜 검색됐나 · 기사 ' + src.length + '<i>+</i></button><div class="sq-panel" hidden>' +
        (n.note ? '<p class="sq-note">' + txt(n.note) + '</p>' : '') +
        (src.length ? '<ul class="sq-links">' + src.map(function (x) { return '<li><a href="' + txt(x.url) + '" target="_blank" rel="noopener noreferrer"><span>' + txt(x.press || '기사') + '</span>' + txt(x.title || '기사 원문 읽기') + ' ↗</a></li>'; }).join('') + '</ul>' : '') + '</div>' : '');
    var d = document.createElement('div'); d.className = 'dt-desire sq-blk';
    d.innerHTML = '<div class="sq-box"><span class="sq-step"><b>02</b>욕망 · DESIRE</span><p class="sq-h">' + txt(plan.desire || n.desire || '') + '</p></div><p class="sq-sub">검색어 뒤에서 읽어낸 사회적 욕망</p>';
    var w = document.createElement('div'); w.className = 'dt-world';
    w.innerHTML = '<span class="sq-step"><b>03</b>세계관 · WORLD</span><button type="button" class="sq-more sq-wbtn" data-cursor="OPEN">「' + txt(world) + '」 이 세계에서는<i>+</i></button>';
    var pl = document.createElement('div'); pl.className = 'dt-planlab sq-blk';
    pl.innerHTML = '<div class="sq-box"><span class="sq-step"><b>04</b>집 · PLAN</span><p class="sq-h">' + txt(title) + '</p></div>';
    [s, d, w, pl].forEach(function (e) { box.appendChild(e); });
    s.addEventListener('click', function (e) {
      var b = e.target.closest('.sq-more'); if (!b) return;
      var p = s.querySelector('.sq-panel'); p.hidden = !p.hidden; b.classList.toggle('is-on', !p.hidden);
    });
    w.querySelector('.sq-wbtn').addEventListener('click', function () {
      var on = !box.classList.contains('world-open'); box.classList.toggle('world-open', on); this.classList.toggle('is-on', on);
    });
    box.classList.add('is-seq');
  }
  new MutationObserver(function () { if (!busy) { busy = true; requestAnimationFrame(sync); } }).observe(document.body, { childList: true, subtree: true });
})();

/* ───────── real-time sheet: keywords decode, in sequence as the page scrolls, into the desire read from them ───────── */
(function () {
  var sec = document.getElementById('essay'); if (!sec) return;
  var field = sec.querySelector('.tr-field'), sticky = sec.querySelector('.statement-sticky');
  if (!field || !sticky) return;
  var R = 170, mx = -1e4, my = -1e4, raf = 0, GLYPH = '가나다라마바사아자차카타파하욕망검색집빛벽틈문길곁';
  function desireOf(el) { var p = (window.__extraPlans || [])[+el.dataset.plan]; return p && (p.desire || (p.news && p.news.desire)) || ''; }
  function animate(kw, from, to, done) {
    var t0 = performance.now(), dur = 380 + to.length * 12, id = ++kw.__anim;
    (function step(now) {
      if (kw.__anim !== id) return;
      var k = Math.min(1, (now - t0) / dur), n = Math.round(to.length * k), out = to.slice(0, n);
      var rest = Math.max(0, Math.round((from.length + (to.length - from.length) * k)) - n);
      for (var i = 0; i < Math.min(rest, 6); i++) out += GLYPH[(Math.random() * GLYPH.length) | 0];
      kw.textContent = out;
      if (k < 1) requestAnimationFrame(step); else { kw.textContent = to; done && done(); }
    })(t0);
  }
  function setState(el, on) {
    var kw = el.querySelector('.kw'); if (!kw || el.classList.contains('is-typing')) return;
    if (kw.__anim == null) kw.__anim = 0;
    if (on === el.classList.contains('is-desire')) return;
    if (on) {
      var d = desireOf(el); if (!d) return;
      if (!el.dataset.kw0) el.dataset.kw0 = kw.textContent;
      el.classList.add('is-desire'); animate(kw, kw.textContent, d);
    } else {
      el.classList.remove('is-desire'); animate(kw, kw.textContent, el.dataset.kw0 || kw.textContent);
    }
  }
  // scroll-driven: each keyword turns into its desire a little before it leaves the sheet
  function lead(el) { if (!el.dataset.lead) el.dataset.lead = (0.14 + Math.random() * 0.14).toFixed(3); return +el.dataset.lead; }
  function tick() {
    raf = 0;
    if (document.documentElement.classList.contains('is-locked')) return;
    var r = sec.getBoundingClientRect(), vh = window.innerHeight;
    if (r.bottom < 0 || r.top > vh) return;
    var v = (-r.top - vh) / (vh * 3);
    field.querySelectorAll(':scope > .tr-e[data-plan]').forEach(function (el) {
      var at = parseFloat(el.dataset.at); if (isNaN(at)) return;
      // scroll no longer turns keywords into their desire sentence — they stay as search keywords
      if (el.classList.contains('is-desire')) setState(el, false);
    });
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  window.addEventListener('scroll', kick, { passive: true });
  setInterval(kick, 700);   // catches keywords that finish typing while the page is still
})();


/* ───────── real-time sheet: pick up a keyword chip, move it, drop it into the search bar ───────── */
(function () {
  var sec = document.getElementById('essay'); if (!sec) return;
  var field = sec.querySelector('.tr-field'), bar = sec.querySelector('.tr-search');
  if (!field || !bar) return;
  var out = bar.querySelector('.ts-q'), ic = bar.querySelector('.ts-ic');
  var drag = null, justDragged = false, holdT = 0, heldPlan = -1, typeT = 0, shownPlan = -1;
  // hint under the bar, and a cursor tag that says the chips can be picked up
  var hint = sec.querySelector('.tr-hud .hd-c'), coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
  if (hint && !coarse) { hint.textContent = 'DRAG A QUERY HERE'; hint.classList.add('hd-hint'); }
  field.addEventListener('pointerover', function (e) { var el = e.target.closest && e.target.closest('.tr-e[data-plan]'); if (el && !coarse) el.dataset.cursor = 'DRAG ✥'; });
  function kwOf(el) { var k = el.querySelector('.kw'); return (el.dataset.kw0 || (k && k.textContent) || '').trim(); }
  function overBar(x, y) { var r = bar.getBoundingClientRect(), m = 24; return x > r.left - m && x < r.right + m && y > r.top - m && y < r.bottom + m; }

  field.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'touch' || e.button !== 0) return;
    var el = e.target.closest && e.target.closest('.tr-e[data-plan]');
    if (!el || el.classList.contains('is-gone') || document.documentElement.classList.contains('is-locked')) return;
    drag = { el: el, x0: e.clientX, y0: e.clientY, l0: parseFloat(el.style.left) || 0, t0: parseFloat(el.style.top) || 0, on: false, id: e.pointerId };
  });
  window.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
    if (!drag.on) {
      if (Math.hypot(dx, dy) < 6) return;
      drag.on = true; drag.el.classList.add('is-drag'); document.documentElement.classList.add('tr-dragging');
    }
    drag.el.style.left = (drag.l0 + dx) + 'px'; drag.el.style.top = (drag.t0 + dy) + 'px';
    bar.classList.toggle('is-target', overBar(e.clientX, e.clientY));
    e.preventDefault();
  });
  function end(e) {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    var d = drag; drag = null;
    if (!d.on) return;
    justDragged = true; setTimeout(function () { justDragged = false; }, 0);
    document.documentElement.classList.remove('tr-dragging');
    bar.classList.remove('is-target');
    if (e && overBar(e.clientX, e.clientY)) drop(d); else d.el.classList.remove('is-drag');
  }
  window.addEventListener('pointerup', end); window.addEventListener('pointercancel', end);
  field.addEventListener('click', function (e) { if (justDragged) { e.stopPropagation(); e.preventDefault(); } }, true);

  // dropped on the bar: the chip is swallowed, the query is typed in, and the chip slips back to where it came from
  function drop(d) {
    var el = d.el, br = bar.getBoundingClientRect(), er = el.getBoundingClientRect();
    var tx = br.left + 24 - er.left, ty = br.top + br.height / 2 - (er.top + er.height / 2);
    field.classList.add('has-sink'); el.classList.add('is-sink'); el.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(.55)';
    setTimeout(function () {
      el.classList.remove('is-sink', 'is-drag'); el.style.transform = ''; field.classList.remove('has-sink');
      el.style.left = d.l0 + 'px'; el.style.top = d.t0 + 'px';
      el.classList.add('is-back'); setTimeout(function () { el.classList.remove('is-back'); }, 600);
    }, 380);
    put(kwOf(el), +el.dataset.plan);
    if (hint) hint.classList.add('is-done');
  }
  function put(q, plan) {
    clearTimeout(holdT); clearTimeout(typeT);
    if (shownPlan >= 0 && window.__tlClear) window.__tlClear(); shownPlan = -1;
    heldPlan = plan; bar.classList.remove('is-desire'); bar.classList.add('is-held', 'is-typing');
    var st = (window.__tsSteps || function (w) { return [w]; })(q), i = 0;
    out.textContent = '';
    (function type() {
      out.textContent = st[i++];
      if (i < st.length) { typeT = setTimeout(type, 45 + Math.random() * 70); return; }
      bar.classList.remove('is-typing'); bar.classList.add('is-filled');
      typeT = setTimeout(function () { toDesire(q, plan); }, 1500);
      holdT = setTimeout(release, 11000);
    })();
  }
  // a beat later the query decodes into the desire read from it
  var GLYPH = '가나다라마바사아자차카타파하욕망검색집빛벽틈문길곁';
  function toDesire(q, plan) {
    var p = (window.__extraPlans || [])[plan], d = p && (p.desire || (p.news && p.news.desire)) || '';
    if (!d || heldPlan !== plan) return;
    bar.classList.add('is-desire');
    var t0 = performance.now(), dur = 520 + d.length * 18;
    (function step(now) {
      if (heldPlan !== plan) return;
      var k = Math.min(1, (now - t0) / dur), n = Math.round(d.length * k), o = d.slice(0, n);
      var rest = Math.max(0, Math.round(q.length + (d.length - q.length) * k) - n);
      for (var i = 0; i < Math.min(rest, 6); i++) o += GLYPH[(Math.random() * GLYPH.length) | 0];
      out.textContent = o;
      if (k < 1) requestAnimationFrame(step); else out.textContent = d;
    })(t0);
  }
  function release() {
    clearTimeout(holdT); clearTimeout(typeT); heldPlan = -1;
    if (shownPlan >= 0 && window.__tlClear) window.__tlClear(); shownPlan = -1;
    bar.classList.remove('is-filled', 'is-desire'); out.textContent = '';
    bar.classList.remove('is-held');
  }
  window.__tsRelease = function () { release(); };
  function go() {
    if (heldPlan < 0 || !bar.classList.contains('is-filled')) return;
    // first search: the plan surfaces behind the chips as a white halftone (diagram fades back); search again to open it
    if (window.__tlShowPlan && shownPlan !== heldPlan) {
      shownPlan = heldPlan; window.__tlShowPlan(heldPlan);
      clearTimeout(holdT); holdT = setTimeout(release, 25000); return;
    }
    var i = heldPlan; release();
    if (typeof window.__openPlan === 'function') { document.documentElement.dataset.from = 'trend'; window.__openPlan(i); }
  }
  if (ic) ic.addEventListener('click', go);
  // while a plan is shown as halftone, one click on the empty background puts it away
  // (the search screen lets clicks fall through to the page behind it, so listen on the whole document)
  document.addEventListener('click', function (e) {
    if (shownPlan < 0 || justDragged || document.documentElement.classList.contains('is-locked')) return;
    if (e.target.closest && e.target.closest('.tr-search, .tr-e, a, button')) return;
    release();
  });
  bar.addEventListener('click', function (e) { if (!ic || !ic.contains(e.target)) go(); });
  window.addEventListener('keydown', function (e) { if (e.key === 'Enter' && bar.classList.contains('is-filled')) go(); else if (e.key === 'Escape' && bar.classList.contains('is-held')) release(); });
})();

/* ───────── real-time sheet: chips drift slowly, and part around the cursor ───────── */
(function () {
  var sec = document.getElementById('essay'); if (!sec) return;
  var field = sec.querySelector('.tr-field'); if (!field) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mx = -1e4, my = -1e4, R = 120, PUSH = 30, st = new WeakMap();
  window.addEventListener('pointermove', function (e) { if (e.pointerType !== 'touch') { mx = e.clientX; my = e.clientY; } }, { passive: true });
  document.addEventListener('pointerleave', function () { mx = my = -1e4; });
  function S(el) {
    var s = st.get(el);
    if (!s) { s = { ph: Math.random() * 6.28, sp: 0.55 + Math.random() * 0.5, ax: 4 + Math.random() * 5, ay: 5 + Math.random() * 6, x: 0, y: 0, w: el.offsetWidth, h: el.offsetHeight }; st.set(el, s); }
    return s;
  }
  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden || document.documentElement.classList.contains('is-locked')) return;
    var fr = field.getBoundingClientRect();
    if (fr.bottom < 0 || fr.top > window.innerHeight || !sec.classList.contains('is-in')) return;
    var t = now / 1000, els = field.children;
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.classList.contains('tr-e') || el.classList.contains('is-drag') || el.classList.contains('is-sink')) continue;
      var s = S(el), tx = 0, ty = 0;
      // idle floating removed — chips stay put (cursor push-away below still works)
      if (el.dataset.plan != null) {
        // distance from the cursor to the chip's edge (where it is drawn now)
        var l = fr.left + (parseFloat(el.style.left) || 0) + s.x, tp = fr.top + (parseFloat(el.style.top) || 0) + s.y;
        var ex = Math.max(l - mx, 0, mx - (l + s.w)), ey = Math.max(tp - my, 0, my - (tp + s.h)), ed = Math.hypot(ex, ey);
        if (ed === 0) continue;               // cursor on the chip: it holds still so it can be grabbed
        if (ed < R) {
          var dx = l + s.w / 2 - mx, dy = tp + s.h / 2 - my, d = Math.hypot(dx, dy) || 1, k = 1 - ed / R;
          k = k * k * PUSH; tx += dx / d * k; ty += dy / d * k;
        }
      }
      var nx = s.x + (tx - s.x) * 0.1, ny = s.y + (ty - s.y) * 0.1;
      if (Math.abs(nx) < 0.05 && Math.abs(ny) < 0.05) { nx = 0; ny = 0; }
      if (Math.abs(nx - s.x) < 0.05 && Math.abs(ny - s.y) < 0.05 && s.done) continue; // nothing moved: skip the style write
      s.done = Math.abs(nx - s.x) < 0.05 && Math.abs(ny - s.y) < 0.05;
      s.x = nx; s.y = ny;
      el.style.transform = (nx || ny) ? 'translate3d(' + nx.toFixed(1) + 'px,' + ny.toFixed(1) + 'px,0)' : '';
    }
  }
  // widths change when a chip turns into its desire — re-measure then
  new MutationObserver(function (ms) { ms.forEach(function (m) { var el = m.target.closest && m.target.closest('.tr-e'); var s = el && st.get(el); if (s) { s.w = el.offsetWidth; s.h = el.offsetHeight; } }); })
    .observe(field, { attributes: true, attributeFilter: ['class'], subtree: true });
  requestAnimationFrame(frame);
})();
