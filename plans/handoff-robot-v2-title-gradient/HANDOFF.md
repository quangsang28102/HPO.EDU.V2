# Bàn giao: robot góc trang theo mẫu "Trợ lý ảo AI" + chữ gradient tiêu đề hero

Ảnh: `robot-mau-va-ban-moi.png` (trái: mẫu đã duyệt; giữa/phải: robot 3D mới đứng yên/vẫy tay), `tieu-de-truoc-sau.png` (trên: hiện tại; dưới: gradient).
Gói này thay cho `handoff-robot-redesign` (đã ghép). Bỏ qua các thư mục handoff cũ.

## Phần 1 — Robot 3D (gói `robot/`)
Chỉ đổi ngoại hình cho giống mẫu: vỏ trắng, đệm vai/khuỷu/gối/tai xanh da trời `#3f93e6`, khớp và đai eo navy `#1f2d42`, kính mặt đen bóng, mắt hình viên thuốc xanh nhạt; bỏ miệng, má hồng, ăng-ten; thân và tay chân đầy đặn hơn; SVG fallback vẽ lại theo kiểu mới.
API `Robot` giữ nguyên. Riêng `setExpression()` vẫn nhận tham số nhưng không còn đổi miệng (mẫu không có miệng).

1. Chép `files/robot/robot.ts` và `files/robot/scene.ts` đè vào `robot/` (`robot.ts.diff`, `scene.ts.diff` là thay đổi so với bản đang có trong repo). Giữ nguyên `robot/hiepphat-chest-logo-data-uri.ts`. Không sửa file nào khác trong `robot/` (`main.ts` có thay đổi chưa commit — giữ nguyên).
2. Trong `robot/`: `npm test` (phải pass 18/18), rồi `npm run build` để tạo lại `dist/companion.js` và `dist/companion.css`.

## Phần 2 — Chữ gradient tiêu đề hero
Nguyên nhân hiện chưa có gradient: `assets/css/homepage-reference-hero.css` ép màu phẳng (`#1556ae`, `#e51f2b`, `-webkit-text-fill-color: currentColor`). Ngoài ra, mỗi span là `display:block` rộng hết khung, nên gradient trải 1480px và trông như một màu.

1. Chép `files/assets/css/homepage-hero-title-gradient.css` vào `assets/css/`.
2. `index.html`: thêm `<link rel="stylesheet" href="assets/css/homepage-hero-title-gradient.css?v=20261031-title" />` ngay SAU dòng `homepage-reference-hero.css` (trước `homepage-hpo-system-card-motion.css` cũng được).
3. Không sửa `homepage-reference-hero.css` hay `homepage.css`; file mới tự ghi đè (cùng độ ưu tiên, nạp sau).

## Kiểm tra
- `python3 -m http.server 5180 --bind 127.0.0.1`, mở http://127.0.0.1:5180/ ở khổ 1440 và 390.
- Slide 1: "KỶ NGUYÊN AI" chuyển xanh → tím, "TRONG ĐÀO TẠO LÁI XE" đỏ tươi → đỏ đậm; dấu Ỷ/Ê và chấm dưới Ạ hiển thị đủ; vị trí chữ không đổi so với trước.
- Robot góc trang giống `robot-mau-va-ban-moi.png`, vẫy tay khi vào trang chủ, chớp mắt; mở cửa sổ 3D không lỗi console.
- Đã kiểm tra trước (trang chủ chạy bundle + CSS mới qua interception): không lỗi console ở 1672 và 390px, test 18/18.
- Xong có thể xóa toàn bộ `plans/handoff-*`.
