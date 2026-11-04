/* ==========================================================================
   Trang chủ — "Báo chí đưa tin": bấm nhãn bên trái → mở bảng liệt kê ĐỦ các bài báo.
   Danh sách dựng từ chính các thẻ <a> ở nhóm 1 của dải chạy (.strip--press .strip-group:first-child),
   nên thêm/bớt bài chỉ cần sửa dải như cũ — bảng và số đếm tự cập nhật.
   Dùng <dialog> gốc của trình duyệt: Esc để đóng, khóa Tab trong bảng, đóng xong trả focus về nút.
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

  // Loại bài lấy từ aria-label của thẻ: "… (video, mở trong tab mới)"
  function typeOf(chip) {
    var m = /\(([^,()]+),\s*mở trong tab mới\)\s*$/.exec(chip.getAttribute('aria-label') || '');
    var t = m ? m[1].trim().toLowerCase() : 'bài báo';
    if (t.indexOf('video') > -1) return 'Video';
    if (t.indexOf('phát thanh') > -1) return 'Phát thanh';
    return 'Bài báo';
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  // Dựng danh sách 1 lần
  Array.prototype.forEach.call(chips, function (chip, i) {
    var outlet = (chip.querySelector('b') || {}).textContent || '';
    var desc = chip.querySelector('.strip-chip__desc');
    var title = desc ? desc.textContent : '';
    var type = typeOf(chip);

    var li = el('li', 'press-dialog__item');
    li.style.setProperty('--i', Math.min(i, 12));
    var a = el('a', 'press-item');
    a.href = chip.href;
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', outlet + ': ' + title + ' (' + type.toLowerCase() + ', mở trong tab mới)');

    var icon = el('span', 'press-item__icon');
    icon.setAttribute('aria-hidden', 'true');
    var srcIcon = chip.querySelector('.strip-chip__icon svg');
    if (srcIcon) icon.appendChild(srcIcon.cloneNode(true));

    var body = el('span', 'press-item__body');
    var meta = el('span', 'press-item__meta');
    meta.appendChild(el('b', 'press-item__outlet', outlet));
    meta.appendChild(el('span', 'press-item__type press-item__type--' + (type === 'Video' ? 'video' : type === 'Phát thanh' ? 'audio' : 'article'), type));
    body.appendChild(meta);
    body.appendChild(el('span', 'press-item__title', title));

    var go = chip.querySelector('.strip-chip__go');

    a.appendChild(icon);
    a.appendChild(body);
    if (go) a.appendChild(go.cloneNode(true)).setAttribute('class', 'press-item__go');
    li.appendChild(a);
    list.appendChild(li);
  });

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
