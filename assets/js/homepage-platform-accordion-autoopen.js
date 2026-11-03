/* Section "Đào tạo lái xe trên nền tảng số" (trang chủ): khi người dùng lướt tới nhóm mở/đóng của
   01 Lý thuyết hoặc 02 Thực hành lần đầu, tự mở mục đầu tiên (Xác thực khuôn mặt / Thực hành sân sa hình)
   để thấy ngay nội dung + ảnh/video. Chỉ tự mở 1 lần mỗi nhóm; nếu người dùng đã tự bấm hoặc đóng lại thì không mở nữa.
   Khi tự mở: viền mục đó sáng nhẹ 1 lần (class is-auto-highlight, CSS trong homepage-platform-theory-practice-refresh.css).
   Dùng hàm group.__activateLearningItem do homepage.js tạo → nạp SAU homepage.js. */
(() => {
  const groups = Array.from(document.querySelectorAll('.platform-v2-body--stacked .platform-acc'));
  if (!groups.length || !('IntersectionObserver' in window)) return;

  const openFirst = (group) => {
    const items = group.querySelectorAll('.pacc-item');
    const anyOpen = Array.from(items).some((item) => item.classList.contains('is-active'));
    if (!items.length || anyOpen || typeof group.__activateLearningItem !== 'function') return;
    group.__activateLearningItem(items[0]);
    // A+: viền sáng 1 lần để mắt dồn vào mục vừa mở; gỡ class khi xong để lần bấm sau không sáng lại
    items[0].classList.add('is-auto-highlight');
    items[0].addEventListener('animationend', () => items[0].classList.remove('is-auto-highlight'), { once: true });
    window.setTimeout(() => items[0].classList.remove('is-auto-highlight'), 2500);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      openFirst(entry.target);
    });
  }, { rootMargin: '0px 0px -25% 0px', threshold: 0.2 });

  groups.forEach((group) => {
    // Người dùng tự bấm trước khi nhóm được tự mở → bỏ tự mở
    group.addEventListener('click', () => observer.unobserve(group), { once: true });
    observer.observe(group);
  });
})();
