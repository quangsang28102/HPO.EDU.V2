# AGENTS.md — Website Hiệp Phát (WEB-HPO-V2)

## Dự án
- Site tĩnh HTML/CSS/JS. Nhánh làm việc: SuaTrangChu.
- Chạy thử: python3 -m http.server 5180 --bind 127.0.0.1 → http://127.0.0.1:5180
- Các trang: index.html, hoc-phi/, chuong-trinh-uu-dai/, danh-sach-benh-vien/, gioi-thieu/trung-tam-giao-duc-nghe-nghiep/, gioi-thieu/trung-tam-sat-hach/, on-tap/, quy-dinh-chuong-trinh-hoc-lai-xe/, tra-cuu-qr/, chinh-sach-bao-mat/.
- Header/footer dùng chung: assets/js/site-header.js, assets/js/site-footer.js. Trang con khai báo data-base="../" (hoặc "../../") để link đúng.
- CSS chung: style.css (gom các @import); CSS riêng từng khu trong assets/css/.
- Robot 3D: thư mục robot/ (TypeScript + esbuild). Sửa xong chạy npm run build rồi npm test trong robot/; commit cả robot/dist.
- Danh sách báo chí: assets/data/bao-chi.json (thêm báo = sửa JSON, đọc mục _huongDan trong file).
- Trạng thái và việc còn dở: ../00_BAN_GIAO.md (nằm ngoài repo, ở thư mục cha).
- Gói bàn giao: plans/handoff-*/HANDOFF.md (plans/ không lên git).

## Quy tắc bắt buộc
- KHÔNG git push, không --force, trừ khi được yêu cầu rõ. Chỉ commit khi được yêu cầu.
- Chỉ sửa đúng file được nêu; không "tiện tay" sửa hay định dạng lại chỗ khác.
- Đổi CSS/JS → tăng ?v= của style.css / site-header.js / site-footer.js ở TẤT CẢ trang có link đó.
- @import mới trong style.css đặt ngay sau @import cuối cùng, không để cuối file.
- Trước khi đặt tên class mới: tìm trong assets/css để tránh trùng (ví dụ .news-card đã có).
- Làm gói plans/handoff-*/HANDOFF.md: đúng từng bước. Patch không áp được thì dùng files/ hoặc script kèm theo. Gặp lỗi thì dừng và báo, không tự đoán.
- Không bịa nội dung (giá, ngày, thông tin công ty). Thiếu thì hỏi.

## Thiết kế (Giám đốc duyệt: "to, rõ, không phải bấm")
- Font: tiêu đề Be Vietnam Pro, nội dung SVN-Gilroy.
- Màu: xanh #2b26fb, đỏ #ea1e24, navy #2d3489, vàng #faec1a (chỉ trên nền tối). Cam #ff6b35 chỉ để trang trí, không làm chữ.
- Chữ nhấn: chỉ đổi màu, chữ đứng (nền sáng: đỏ; nền tối: vàng #facc15).
- Chữ nội dung ≥ 17px, chữ phụ ≥ 14px, nút/vùng bấm ≥ 44px; không giấu nội dung sau nút bấm.
- Giữ nguyên câu chữ Giám đốc đã duyệt.

## Kiểm tra trước khi commit
- Mở các trang liên quan ở 1440, 1920, 1024 và 390px: không tràn ngang, console không lỗi, không file 404.
- Đổi header: kiểm thêm nhiều khổ giữa 1101 và 2000px.

## Báo lại sau mỗi việc
- Danh sách file đã đổi, commit hash, việc chưa làm được và lý do.
