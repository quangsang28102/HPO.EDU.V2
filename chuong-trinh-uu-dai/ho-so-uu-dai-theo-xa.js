/* Chương trình ưu đãi theo xã — đọc ?location=<mã xã> rồi điền bảng "Nơi nhận hồ sơ" và hộp ưu đãi
   từ data/<mã xã>.json. Hướng dẫn thêm xã / sửa dữ liệu: HUONG-DAN.md cùng thư mục.

   Mã xã không phân biệt hoa thường và bỏ qua dấu gạch: TanNhut = tannhut = tan-nhut → data/tannhut.json
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

  function showMessage(title, text, hotline) {
    if (loading) loading.hidden = true;
    content.hidden = true;
    $("[data-thong-bao-tieu-de]").textContent = title;
    $("[data-thong-bao-noi-dung]").textContent = text;
    if (hotline) setHotline(hotline);
    message.hidden = false;
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
    if (!data.tenXa || !places.length) throw new Error("Thiếu tenXa hoặc diemNhanHoSo");

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

    $("[data-hoc-phi]").textContent = formatMoney(data.hocPhiUuDai);
    $("[data-ngay-ket-thuc]").textContent = formatDate(data.ngayKetThuc);
    var hang = $("[data-hang-xe]");
    if (data.hangXeApDung) { hang.textContent = "Áp dụng cho " + data.hangXeApDung + "."; hang.hidden = false; }

    if (loading) loading.hidden = true;
    message.hidden = true;
    content.hidden = false;
  }

  var raw = new URLSearchParams(window.location.search).get("location") || "";
  var code = raw.toLowerCase().replace(/[-_\s]/g, "");
  if (!code) {
    return showMessage("Chưa chọn địa phương", "Vui lòng quét lại mã QR trên tờ rơi của xã bạn, hoặc gọi tổng đài để được hướng dẫn.");
  }
  if (!/^[a-z0-9]{2,40}$/.test(code)) {
    return showMessage("Không tìm thấy chương trình", "Đường dẫn chưa đúng. Vui lòng quét lại mã QR trên tờ rơi hoặc gọi tổng đài.");
  }

  fetch("data/" + code + ".json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(render)
    .catch(function (err) {
      console.warn("Không tải được dữ liệu ưu đãi cho", code, err);
      showMessage("Không tìm thấy chương trình", "Chưa có chương trình ưu đãi cho địa phương này. Vui lòng quét lại mã QR trên tờ rơi hoặc gọi tổng đài.");
    });
})();
