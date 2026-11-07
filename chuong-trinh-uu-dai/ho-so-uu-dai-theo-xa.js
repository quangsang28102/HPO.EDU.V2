/* Chương trình ưu đãi theo xã — đọc ?location=<mã xã> rồi điền bảng "Nơi nhận hồ sơ" và hộp ưu đãi
   từ data/<mã xã>.json. Hướng dẫn thêm xã / sửa dữ liệu: HUONG-DAN.md cùng thư mục.

   Mã xã không phân biệt hoa thường và bỏ qua dấu gạch, gạch dưới, khoảng trắng.
   Hậu tố số không thuộc tên file: TanNhut1793756520 → data/tannhut.json.
   Mã trên link phải khớp maXa trong JSON trước khi hiển thị dữ liệu.
   (tên file luôn chữ thường, không dấu, không gạch, vì máy chủ web thường phân biệt hoa thường).
   Chỉ nhận chữ a–z và số 0–9 nên không thể dùng tham số để đọc file khác ngoài thư mục data/.
   Dữ liệu JSON chỉ được gán bằng textContent (không innerHTML) để chữ trong file không chạy được thành mã. */
(function () {
  "use strict";

  var root = document.getElementById("dia-diem");
  if (!root) return;

  var $ = function (sel) { return root.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); };
  var loading = $("[data-dang-tai]");
  var content = $("[data-noi-dung]");
  var message = $("[data-thong-bao]");
  var offer = $(".tn-offer");

  // Phần tử có thể bị bỏ khỏi HTML khi chỉnh giao diện → gán an toàn, không văng lỗi làm ẩn cả bảng
  function setText(sel, text) { var el = $(sel); if (el) el.textContent = text; }
  function setHidden(el, hidden) { if (el) el.hidden = hidden; }

  function showMessage(title, text, hotline) {
    setHidden(loading, true);
    setHidden(content, true);
    setHidden(offer, true); // lỗi / tạm dừng / hết hạn → không hiện hộp ưu đãi
    setText("[data-thong-bao-tieu-de]", title);
    setText("[data-thong-bao-noi-dung]", text);
    if (hotline) setHotline(hotline);
    setHidden(message, false);
  }

  function telHref(phone) { return "tel:" + String(phone).replace(/[^\d+]/g, ""); }

  function setHotline(phone) {
    var link = $("[data-tong-dai]");
    if (!link || !phone) return;
    link.href = telHref(phone);
    link.querySelector(".tn-call__num").textContent = phone;
  }

  // "2026-12-31" → Date cuối ngày đó theo giờ máy người xem
  function endOfDay(iso) { var d = new Date(iso + "T23:59:59"); return isNaN(d) ? null : d; }
  function startOfDay(iso) { var d = new Date(iso + "T00:00:00"); return isNaN(d) ? null : d; }
  function formatDate(iso) { var p = String(iso).split("-"); return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : iso; }
  function formatMoney(n) { return Number(n).toLocaleString("vi-VN") + " VNĐ"; }

  function callButton(phone) {
    var a = document.createElement("a");
    a.className = "tn-call";
    a.href = telHref(phone);
    var hint = document.createElement("span");
    hint.className = "tn-call__hint";
    hint.textContent = "Bấm để gọi";
    var num = document.createElement("span");
    num.className = "tn-call__num";
    num.textContent = phone;
    a.append(hint, num);
    return a;
  }

  function cell(label, child) {
    var td = document.createElement("td");
    td.setAttribute("data-label", label);
    if (typeof child === "string") td.textContent = child; else td.append(child);
    return td;
  }

  function render(data) {
    var places = Array.isArray(data.diemNhanHoSo) ? data.diemNhanHoSo : [];
    if (!data.tenXa) throw new Error("Thiếu tenXa");

    $$("[data-ten-xa]").forEach(function (el) { el.textContent = data.tenXa; });
    document.title = "Chương trình ưu đãi học lái xe – " + data.tenXa + " | Hiệp Phát";
    setHotline(data.tongDai);

    // Chưa mở / tạm dừng / hết hạn → chỉ thông báo, không hiện giá và địa điểm
    var now = new Date();
    var start = data.ngayBatDau ? startOfDay(data.ngayBatDau) : null;
    var end = data.ngayKetThuc ? endOfDay(data.ngayKetThuc) : null;
    if (data.trangThai !== "dang-mo") {
      return showMessage("Chương trình đang tạm dừng", "Chương trình ưu đãi tại " + data.tenXa + " đang tạm dừng. Vui lòng gọi tổng đài để được tư vấn.", data.tongDai);
    }
    if (start && now < start) {
      return showMessage("Chương trình chưa bắt đầu", "Chương trình ưu đãi tại " + data.tenXa + " bắt đầu từ ngày " + formatDate(data.ngayBatDau) + ".", data.tongDai);
    }
    if (end && now > end) {
      return showMessage("Chương trình đã kết thúc", "Chương trình ưu đãi tại " + data.tenXa + " đã kết thúc ngày " + formatDate(data.ngayKetThuc) + ". Vui lòng gọi tổng đài để biết chương trình hiện có.", data.tongDai);
    }

    var tbody = $("[data-bang-dia-diem]");
    tbody.textContent = "";
    places.forEach(function (p) {
      var tr = document.createElement("tr");
      tr.append(
        cell("Địa điểm", String(p.diaDiem || "")),
        cell("Người liên hệ", String(p.nguoiLienHe || "")),
        cell("Số điện thoại", callButton(String(p.soDienThoai || "")))
      );
      tbody.append(tr);
    });

    setText("[data-hoc-phi]", formatMoney(data.hocPhiUuDai));
    setText("[data-ngay-ket-thuc]", formatDate(data.ngayKetThuc));
    var hang = $("[data-hang-xe]");
    if (hang && data.hangXeApDung) { hang.textContent = "Áp dụng cho " + data.hangXeApDung + "."; hang.hidden = false; }

    setHidden(loading, true);
    setHidden(message, true);
    setHidden(content, true);
    setHidden(offer, false);
  }

  function normalizeCode(value) { return String(value || "").toLowerCase().replace(/[-_\s]/g, ""); }

  var raw = new URLSearchParams(window.location.search).get("location") || "";
  var code = normalizeCode(raw);
  if (!code) {
    // URL không chọn xã: giữ hộp ưu đãi mặc định trong HTML, không hiện bảng.
    setHidden(loading, true);
    setHidden(content, true);
    setHidden(message, true);
    setHidden(offer, false);
    return;
  }
  if (!/^[a-z0-9]{2,40}$/.test(code)) {
    return showMessage("Không tìm thấy chương trình", "Đường dẫn chưa đúng. Vui lòng quét lại mã QR trên tờ rơi hoặc gọi tổng đài.");
  }

  var fileCode = code.replace(/\d+$/, "");
  if (!fileCode) {
    return showMessage("Không tìm thấy chương trình", "Đường dẫn chưa đúng. Vui lòng quét lại mã QR trên tờ rơi hoặc gọi tổng đài.");
  }

  fetch("data/" + fileCode + ".json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      if (normalizeCode(data.maXa) !== code) throw new Error("Mã xã không khớp");
      render(data);
    })
    .catch(function (err) {
      console.warn("Không tải được dữ liệu ưu đãi cho", code, err);
      showMessage("Không tìm thấy chương trình", "Chưa có chương trình ưu đãi cho địa phương này. Vui lòng quét lại mã QR trên tờ rơi hoặc gọi tổng đài.");
    });
})();
