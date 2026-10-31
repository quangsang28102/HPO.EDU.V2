// Chuyển động cho vòng "Hệ thống HPO".
// Ảnh vòng là 1 lớp phẳng, nên hiệu ứng được vẽ bằng SVG phủ lên (viewBox 362 = kích thước ảnh):
//  - mỗi thành phần có 1 tia nối về xe ở tâm, vạch sáng chảy liên tục;
//  - tia quét (CSS .hpo-sys-sweep, 6s/vòng) đi qua thành phần nào thì 1 gói dữ liệu vừa chạy tới đó và thành phần sáng lên;
//  - nghiêng nhẹ theo con trỏ.
(function () {
  const ring = document.querySelector('.hpo-sys-ring');
  const svg = ring && ring.querySelector('.hpo-sys-motion');
  if (!svg) return;

  const NS = 'http://www.w3.org/2000/svg';
  const CENTER = { x: 181, y: 183 };
  const SWEEP_SECONDS = 6;          // phải trùng thời lượng animation hpo-sys-spin trong CSS
  const TRAVEL = 0.18;              // phần chu kỳ gói dữ liệu chạy từ tâm ra
  const GLOW_PEAK = 0.2;            // thời điểm thành phần sáng nhất (ngay khi tia quét đi qua)

  // Tâm biểu tượng đo trên ảnh assets/images/hero/hpo-system-circle.webp
  const NODES = [
    { name: 'face', x: 117, y: 100 },
    { name: 'cloud', x: 250, y: 92 },
    { name: 'dat', x: 313, y: 186 },
    { name: 'cabin', x: 242, y: 280 },
    { name: 'sim', x: 110, y: 265 },
    { name: 'platform', x: 52, y: 160 },
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
    const begin = `${(hitAt - GLOW_PEAK * SWEEP_SECONDS).toFixed(2)}s`;
    const common = { dur: `${SWEEP_SECONDS}s`, begin, repeatCount: 'indefinite' };

    const glow = el('circle', { cx: n.x, cy: n.y, r: 34, fill: 'url(#hpoSysNodeGlow)', opacity: 0 }, svg);
    el('animate', { attributeName: 'opacity', values: '0;0;1;.7;0;0', keyTimes: `0;${GLOW_PEAK - 0.03};${GLOW_PEAK};0.3;0.45;1`, ...common }, glow);
    el('animate', { attributeName: 'r', values: '24;24;44;50;50', keyTimes: `0;${GLOW_PEAK - 0.03};${GLOW_PEAK};0.45;1`, ...common }, glow);

    const packet = el('circle', { r: 3.4, class: 'hpo-sys-packet', opacity: 0 }, svg);
    el('animateMotion', { path: d, keyPoints: '0;1;1', keyTimes: `0;${TRAVEL};1`, calcMode: 'linear', ...common }, packet);
    el('animate', { attributeName: 'opacity', values: '0;1;1;0;0', keyTimes: `0;0.02;${TRAVEL - 0.02};${TRAVEL + 0.01};1`, ...common }, packet);
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const syncMotionPreference = () => (reduceMotion.matches ? svg.pauseAnimations() : svg.unpauseAnimations());
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
