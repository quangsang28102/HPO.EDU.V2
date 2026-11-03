# Bàn giao: card "Hệ thống HPO + Trợ lý ảo AI" (hero trang chủ)

Thiết kế đã duyệt: `thiet-ke-da-duyet-1672.png`. Xem thử độc lập: mở `xem-thu-card-doc-lap.html`.

## Phạm vi
Chỉ thay khối `<div class="hpo-system-card" ...>…</div>` trong slide 1 (`section.hpo-digital-hero`) của `index.html`.
KHÔNG đụng: header (`assets/js/site-header.js`), nút nổi (`assets/js/site-footer.js`), widget robot 3D (`robot/`), tiêu đề/mô tả hero, slide 2 trở đi.
Repo đang có thay đổi chưa commit (index.html, robot/…) — giữ nguyên, không revert.

## Nội dung gói
| File trong gói | Chép tới |
|---|---|
| `files/assets/images/hero/hpo-system-circle.webp` | `assets/images/hero/` |
| `files/assets/images/hero/hpo-ai-assistant-robot-waving.webp` | `assets/images/hero/` |
| `files/assets/css/homepage-hpo-system-card-motion.css` | `assets/css/` |
| `files/assets/js/homepage-hpo-system-card-motion.js` | `assets/js/` |
| `hpo-system-card-markup-snippet.html` | dán thay khối cũ trong `index.html` |

## Các bước
1. Chép 4 file asset vào đúng vị trí ở bảng trên (giữ nguyên tên).
2. `index.html`: thay toàn bộ khối `div.hpo-system-card` (gồm `.hpo-system-diagram`, `.hpo-system-orbit`, SVG xe, `.hpo-system-assistant`) bằng nội dung `hpo-system-card-markup-snippet.html`. Không sửa gì trong snippet.
3. `index.html` `<head>`: thêm `<link rel="stylesheet" href="assets/css/homepage-hpo-system-card-motion.css?v=20261031-hpo-card" />` ngay SAU dòng `homepage-reference-hero.css`.
4. `index.html` cuối `<body>`: thêm `<script src="assets/js/homepage-hpo-system-card-motion.js?v=20261031-hpo-card"></script>` (đặt cùng nhóm script trang chủ, sau markup).
5. `assets/css/homepage-reference-hero.css`: xóa các rule chỉ dùng cho khối cũ đã bị bỏ — `.hpo-system-card`, `.hpo-system-diagram`, `.hpo-system-assistant`, `.hpo-system-orbit*`, `.hpo-system-node*`, `.hpo-system-car`, `.hpo-assistant-*` (kể cả trong các media query). Trước khi xóa, grep toàn repo để chắc không trang nào khác dùng.

## Ràng buộc
- Không đổi tên class `hpo-sys-*`, không đổi `viewBox="0 0 362 362"` (toạ độ trong JS đo theo ảnh 362px).
- `SWEEP_SECONDS` trong JS phải bằng thời lượng animation `hpo-sys-spin` của `.hpo-sys-sweep` (6s).
- Chữ "TRỢ LÝ ẢO AI" được căn theo trục thân robot bằng `margin-left: calc(50% - var(--robot-w) * .39)` — giữ nguyên.

## Kiểm tra
- Chạy `python3 -m http.server 5180 --bind 127.0.0.1`, mở http://127.0.0.1:5180/.
- Khổ 375 / 768 / 1024 / 1440: card hiển thị như ảnh thiết kế, không cuộn ngang, console không lỗi.
- Vòng HPO: tia quét xoay, gói dữ liệu chạy từ xe ra từng thành phần, thành phần sáng lên khi tia quét qua.
- Tâm chữ "TRỢ LÝ ẢO AI" thẳng trục thân robot.
- Sau khi xong có thể xóa thư mục `plans/handoff-hero-hpo-system-card/`.
