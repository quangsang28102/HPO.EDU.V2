/* ==========================================================================
   Trang chủ — "Báo chí đưa tin" (dải chạy ngang + bảng "Xem tất cả" có bộ lọc).
   NGUỒN DỮ LIỆU DUY NHẤT: assets/data/bao-chi.json (2026-11-05). Thêm/bớt/sửa bài chỉ sửa file đó:
   - Dải chạy: JS đổ thẻ vào 2 nhóm .strip-group[data-press-strip-group] (nhóm 2 aria-hidden + tabindex=-1
     để chạy vòng liền mạch), theo đúng thứ tự trong "bai".
   - Bảng: tìm kiếm (không cần gõ dấu) · lọc theo kênh · chọn tên báo · sắp xếp Mới nhất/Cũ nhất/A→Z/Z→A.
     Xếp theo ngày → chia nhóm theo ngày đăng; xếp theo tên → chia nhóm theo chữ cái đầu.
     3 bài có "ngay" mới nhất gắn nhãn "Mới". Nút kênh, danh sách tên báo, số đếm đều tự sinh từ dữ liệu.
   Dùng <dialog> gốc của trình duyệt: Esc để đóng, khóa Tab trong bảng, đóng xong trả focus về nút.
   Không tải được JSON → ẩn cả dải (không để dải trống).
   ========================================================================== */
