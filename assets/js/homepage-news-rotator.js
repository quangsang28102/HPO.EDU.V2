/* ==========================================================================
   Trang chủ — "Báo chí nói về Hiệp Phát": 1 bài lớn (giữa) + 3 bài nhỏ (phải).
   - Đọc assets/data/bao-chi.json; chỉ lấy bài có "anh"; bài mới nhất hiện trước.
   - Mỗi 6,5 s: bài nhỏ đầu danh sách phóng lên khung lớn, bài lớn cũ rời đi,
     1 bài mới vào cuối danh sách. Dùng View Transitions nếu trình duyệt có.
   - Bấm 1 bài nhỏ: đưa bài đó lên khung lớn. Bấm ảnh/tiêu đề/"Đọc bài" ở khung lớn: mở bài gốc (tab mới).
   - Dừng khi: rê chuột / bấm Tab vào khu này, bấm nút Tạm dừng, khu này ra khỏi
     màn hình, máy bật "giảm chuyển động" (khi đó không tự chạy).
   - Nút "Xem tất cả" mở bảng #pressListDialog có sẵn (bấm hộ nhãn [data-press-open]).
   ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('[data-news-rotator]');
  if (!root) return;

  var script = document.currentScript;
  var base = script ? script.src : location.href;
  var DATA_URL = new URL('../data/bao-chi.json', base).href;
  var SITE_ROOT = new URL('../../', base).href; // "anh" trong JSON tính từ gốc web
  var SMALL = 3; // số bài nhỏ ở cột phải

  var feature = root.querySelector('[data-news-feature]');
  var list = root.querySelector('[data-news-list]');
  var btnPrev = root.querySelector('[data-news-prev]');
  var btnNext = root.querySelector('[data-news-next]');
  var btnPause = root.querySelector('[data-news-pause]');
  var btnAll = root.querySelector('[data-news-all]');
  var allCount = root.querySelector('[data-news-all-count]');
  var track = root.querySelector('[data-news-track]');
  var bar = root.querySelector('[data-news-progress]');
  var live = root.querySelector('[data-news-live]');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hasVT = typeof document.startViewTransition === 'function';

  var KENH = { 'bao-dien-tu': 'Báo điện tử', 'truyen-hinh': 'Truyền hình', 'phat-thanh': 'Phát thanh', 'mang-xa-hoi': 'Mạng xã hội' };
  var VERB = { 'bao-dien-tu': 'Đọc bài', 'truyen-hinh': 'Xem video', 'phat-thanh': 'Nghe bài', 'mang-xa-hoi': 'Xem bài đăng' };
  var ICONS = {
    'bao-dien-tu': '<path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2"/><path d="M7.5 9h6M7.5 12.5h6M7.5 16h4"/>',
    'truyen-hinh': '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.2-2.5z"/>',
    'phat-thanh': '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
    'mang-xa-hoi': '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4"/>'
  };
  var GO = '<path d="M7 17 17 7M9 7h8v8"/>';

  var items = [];
  var cards = [];
  var index = 0; // bài đang ở khung lớn
  var inView = false, hovering = false, focused = false;
  var userPaused = reduceMotion.matches;

  function svg(paths) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + paths + '</svg>'; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parseDate(s) { var d = s ? new Date(s) : null; return d && !isNaN(d) ? d : null; }
  function dateText(d) { return d ? pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() : ''; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function outLink(href, cls) {
    var a = el('a', cls);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  }

  fetch(DATA_URL, { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (data) {
      if (data.kenh) Object.keys(data.kenh).forEach(function (k) { KENH[k] = data.kenh[k]; });
      var all = (data.bai || []).filter(function (b) { return b && b.bao && b.link; });
      var newest = all.map(function (b) { return parseDate(b.ngay); }).filter(Boolean)
        .sort(function (a, b) { return b - a; }).slice(0, 3).map(Number);
      items = all.filter(function (b) { return b.anh; }).map(function (b) {
        var d = parseDate(b.ngay);
        return { bao: b.bao, kenh: b.kenh, tieuDe: b.tieuDe || '', moTa: b.moTa || '', link: b.link, anh: b.anh,
          date: d, isNew: !!d && newest.indexOf(+d) > -1 };
      }).sort(function (a, b) { return (b.date || 0) - (a.date || 0); });
      if (items.length < SMALL + 1) { root.hidden = true; return; }
      if (allCount) allCount.textContent = all.length;
      whenNear(build);
    })
    .catch(function (err) {
      root.hidden = true;
      if (window.console) console.warn('[news-rotator] Không tải được bao-chi.json:', err);
    });

  // Chỉ dựng thẻ (tải ảnh) khi khu này sắp vào màn hình
  function whenNear(fn) {
    if (!('IntersectionObserver' in window)) { fn(); return; }
    var io = new IntersectionObserver(function (es) {
      if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); fn(); }
    }, { rootMargin: '600px 0px' });
    io.observe(root);
  }

  function buildCard(it, i) {
    var card = el('article', 'hpo-news-card');
    card.style.viewTransitionName = 'hpo-news-card-' + i;
    var verb = VERB[it.kenh] || 'Xem bài';
    var kenh = KENH[it.kenh] || 'Báo chí';

    var media = outLink(it.link, 'hpo-news-card__media');
    media.setAttribute('aria-hidden', 'true');
    var img = el('img');
    img.src = new URL(it.anh, SITE_ROOT).href;
    img.alt = '';
    img.decoding = 'async';
    img.loading = i < SMALL + 2 ? 'eager' : 'lazy';
    img.width = 960;
    img.height = 540;
    media.appendChild(img);
    var chip = el('span', 'hpo-news-card__chip');
    chip.innerHTML = svg(ICONS[it.kenh] || ICONS['bao-dien-tu']);
    chip.appendChild(document.createTextNode(kenh));
    media.appendChild(chip);
    media.appendChild(el('span', 'hpo-news-card__flag' + (it.isNew ? ' is-on' : ''), 'Mới'));

    var body = el('div', 'hpo-news-card__body');
    var h = el('h3', 'hpo-news-card__title');
    var titleLink = outLink(it.link);
    titleLink.textContent = it.tieuDe;
    h.appendChild(titleLink);
    body.appendChild(h);
    // Mô tả: dùng "moTa" trong JSON nếu có; nếu không thì ghi tên báo · kênh · ngày
    var line = [it.bao, kenh, dateText(it.date)].filter(Boolean).join(' · ');
    var desc = el('p', 'hpo-news-card__desc', it.moTa || line);
    body.appendChild(desc);
    body.appendChild(el('span', 'hpo-news-card__src', [it.bao, dateText(it.date)].filter(Boolean).join(' · ')));
    var foot = el('div', 'hpo-news-card__foot');
    if (it.moTa) foot.appendChild(el('span', 'hpo-news-card__meta', line));
    var go = outLink(it.link, 'hpo-news-card__go');
    go.textContent = verb;
    go.insertAdjacentHTML('beforeend', svg(GO));
    go.setAttribute('aria-label', verb + ': ' + it.tieuDe + ' (' + it.bao + ', mở tab mới)');
    foot.appendChild(go);
    body.appendChild(foot);

    var pick = el('button', 'hpo-news-card__pick');
    pick.type = 'button';
    pick.setAttribute('aria-label', 'Xem lớn: ' + it.bao + ', ' + it.tieuDe);
    pick.addEventListener('click', function () { show(i, true); });

    card.appendChild(media);
    card.appendChild(body);
    card.appendChild(pick);
    return card;
  }

  function at(n) { return ((n % items.length) + items.length) % items.length; }
  function shown() {
    var out = [];
    for (var k = 0; k <= SMALL; k++) out.push(at(index + k));
    return out;
  }

  function render(entering) {
    var ids = shown();
    ids.forEach(function (id, k) {
      var c = cards[id];
      var big = k === 0;
      c.setAttribute('data-slot', big ? 'big' : 's');
      c.classList.toggle('is-enter', !!entering && entering.indexOf(id) > -1);
      // Bài nhỏ: cả thẻ là 1 nút "xem lớn"; link bên trong tạm ẩn khỏi phím Tab
      Array.prototype.forEach.call(c.querySelectorAll('a'), function (a) {
        if (big && !a.classList.contains('hpo-news-card__media')) a.removeAttribute('tabindex');
        else a.setAttribute('tabindex', '-1');
      });
      c.querySelector('.hpo-news-card__pick').hidden = big;
    });
    feature.replaceChildren(cards[ids[0]]);
    list.replaceChildren.apply(list, ids.slice(1).map(function (id) { return cards[id]; }));
    if (track) cards[ids[0]].querySelector('.hpo-news-card__media').appendChild(track);
    var pre = cards[at(index + SMALL + 1)];
    if (pre) pre.querySelector('img').loading = 'eager';

    var it = items[at(index)];
    if (live) live.textContent = 'Bài ' + (at(index) + 1) + ' trên ' + items.length + ': ' + it.bao + ', ' + it.tieuDe;
  }

  function show(target, byUser) {
    target = at(target);
    if (target === index) return;
    var before = shown();
    var update = function () {
      index = target;
      render(shown().filter(function (n) { return before.indexOf(n) < 0; }));
    };
    if (hasVT && !reduceMotion.matches && inView && !document.hidden) {
      var html = document.documentElement;
      html.classList.add('news-vt');
      document.startViewTransition(update).finished.finally(function () { html.classList.remove('news-vt'); });
    } else {
      update();
    }
    if (live) live.setAttribute('aria-live', byUser ? 'polite' : 'off');
    restartBar();
  }

  // ---- Đồng hồ: thanh thời gian CSS chạy hết → sang bài kế ----
  function restartBar() {
    if (!bar) return;
    bar.classList.remove('is-running');
    void bar.offsetWidth;
    if (!userPaused) bar.classList.add('is-running');
  }
  function syncPaused() {
    root.classList.toggle('is-paused', userPaused || hovering || focused || !inView || document.hidden);
    root.classList.toggle('is-user-paused', userPaused);
    if (btnPause) {
      btnPause.setAttribute('aria-label', userPaused ? 'Tự chuyển bài' : 'Tạm dừng tự chuyển bài');
      btnPause.setAttribute('aria-pressed', userPaused ? 'true' : 'false');
    }
  }

  function build() {
    cards = items.map(buildCard);
    if (!hasVT) root.classList.add('no-vt');
    render(null);
    root.classList.add('is-ready');

    btnPrev && btnPrev.addEventListener('click', function () { show(index - 1, true); });
    btnNext && btnNext.addEventListener('click', function () { show(index + 1, true); });
    btnPause && btnPause.addEventListener('click', function () {
      userPaused = !userPaused;
      syncPaused();
      if (userPaused) bar && bar.classList.remove('is-running'); else restartBar();
    });
    btnAll && btnAll.addEventListener('click', function () {
      var opener = document.querySelector('[data-press-open]');
      if (opener) opener.click();
    });
    bar && bar.addEventListener('animationend', function () { show(index + 1, false); });

    var area = root.querySelector('.news-rot__inner');
    area.addEventListener('mouseenter', function () { hovering = true; syncPaused(); });
    area.addEventListener('mouseleave', function () { hovering = false; syncPaused(); });
    root.addEventListener('focusin', function () { focused = true; syncPaused(); });
    root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { focused = false; syncPaused(); } });
    document.addEventListener('visibilitychange', syncPaused);

    // Vuốt trái/phải trên khung lớn (điện thoại)
    var x0 = null;
    feature.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    feature.addEventListener('touchend', function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1), true);
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        inView = es[es.length - 1].isIntersecting;
        syncPaused();
      }, { threshold: 0.35 }).observe(feature);
    } else {
      inView = true;
    }

    syncPaused();
    restartBar();
  }
})();
