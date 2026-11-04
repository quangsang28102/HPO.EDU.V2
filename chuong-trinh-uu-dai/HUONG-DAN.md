# Hướng dẫn: Chương trình ưu đãi theo xã

Trang `/chuong-trinh-uu-dai/` dùng chung cho mọi xã. **Mỗi xã có 1 file dữ liệu riêng** trong thư mục `data/`. Trang biết đang mở cho xã nào nhờ phần `?location=` trên đường dẫn (link in thành mã QR trên tờ rơi của xã đó).

```
https://hpo.edu.vn/chuong-trinh-uu-dai/?location=TanNhut1793756520
                                        └──────┬───────┘
                                    mã xã → đọc data/tannhut.json
```

## Trang gồm những gì
| Phần | Lấy từ đâu |
|---|---|
| Hướng dẫn 7 giấy tờ cần nộp (cụm Bước 1) | Cố định trong `index.html`, giống nhau ở mọi xã |
| Bảng "Nơi nhận hồ sơ tại …" | `data/<mã xã>.json` → `diemNhanHoSo` |
| Hộp ưu đãi (tên xã, học phí, hạn) | `data/<mã xã>.json` |
| Nút gọi tổng đài khi có lỗi | `data/<mã xã>.json` → `tongDai` |

## Quy tắc mã xã và tên file
- **Mã xã:**
  - Viết liền, không dấu, ví dụ `TanNhut`, `BinhHung`, `LeMinhXuan`.
  - Không phân biệt hoa thường; gạch ngang bị bỏ qua.
  - `TanNhut1793756520`, `tannhut1793756520`, `tan-nhut1793756520` đều hợp lệ nếu khớp `maXa` trong JSON.
- **Tên file:** mã xã viết **chữ thường, không dấu, không gạch**, bỏ hậu tố số ở cuối, đuôi `.json`. Ví dụ `TanNhut1793756520` đọc `data/tannhut.json`.

  | Mã xã trên link | Tên file |
  |---|---|
  | `TanNhut1793756520` | `data/tannhut.json` |
  | `BinhHung` | `data/binhhung.json` |
  | `LeMinhXuan` | `data/leminhxuan.json` |

- Mã chỉ gồm chữ a–z và số 0–9, dài 2–40 ký tự. Mã có ký tự khác sẽ báo "Không tìm thấy chương trình".

## Nội dung file dữ liệu (ví dụ `data/tannhut.json`)
```json
{
  "maXa": "TanNhut1793756520",
  "tenXa": "xã Tân Nhựt",
  "trangThai": "dang-mo",
  "hocPhiUuDai": 15000000,
  "hangXeApDung": "",
  "ngayBatDau": "2026-11-03",
  "ngayKetThuc": "2026-12-31",
  "tongDai": "028.36.362.362",
  "diemNhanHoSo": [
    { "diaDiem": "Trụ sở Hiệp Phát – 176 Thế Lữ, Ấp 1, xã Tân Nhựt", "nguoiLienHe": "Chị Nguyễn Thị Lan", "soDienThoai": "0901 234 501" }
  ]
}
```

| Trường | Ý nghĩa | Ghi chú |
|---|---|---|
| `maXa` | Mã xã hiện hành trên link | Phải khớp `location` sau khi chuẩn hóa; mã cũ hoặc sai sẽ bị từ chối |
| `tenXa` | Tên hiển thị, viết thường chữ "xã" | Hiện ở tiêu đề "Nơi nhận hồ sơ tại **xã Tân Nhựt**" và hộp ưu đãi |
| `trangThai` | `"dang-mo"` = đang chạy; giá trị khác (ví dụ `"tam-dung"`) = tạm dừng | Tạm dừng thì trang chỉ hiện lời nhắn + nút gọi tổng đài |
| `hocPhiUuDai` | Học phí ưu đãi, **số nguyên, không dấu chấm** | `15000000` hiện thành "15.000.000 VNĐ" |
| `hangXeApDung` | Hạng xe áp dụng, ví dụ `"hạng B số tự động"`; để `""` nếu không ghi | Có giá trị thì hiện "Áp dụng cho …" |
| `ngayBatDau` | Ngày bắt đầu, dạng `NĂM-THÁNG-NGÀY` | Trước ngày này trang báo "Chương trình chưa bắt đầu" |
| `ngayKetThuc` | Ngày kết thúc, dạng `NĂM-THÁNG-NGÀY` | **Hết ngày này trang tự báo "Chương trình đã kết thúc"**, ẩn giá và địa điểm |
| `tongDai` | Số tổng đài hiện khi có lời nhắn | |
| `diemNhanHoSo` | Danh sách điểm nhận hồ sơ, mỗi điểm 3 dòng: `diaDiem`, `nguoiLienHe`, `soDienThoai` | Thêm/bớt điểm thì thêm/bớt cả cụm `{ … }`, các cụm cách nhau dấu phẩy |

