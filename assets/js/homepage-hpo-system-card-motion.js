// Chuyển động cho card "Hệ thống HPO" (vòng HPO + danh sách 6 thành phần).
// Ảnh vòng là 1 lớp phẳng, nên hiệu ứng được vẽ bằng SVG phủ lên (viewBox 362 = kích thước ảnh):
//  - mỗi thành phần có 1 tia nối về xe ở tâm, vạch sáng chảy liên tục;
//  - tia quét (CSS .hpo-sys-sweep, 6s/vòng) đi qua thành phần nào thì 1 gói dữ liệu vừa chạy tới đó, thành phần sáng lên
//    và mục tương ứng trong .hpo-sys-list được gắn .is-active;
//  - rê chuột/focus vào 1 mục trong danh sách → khoanh sáng thành phần đó trên vòng;
//  - nghiêng nhẹ theo con trỏ.
(function () {
  const card = document.querySelector('.hpo-sys-card');
  const ring = card && card.querySelector('.hpo-sys-ring');
  const svg = ring && ring.querySelector('.hpo-sys-motion');
  if (!svg) return;

  const NS = 'http://www.w3.org/2000/svg';
  const CENTER = { x: 181, y: 186 };
  const SWEEP_SECONDS = 6;          // phải trùng thời lượng animation hpo-sys-spin của .hpo-sys-sweep trong CSS
  const TRAVEL = 0.18;              // phần chu kỳ gói dữ liệu chạy từ tâm ra
  const GLOW_PEAK = 0.2;            // thời điểm thành phần sáng nhất (ngay khi tia quét đi qua)
  const ACTIVE_SECONDS = 1.4;       // thời gian mục trong danh sách giữ trạng thái sáng sau khi tia quét đi qua

  // Tâm biểu tượng trên ảnh hpo-system-circle.webp (dựng lại 2026-11-02 bằng icon + xe gốc của hpo.edu.vn,
  // toạ độ lấy đúng từ NODES của file dựng ảnh); name khớp data-hpo-node trong HTML
  const NODES = [
    { name: 'face', x: 117, y: 104 },
    { name: 'cloud', x: 250, y: 98 },
    { name: 'dat', x: 309, y: 178 },
    { name: 'cabin', x: 246, y: 268 },
    { name: 'sim', x: 114, y: 264 },
    { name: 'platform', x: 58, y: 166 },
  ];

  const el = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };

  const defs = el('defs', {}, svg);
  const glowGrad = el('radialGradient', { id: 'hpoSysNodeGlow' }, defs);
  el('stop', { offset: '0', 'stop-color': '#d6f8ff', 'stop-opacity': '1' }, glowGrad);
  el('stop', { offset: '.5', 'stop-color': '#6fdcff', 'stop-opacity': '.6' }, glowGrad);
  el('stop', { offset: '1', 'stop-color': '#2b8cff', 'stop-opacity': '0' }, glowGrad);

  // Vòng quỹ đạo nét đứt sát mép, quay chậm, có 1 chấm sáng chạy theo
  const orbit = el('g', { class: 'hpo-sys-orbit' }, svg);
  el('circle', { cx: 181, cy: 181, r: 172, fill: 'none', stroke: '#cfeeff', 'stroke-opacity': '.35', 'stroke-width': '1', 'stroke-dasharray': '2 7' }, orbit);
  el('circle', { cx: 181, cy: 9, r: 2.6, fill: '#e6fbff' }, orbit);

  const items = new Map();
  card.querySelectorAll('[data-hpo-node]').forEach((li) => items.set(li.dataset.hpoNode, li));
  const schedule = [];   // { name, hitAt } — lúc tia quét đi qua từng thành phần
  const focusRings = new Map();

  NODES.forEach((n) => {
    const dx = n.x - CENTER.x, dy = n.y - CENTER.y;
    const len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
    // tia bắt đầu ở mép quầng sáng quanh xe, dừng trước biểu tượng
    const a = { x: CENTER.x + ux * 50, y: CENTER.y + uy * 50 };
    const b = { x: n.x - ux * 30, y: n.y - uy * 30 };
    const d = `M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}`;

    el('path', { d, class: 'hpo-sys-spoke' }, svg);

    // góc theo chiều kim đồng hồ tính từ hướng 12 giờ (giống conic-gradient) → lúc tia quét đi qua
    const angle = (Math.atan2(dx, -dy) * 180 / Math.PI + 360) % 360;
    const hitAt = (angle / 360) * SWEEP_SECONDS;
    schedule.push({ name: n.name, hitAt });
    const begin = `${(hitAt - GLOW_PEAK * SWEEP_SECONDS).toFixed(2)}s`;
    const common = { dur: `${SWEEP_SECONDS}s`, begin, repeatCount: 'indefinite' };

    const glow = el('circle', { cx: n.x, cy: n.y, r: 34, fill: 'url(#hpoSysNodeGlow)', opacity: 0 }, svg);
    el('animate', { attributeName: 'opacity', values: '0;0;1;.7;0;0', keyTimes: `0;${GLOW_PEAK - 0.03};${GLOW_PEAK};0.3;0.45;1`, ...common }, glow);
    el('animate', { attributeName: 'r', values: '24;24;44;50;50', keyTimes: `0;${GLOW_PEAK - 0.03};${GLOW_PEAK};0.45;1`, ...common }, glow);

    const packet = el('circle', { r: 3.4, class: 'hpo-sys-packet', opacity: 0 }, svg);
    el('animateMotion', { path: d, keyPoints: '0;1;1', keyTimes: `0;${TRAVEL};1`, calcMode: 'linear', ...common }, packet);
    el('animate', { attributeName: 'opacity', values: '0;1;1;0;0', keyTimes: `0;0.02;${TRAVEL - 0.02};${TRAVEL + 0.01};1`, ...common }, packet);

    focusRings.set(n.name, el('circle', { cx: n.x, cy: n.y, r: 40, class: 'hpo-sys-focus' }, svg));
  });

  // ---- Đồng bộ danh sách với tia quét (dùng đồng hồ SMIL của chính SVG nên luôn khớp gói dữ liệu) ----
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pinned = null;     // mục đang được rê chuột/focus → tạm dừng tự chạy
  let activeName = null;
  const setActive = (name) => {
    if (name === activeName) return;
    if (activeName && items.get(activeName)) items.get(activeName).classList.remove('is-active');
    activeName = name;
    if (name && items.get(name)) items.get(name).classList.add('is-active');
  };
  const tick = () => {
    if (!pinned && !reduceMotion.matches) {
      const t = svg.getCurrentTime() % SWEEP_SECONDS;
      const hit = schedule.find((s) => ((t - s.hitAt + SWEEP_SECONDS) % SWEEP_SECONDS) < ACTIVE_SECONDS);
      setActive(hit ? hit.name : null);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  const pin = (name) => {
    pinned = name;
    focusRings.forEach((ringEl, key) => ringEl.classList.toggle('is-on', key === name));
    setActive(name);
  };
  items.forEach((li, name) => {
    li.addEventListener('pointerenter', () => pin(name));
    li.addEventListener('focus', () => pin(name));
    li.addEventListener('pointerleave', () => pin(null));
    li.addEventListener('blur', () => pin(null));
  });

  const syncMotionPreference = () => {
    if (reduceMotion.matches) { svg.pauseAnimations(); setActive(null); } else svg.unpauseAnimations();
  };
  syncMotionPreference();
  reduceMotion.addEventListener('change', syncMotionPreference);

  // Nghiêng 3D nhẹ theo con trỏ (chỉ thiết bị có chuột)
  if (window.matchMedia('(hover: hover)').matches && !reduceMotion.matches) {
    ring.addEventListener('pointermove', (e) => {
      const r = ring.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      ring.style.setProperty('--tilt-x', `${(-py * 10).toFixed(2)}deg`);
      ring.style.setProperty('--tilt-y', `${(px * 10).toFixed(2)}deg`);
    });
    ring.addEventListener('pointerleave', () => {
      ring.style.setProperty('--tilt-x', '0deg');
      ring.style.setProperty('--tilt-y', '0deg');
    });
  }
})();
