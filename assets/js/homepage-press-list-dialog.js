/* ==========================================================================
   Trang chủ — "Báo chí đưa tin": bấm nhãn bên trái → mở bảng liệt kê ĐỦ các bài báo.
   Danh sách dựng từ chính các thẻ <a> ở nhóm 1 của dải chạy (.strip--press .strip-group:first-child),
   nên thêm/bớt bài chỉ cần sửa dải như cũ — bảng và số đếm tự cập nhật.
   Dùng <dialog> gốc của trình duyệt: Esc để đóng, khóa Tab trong bảng, đóng xong trả focus về nút.

   Lọc + sắp xếp (2026-11-05): thanh công cụ do JS dựng ngay trên danh sách.
   - Lọc theo loại: Tất cả / Bài báo / Video / Phát thanh (kèm số bài).
   - Sắp xếp: Mới nhất (mặc định) / Cũ nhất — chia nhóm theo ngày đăng, mỗi bài ghi ngày giờ.
   - 3 bài mới nhất có nhãn "Mới".
   Ngày giờ đăng lấy từ data-date="YYYY-MM-DDTHH:MM" (giờ Việt Nam) trên thẻ <a> của dải chạy.
   Thẻ thiếu data-date → xếp cuối, nhóm "Chưa rõ ngày đăng".
   ========================================================================== */
