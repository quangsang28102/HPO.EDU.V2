# Bàn giao: thiết kế lại robot 3D Hiệp Phát (gói `robot/`)

So sánh trước/sau: `so-sanh-robot-cu-moi.png` (trái: cũ; giữa: mới; phải: mới đang vẫy tay).

## Thay đổi gì
Chỉ ngoại hình + ánh sáng. Giữ nguyên toàn bộ API công khai của `Robot` (group, head, torso, arms, elbows, wrists, legs, wave, setGreetingPose, setBlink, blinkProgress, setExpression, resetPose, update), cấu trúc khớp, hoạt ảnh vẫy tay/đi bộ/chớp mắt, tên mesh `eye-left`/`eye-right`/`palm`, uniform `closure`/`gaze` của mắt.

- Vỏ trắng sứ bóng (MeshPhysical clearcoat, metalness 0) + điểm nhấn xanh Hiệp Phát `#1652ff`; bỏ khớp đen/bạc nhiều lớp → khớp tròn xám xanh nhạt.
- Mắt LED xanh phát sáng (cả khối mắt dịch theo ánh nhìn), má hồng, miệng cười sáng, ăng-ten có bóng đèn nhấp nháy, nghiêng đầu nhẹ khi đứng yên.
- Huy hiệu ngực dùng logo tròn Hiệp Phát thật (nhúng base64 trong `hiepphat-chest-logo-data-uri.ts`, 256px WebP) thay cho hình tia giống icon Messenger.
- Tay chân dạng capsule tròn, giày trắng đế xanh, thân tròn có đai xanh.
- `scene.ts`: thêm RoomEnvironment (PMREM) để trắng không bị xám, đổi sang NeutralToneMapping (giữ đúng màu xanh), chỉnh đèn, bóng đổ xanh nhạt, SVG fallback theo bảng màu mới, giải phóng texture môi trường + texture logo trong `dispose()`. Xem `scene.ts.diff`.

## Các bước
1. Chép 3 file trong `files/robot/` đè vào `robot/` (thêm mới `hiepphat-chest-logo-data-uri.ts`). Không sửa `main.ts`, `viewer.ts`, `hero.ts`, `wander.ts`, `eye-motion.ts`, `style.css` — `main.ts` đang có thay đổi chưa commit, giữ nguyên.
2. Trong `robot/`: `npm test` (phải pass 18/18) rồi `npm run build` để tạo lại `dist/companion.js` và `dist/companion.css`.
3. Không cần đổi `package.json` hay cấu hình esbuild (logo là chuỗi TS, không cần loader ảnh).

## Kiểm tra
- `python3 -m http.server 5180 --bind 127.0.0.1` ở gốc site, mở http://127.0.0.1:5180/ (khổ 1440 và 390).
- Robot ngoài trang: hiện đúng như ảnh so sánh, vẫy tay khi vào trang chủ, chớp mắt, đi bộ theo viền ở trang con.
- Nhấn robot mở cửa sổ 3D: xoay/thu phóng, nút vẫy tay hoạt động; đóng cửa sổ không lỗi console.
- Đã kiểm tra trước: test 18/18 pass; trang chủ chạy bundle mới không lỗi console ở 1672 và 390px.
- Xong có thể xóa `plans/handoff-robot-redesign/`.