(function () {
  'use strict';

  var dialog = document.getElementById('pressListDialog');
  var opener = document.querySelector('[data-press-open]');
  var strip = document.querySelector('.strip--press');
  if (!dialog || !opener || !strip || typeof dialog.showModal !== 'function') return;

  // Đường dẫn JSON tính theo vị trí file JS này → đúng ở mọi trang/thư mục
  var script = document.currentScript;
  var DATA_URL = new URL('../data/bao-chi.json', script ? script.src : location.href).href;
  var NEW_COUNT = 3; // số bài mới nhất được gắn nhãn "Mới"
  var CLOSE_MS = 180;

  var list = dialog.querySelector('[data-press-list]');
  var closeBtn = dialog.querySelector('[data-press-close]');
  var groups = strip.querySelectorAll('[data-press-strip-group]');

  // ---- Biểu tượng theo kênh (nét SVG cùng kiểu dải cũ) ----
  var ICONS = {
    'bao-dien-tu': '<path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2"/><path d="M7.5 9h6M7.5 12.5h6M7.5 16h4"/>',
    'truyen-hinh': '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.2-2.5z"/>',
    'phat-thanh': '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
    'mang-xa-hoi': '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4"/>'
  };
  var GO = '<path d="M7 17 17 7M9 7h8v8"/>';
  var CLOCK = '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>';
  var SEARCH = '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>';
  var X = '<path d="M6 6l12 12M18 6 6 18"/>';
  function svg(paths, cls) { return '<svg viewBox="0 0 24 24" aria-hidden="true"' + (cls ? ' class="' + cls + '"' : '') + '>' + paths + '</svg>'; }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  // "2026-10-28T16:34" (không múi giờ) → giờ địa phương, hiển thị đúng giờ VN đã ghi
  function parseDate(s) {
    if (!s) return null;
    var d = new Date(String(s).length === 10 ? s + 'T00:00' : s);
    return isNaN(d) ? null : d;
  }
  function dayKey(d) { return d ? d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) : 'none'; }
  function dayLabel(d) {
    if (!d) return 'Chưa rõ ngày đăng';
    var w = d.toLocaleDateString('vi-VN', { weekday: 'long' });
    return w.charAt(0).toUpperCase() + w.slice(1) + ', ' + pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
  }
  function timeLabel(d) { return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ' · ' + pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear(); }
  // Bỏ dấu để tìm "tuoi tre" ra "Tuổi Trẻ"
  function fold(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase(); }
  var byName = function (a, b) { return a.bao.localeCompare(b.bao, 'vi'); };

  var items = [];
  var KENH = {};

  fetch(DATA_URL, { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (data) {
      KENH = data.kenh || {};
      items = (data.bai || []).filter(function (b) { return b && b.bao && b.link; }).map(function (b, i) {
        return { order: i, bao: String(b.bao), kenh: KENH[b.kenh] ? b.kenh : 'bao-dien-tu', tieuDe: String(b.tieuDe || ''), link: String(b.link), date: parseDate(b.ngay) };
      });
      if (!items.length) throw new Error('Không có bài');
      items.filter(function (it) { return it.date; }).sort(function (a, b) { return b.date - a.date; })
        .slice(0, NEW_COUNT).forEach(function (it) { it.isNew = true; });
      items.forEach(function (it) { it.nguon = it.bao.split(' - ')[0].trim(); });
      items.forEach(function (it) { it.search = fold(it.bao + ' ' + it.tieuDe + ' ' + (KENH[it.kenh] || '')); });
      renderStrip();
      buildDialog();
    })
    .catch(function (err) {
      console.warn('Không tải được danh sách báo chí', err);
      strip.hidden = true;
    });

  // ---- Dải chạy ngang ----
  function stripChip(it, hidden) {
    var a = el('a', 'strip-chip strip-chip--press');
    a.href = it.link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = it.bao + ': ' + it.tieuDe;
    if (hidden) a.tabIndex = -1;
    else a.setAttribute('aria-label', it.bao + ': ' + it.tieuDe + ' (' + (KENH[it.kenh] || '').toLowerCase() + ', mở trong tab mới)');
    a.innerHTML = '<span class="strip-chip__icon" aria-hidden="true">' + svg(ICONS[it.kenh] || ICONS['bao-dien-tu']) + '</span>';
    a.appendChild(el('b', null, it.bao));
    a.appendChild(el('span', 'strip-chip__desc', it.tieuDe));
    a.insertAdjacentHTML('beforeend', svg(GO, 'strip-chip__go'));
    return a;
  }
  function renderStrip() {
    Array.prototype.forEach.call(groups, function (g, gi) {
      g.textContent = '';
      items.forEach(function (it) { g.appendChild(stripChip(it, gi > 0)); });
    });
  }

  // ---- Bảng + bộ lọc ----
  var state = { kenh: 'all', bao: '', q: '', sort: 'new' };
  var ui = {};

  function buildCard(it) {
    var a = el('a', 'press-item');
    a.href = it.link;
    a.target = '_blank';
    a.rel = 'noopener';
    var kenhName = KENH[it.kenh] || '';
    a.setAttribute('aria-label', it.bao + ': ' + it.tieuDe + ' (' + kenhName.toLowerCase() +
      (it.date ? ', đăng ' + timeLabel(it.date).replace(' · ', ' ngày ') : '') + (it.isNew ? ', mới' : '') + ', mở trong tab mới)');
    a.innerHTML = '<span class="press-item__icon" aria-hidden="true">' + svg(ICONS[it.kenh] || ICONS['bao-dien-tu']) + '</span>';
    var body = el('span', 'press-item__body');
    var meta = el('span', 'press-item__meta');
    meta.appendChild(el('b', 'press-item__outlet', it.bao));
    meta.appendChild(el('span', 'press-item__type press-item__type--' + it.kenh, kenhName));
    if (it.isNew) meta.appendChild(el('span', 'press-item__new', 'Mới'));
    body.appendChild(meta);
    body.appendChild(el('span', 'press-item__title', it.tieuDe));
    if (it.date) {
      var when = el('span', 'press-item__date');
      when.innerHTML = svg(CLOCK);
      when.appendChild(document.createTextNode(timeLabel(it.date)));
      body.appendChild(when);
    }
    a.appendChild(body);
    a.insertAdjacentHTML('beforeend', svg(GO, 'press-item__go'));
    return a;
  }

  function option(value, text) { var o = el('option', null, text); o.value = value; return o; }

  function buildDialog() {
    items.forEach(function (it) { it.card = buildCard(it); });

    var tools = el('div', 'press-dialog__tools');
    var row = el('div', 'press-tools__row');

    // Ô tìm kiếm
    var search = el('label', 'press-search');
    search.innerHTML = svg(SEARCH, 'press-search__icon') + '<span class="press-sr">Tìm bài theo tên báo hoặc tiêu đề</span>';
    ui.q = el('input', 'press-search__input');
    ui.q.type = 'search';
    ui.q.placeholder = 'Tìm tên báo hoặc tiêu đề';
    ui.q.autocomplete = 'off';
    search.appendChild(ui.q);

    // Tên báo: tự sinh A→Z kèm số bài. "CafeTek - HTV", "CafeTek - TikTok" gộp vào "CafeTek" (phần trước " - ")
    var srcWrap = el('label', 'press-select');
    srcWrap.appendChild(el('span', 'press-select__label', 'Tên báo'));
    ui.bao = el('select', 'press-select__input');
    ui.bao.appendChild(option('', 'Tất cả (' + items.length + ')'));
    var counts = {};
    items.forEach(function (it) { counts[it.nguon] = (counts[it.nguon] || 0) + 1; });
    Object.keys(counts).sort(function (a, b) { return a.localeCompare(b, 'vi'); })
      .forEach(function (name) { ui.bao.appendChild(option(name, name + (counts[name] > 1 ? ' (' + counts[name] + ')' : ''))); });
    srcWrap.appendChild(ui.bao);

    // Sắp xếp
    var sortWrap = el('label', 'press-select');
    sortWrap.appendChild(el('span', 'press-select__label', 'Sắp xếp'));
    ui.sort = el('select', 'press-select__input');
    [['new', 'Mới nhất'], ['old', 'Cũ nhất'], ['az', 'Tên báo A → Z'], ['za', 'Tên báo Z → A']]
      .forEach(function (s) { ui.sort.appendChild(option(s[0], s[1])); });
    sortWrap.appendChild(ui.sort);

    row.appendChild(search);
    row.appendChild(srcWrap);
    row.appendChild(sortWrap);

    // Nút kênh: tự sinh từ "kenh", bỏ kênh không có bài
    ui.kenh = el('div', 'press-filter');
    ui.kenh.setAttribute('role', 'group');
    ui.kenh.setAttribute('aria-label', 'Lọc theo kênh');
    [['all', 'Tất cả']].concat(Object.keys(KENH).map(function (k) { return [k, KENH[k]]; })).forEach(function (k) {
      var n = k[0] === 'all' ? items.length : items.filter(function (it) { return it.kenh === k[0]; }).length;
      if (!n) return;
      var b = el('button', 'press-filter__btn');
      b.type = 'button';
      b.dataset.kenh = k[0];
      b.appendChild(document.createTextNode(k[1] + ' '));
      b.appendChild(el('span', 'press-filter__count', String(n)));
      ui.kenh.appendChild(b);
    });

    // Đang lọc gì + Xóa lọc (đọc to cho trình đọc màn hình)
    ui.active = el('div', 'press-active');
    ui.active.setAttribute('aria-live', 'polite');

    tools.appendChild(row);
    tools.appendChild(ui.kenh);
    tools.appendChild(ui.active);
    list.parentNode.insertBefore(tools, list);

    ui.q.addEventListener('input', function () { state.q = ui.q.value; render(); });
    ui.bao.addEventListener('change', function () { state.bao = ui.bao.value; render(); });
    ui.sort.addEventListener('change', function () { state.sort = ui.sort.value; render(); });
    ui.kenh.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b || b.dataset.kenh === state.kenh) return;
      state.kenh = b.dataset.kenh;
      render();
    });
    ui.active.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-clear]');
      if (b) clearFilter(b.dataset.clear);
    });
    list.addEventListener('click', function (e) {
      if (e.target.closest('[data-clear-all]')) clearFilter('all');
    });

    // Số bài: huy hiệu trên nút + dòng phụ trong bảng
    document.querySelectorAll('[data-press-count]').forEach(function (n) { n.textContent = String(items.length); });
    opener.setAttribute('aria-label', 'Báo chí đưa tin: xem tất cả ' + items.length + ' bài');
    render();
  }

  function clearFilter(which) {
    if (which === 'kenh' || which === 'all') state.kenh = 'all';
    if (which === 'bao' || which === 'all') { state.bao = ''; ui.bao.value = ''; }
    if (which === 'q' || which === 'all') { state.q = ''; ui.q.value = ''; }
    render();
  }

  function render() {
    ui.kenh.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.kenh === state.kenh)); });

    var q = fold(state.q.trim());
    var shown = items.filter(function (it) {
      return (state.kenh === 'all' || it.kenh === state.kenh) && (!state.bao || it.nguon === state.bao) && (!q || it.search.indexOf(q) > -1);
    });
    var byDate = state.sort === 'new' || state.sort === 'old';
    shown.sort(function (a, b) {
      if (state.sort === 'az') return byName(a, b);
      if (state.sort === 'za') return byName(b, a);
      if (!a.date || !b.date) return a.date ? -1 : b.date ? 1 : a.order - b.order; // chưa rõ ngày → cuối
      return state.sort === 'new' ? b.date - a.date : a.date - b.date;
    });

    // Dòng "N kết quả" + thẻ bộ lọc đang bật (bấm × để bỏ)
    ui.active.textContent = '';
    ui.active.appendChild(el('span', 'press-active__count', shown.length + ' / ' + items.length + ' bài'));
    var tags = [];
    if (state.kenh !== 'all') tags.push(['kenh', KENH[state.kenh]]);
    if (state.bao) tags.push(['bao', state.bao]);
    if (state.q.trim()) tags.push(['q', '“' + state.q.trim() + '”']);
    tags.forEach(function (t) {
      var b = el('button', 'press-active__tag', t[1]);
      b.type = 'button';
      b.dataset.clear = t[0];
      b.setAttribute('aria-label', 'Bỏ lọc ' + t[1]);
      b.insertAdjacentHTML('beforeend', svg(X));
      ui.active.appendChild(b);
    });
    if (tags.length) {
      var all = el('button', 'press-active__clear', 'Xóa lọc');
      all.type = 'button';
      all.dataset.clear = 'all';
      ui.active.appendChild(all);
    }

    list.textContent = '';
    if (!shown.length) {
      var empty = el('li', 'press-dialog__empty');
      empty.appendChild(el('p', 'press-dialog__empty-title', 'Không có bài nào khớp'));
      empty.appendChild(el('p', 'press-dialog__empty-text', 'Thử gõ từ khác hoặc bỏ bớt bộ lọc.'));
      var btn = el('button', 'press-active__clear press-active__clear--big', 'Xóa lọc, xem tất cả');
      btn.type = 'button';
      btn.setAttribute('data-clear-all', '');
      empty.appendChild(btn);
      list.appendChild(empty);
      return;
    }
    var last = null;
    shown.forEach(function (it, i) {
      var key = byDate ? dayKey(it.date) : it.bao.charAt(0).toLocaleUpperCase('vi');
      if (key !== last) {
        last = key;
        var head = el('li', 'press-dialog__day');
        head.appendChild(el('h3', 'press-dialog__day-title', byDate ? dayLabel(it.date) : key));
        list.appendChild(head);
      }
      var li = el('li', 'press-dialog__item');
      li.style.setProperty('--i', Math.min(i, 12));
      li.appendChild(it.card);
      list.appendChild(li);
    });
    list.scrollTop = 0;
  }

  // ---- Mở / đóng bảng ----
  var closeTimer = 0;

  function open() {
    clearTimeout(closeTimer);
    dialog.classList.remove('is-closing');
    dialog.showModal();
    document.documentElement.classList.add('press-dialog-open');
    strip.classList.add('is-paused');
    opener.setAttribute('aria-expanded', 'true');
    list.scrollTop = 0;
  }

  function close() {
    if (!dialog.open || dialog.classList.contains('is-closing')) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    dialog.classList.add('is-closing');
    closeTimer = setTimeout(function () {
      dialog.classList.remove('is-closing');
      dialog.close();
    }, reduce ? 0 : CLOSE_MS);
  }

  dialog.addEventListener('close', function () {
    document.documentElement.classList.remove('press-dialog-open');
    strip.classList.remove('is-paused');
    opener.setAttribute('aria-expanded', 'false');
  });

  opener.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // Esc → đóng có hiệu ứng thay vì đóng ngay (nhưng Esc trong ô tìm kiếm có chữ = xóa chữ, giữ bảng)
  dialog.addEventListener('cancel', function (e) {
    e.preventDefault();
    if (ui.q && document.activeElement === ui.q && ui.q.value) { clearFilter('q'); return; }
    close();
  });

  // Bấm ra ngoài khung (vùng nền mờ) → đóng
  dialog.addEventListener('click', function (e) {
    if (e.target !== dialog) return;
    var r = dialog.getBoundingClientRect();
    var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) close();
  });
})();