(function () {
  'use strict';

  var dialog = document.getElementById('pressListDialog');
  var opener = document.querySelector('[data-press-open]');
  var strip = document.querySelector('.strip--press');
  if (!dialog || !opener || !strip || typeof dialog.showModal !== 'function') return;

  var list = dialog.querySelector('[data-press-list]');
  var closeBtn = dialog.querySelector('[data-press-close]');
  var chips = strip.querySelectorAll('.strip-group:first-child .strip-chip--press');
  var CLOSE_MS = 180;
  var NEW_COUNT = 3; // số bài mới nhất được gắn nhãn "Mới"

  var TYPES = [
    { key: 'all', label: 'Tất cả' },
    { key: 'article', label: 'Bài báo' },
    { key: 'video', label: 'Video' },
    { key: 'audio', label: 'Phát thanh' }
  ];
  var TYPE_LABEL = { article: 'Bài báo', video: 'Video', audio: 'Phát thanh' };

  // Loại bài lấy từ aria-label của thẻ: "… (video, mở trong tab mới)"
  function typeOf(chip) {
    var m = /\(([^,()]+),\s*mở trong tab mới\)\s*$/.exec(chip.getAttribute('aria-label') || '');
    var t = m ? m[1].trim().toLowerCase() : 'bài báo';
    if (t.indexOf('video') > -1) return 'video';
    if (t.indexOf('phát thanh') > -1) return 'audio';
    return 'article';
  }

  // "2026-10-28T16:34" → Date theo giờ máy người xem (chuỗi không có múi giờ = giờ địa phương)
  function parseDate(s) {
    if (!s) return null;
    var d = new Date(s.length === 10 ? s + 'T00:00' : s);
    return isNaN(d) ? null : d;
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(d) { return d ? d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) : 'none'; }
  function dayLabel(d) {
    if (!d) return 'Chưa rõ ngày đăng';
    var w = d.toLocaleDateString('vi-VN', { weekday: 'long' });
    return w.charAt(0).toUpperCase() + w.slice(1) + ', ' + pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
  }
  function timeLabel(d) { return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ' · ' + pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear(); }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  var ICON_CLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

  // ---- Dữ liệu bài: đọc 1 lần từ dải chạy ----
  var items = Array.prototype.map.call(chips, function (chip, i) {
    var desc = chip.querySelector('.strip-chip__desc');
    return {
      chip: chip,
      order: i,
      outlet: ((chip.querySelector('b') || {}).textContent || '').trim(),
      title: desc ? desc.textContent.replace(/\s+/g, ' ').trim() : '',
      type: typeOf(chip),
      date: parseDate(chip.getAttribute('data-date'))
    };
  });

  // 3 bài mới nhất (có ngày) → nhãn "Mới"
  items.filter(function (it) { return it.date; })
    .sort(function (a, b) { return b.date - a.date; })
    .slice(0, NEW_COUNT)
    .forEach(function (it) { it.isNew = true; });

  // ---- Thẻ bài trong bảng ----
  function buildCard(it) {
    var a = el('a', 'press-item');
    a.href = it.chip.href;
    a.target = '_blank';
    a.rel = 'noopener';
    var typeText = TYPE_LABEL[it.type];
    a.setAttribute('aria-label', it.outlet + ': ' + it.title + ' (' + typeText.toLowerCase() +
      (it.date ? ', đăng ' + timeLabel(it.date).replace(' · ', ' ngày ') : '') + (it.isNew ? ', mới' : '') + ', mở trong tab mới)');

    var icon = el('span', 'press-item__icon');
    icon.setAttribute('aria-hidden', 'true');
    var srcIcon = it.chip.querySelector('.strip-chip__icon svg');
    if (srcIcon) icon.appendChild(srcIcon.cloneNode(true));

    var body = el('span', 'press-item__body');
    var meta = el('span', 'press-item__meta');
    meta.appendChild(el('b', 'press-item__outlet', it.outlet));
    meta.appendChild(el('span', 'press-item__type press-item__type--' + it.type, typeText));
    if (it.isNew) meta.appendChild(el('span', 'press-item__new', 'Mới'));
    body.appendChild(meta);
    body.appendChild(el('span', 'press-item__title', it.title));
    if (it.date) {
      var when = el('span', 'press-item__date');
      when.innerHTML = ICON_CLOCK;
      when.appendChild(document.createTextNode(timeLabel(it.date)));
      body.appendChild(when);
    }

    a.appendChild(icon);
    a.appendChild(body);
    var go = it.chip.querySelector('.strip-chip__go');
    if (go) a.appendChild(go.cloneNode(true)).setAttribute('class', 'press-item__go');
    return a;
  }
  items.forEach(function (it) { it.card = buildCard(it); });

  // ---- Thanh công cụ: lọc loại + sắp xếp ----
  var state = { type: 'all', sort: 'new' };
  var tools = el('div', 'press-dialog__tools');
  var filterGroup = el('div', 'press-filter');
  filterGroup.setAttribute('role', 'group');
  filterGroup.setAttribute('aria-label', 'Lọc theo loại bài');
  var sortGroup = el('div', 'press-sort');
  sortGroup.setAttribute('role', 'group');
  sortGroup.setAttribute('aria-label', 'Sắp xếp theo ngày đăng');
  var status = el('p', 'press-dialog__status');
  status.setAttribute('aria-live', 'polite');

  TYPES.forEach(function (t) {
    var n = t.key === 'all' ? items.length : items.filter(function (it) { return it.type === t.key; }).length;
    if (!n) return; // loại không có bài → không hiện nút
    var b = el('button', 'press-filter__btn');
    b.type = 'button';
    b.dataset.type = t.key;
    b.appendChild(document.createTextNode(t.label + ' '));
    b.appendChild(el('span', 'press-filter__count', String(n)));
    filterGroup.appendChild(b);
  });
  [['new', 'Mới nhất'], ['old', 'Cũ nhất']].forEach(function (s) {
    var b = el('button', 'press-sort__btn', s[1]);
    b.type = 'button';
    b.dataset.sort = s[0];
    sortGroup.appendChild(b);
  });
  tools.appendChild(filterGroup);
  tools.appendChild(sortGroup);
  list.parentNode.insertBefore(tools, list);
  list.parentNode.insertBefore(status, list);

  function render() {
    filterGroup.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.type === state.type)); });
    sortGroup.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.sort === state.sort)); });

    var shown = items.filter(function (it) { return state.type === 'all' || it.type === state.type; });
    shown.sort(function (a, b) {
      if (!a.date || !b.date) return (a.date ? -1 : b.date ? 1 : a.order - b.order); // chưa rõ ngày → cuối
      return state.sort === 'new' ? b.date - a.date : a.date - b.date;
    });

    list.textContent = '';
    var lastDay = null;
    shown.forEach(function (it, i) {
      var key = dayKey(it.date);
      if (key !== lastDay) {
        lastDay = key;
        var head = el('li', 'press-dialog__day');
        head.appendChild(el('h3', 'press-dialog__day-title', dayLabel(it.date)));
        list.appendChild(head);
      }
      var li = el('li', 'press-dialog__item');
      li.style.setProperty('--i', Math.min(i, 12));
      li.appendChild(it.card);
      list.appendChild(li);
    });
    list.scrollTop = 0;

    var typeName = state.type === 'all' ? 'bài' : TYPE_LABEL[state.type].toLowerCase();
    status.textContent = 'Đang xem ' + shown.length + ' ' + typeName + ', ' + (state.sort === 'new' ? 'mới nhất trước' : 'cũ nhất trước') + '.';
  }

  filterGroup.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b || b.dataset.type === state.type) return;
    state.type = b.dataset.type;
    render();
  });
  sortGroup.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b || b.dataset.sort === state.sort) return;
    state.sort = b.dataset.sort;
    render();
  });
  render();

  // Số bài: huy hiệu trên nút + dòng phụ trong bảng
  document.querySelectorAll('[data-press-count]').forEach(function (n) { n.textContent = String(chips.length); });
  opener.setAttribute('aria-label', 'Báo chí đưa tin: xem tất cả ' + chips.length + ' bài');

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

  // Esc → đóng có hiệu ứng thay vì đóng ngay
  dialog.addEventListener('cancel', function (e) { e.preventDefault(); close(); });

  // Bấm ra ngoài khung (vùng nền mờ) → đóng
  dialog.addEventListener('click', function (e) {
    if (e.target !== dialog) return;
    var r = dialog.getBoundingClientRect();
    var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside) close();
  });
})();