**Lưu ý khi sửa JSON:**
- Chữ phải nằm trong dấu nháy kép `"…"`.
- **Cụm cuối cùng trong danh sách không có dấu phẩy phía sau.**
- Lưu file với bảng mã **UTF-8** để giữ dấu tiếng Việt.
- Có thể dán nội dung vào <https://jsonlint.com> để kiểm tra trước khi lưu.

## Các việc thường làm

### Thêm một xã mới
1. Chép `data/tannhut.json` thành file mới, đặt tên theo quy tắc ở trên (ví dụ `data/binhhung.json`).
2. Sửa `maXa`, `tenXa`, giá, ngày, danh sách điểm nhận hồ sơ.
3. Đưa file lên web.
4. Kiểm tra bằng link `…/chuong-trinh-uu-dai/?location=BinhHung`.
5. Tạo mã QR từ link đó để in tờ rơi.

### Sửa số điện thoại hoặc người liên hệ
Sửa trong file `data/<mã xã>.json`, lưu, đưa lên web. Không cần sửa `index.html`.

### Kết thúc hoặc gia hạn chương trình
- **Gia hạn:** sửa `ngayKetThuc`.
- **Dừng ngay:** đổi `trangThai` thành `"tam-dung"`.

### Tạo mã QR
- Dùng link đầy đủ, ví dụ `https://hpo.edu.vn/chuong-trinh-uu-dai/?location=TanNhut1793756520`.
- Tạo QR bằng công cụ bất kỳ.
- Quét thử bằng điện thoại trước khi in.

## Các trường hợp trang tự xử lý
| Tình huống | Trang hiển thị |
|---|---|
| Không có `?location=` | "Chưa chọn địa phương" + nút gọi tổng đài |
| Mã sai, chưa có file, file JSON lỗi | "Không tìm thấy chương trình" + nút gọi tổng đài |
| `trangThai` khác `"dang-mo"` | "Chương trình đang tạm dừng" |
| Trước `ngayBatDau` | "Chương trình chưa bắt đầu từ ngày …" |
| Sau `ngayKetThuc` | "Chương trình đã kết thúc ngày …" |
| Trình duyệt tắt JavaScript | Lời nhắn gọi tổng đài |

Phần 7 giấy tờ luôn hiển thị trong mọi trường hợp.

## Bảo mật: cần hiểu đúng
- Web này là **web tĩnh**: mọi file trong `data/` đều **công khai**. Ai biết hoặc đoán đúng mã xã đều mở được trang hay file JSON của xã đó.
- Cách làm hiện tại giúp **tách dữ liệu từng xã** và **hạn chế lộ ra ngoài**:
  - Trang có thẻ `noindex`, nên Google không đưa vào kết quả tìm kiếm.
  - Không có trang hay file nào liệt kê tất cả các xã. **Không tạo** file danh sách chung trong `data/`.
  - Link chỉ phát qua mã QR trên tờ rơi của từng xã.
- **Không đưa vào JSON** thông tin không muốn công khai: số cá nhân không được phép đăng, ghi chú nội bộ, giá vốn…
- Nếu sau này cần ẩn hẳn giữa các xã, có hai cách:
  - Dùng mã khó đoán, ví dụ `TanNhut7K2P` → file `tannhut7k2p.json` (đồng thời cập nhật `maXa`).
  - Chuyển sang có máy chủ kiểm tra mã.

## Các file
| File | Vai trò |
|---|---|
| `index.html` | Khung trang + cụm 7 giấy tờ (Bước 1) |
| `style.css` | Giao diện riêng trang này. Cụm Bước 1 dùng chung CSS trang Quy trình đào tạo |
| `ho-so-uu-dai-theo-xa.js` | Đọc `?location=`, tải `data/<mã>.json`, điền bảng và hộp ưu đãi, xử lý lỗi/hết hạn |
| `data/<mã xã>.json` | Dữ liệu từng xã |
| `HUONG-DAN.md` | File này |

Sửa `ho-so-uu-dai-theo-xa.js` hoặc `style.css` thì đổi `?v=` trên thẻ `<script>` / `<link>` trong `index.html` để trình duyệt tải bản mới. Riêng file JSON đã luôn được tải mới, không cần đổi gì.
