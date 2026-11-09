/* Form "Đăng ký tư vấn" — dùng chung: trang Chương trình ưu đãi + trang chủ (dưới khối KHÓA HỌC LINH ĐỘNG) (09/11/2026).
   - Kiểm tra Họ tên / Số điện thoại / Hạng đào tạo ngay trên trình duyệt, báo lỗi bằng chữ dưới từng ô.
   - Gửi về Google Sheet qua Web App Google Apps Script: link đặt ở thuộc tính data-endpoint của <form id="uu-reg-form">.
     Hướng dẫn tạo Sheet + Apps Script: plans/handoff-form-dang-ky-uu-dai/HUONG-DAN-GOOGLE-SHEET.md
   - Chưa có link (data-endpoint="") → không gửi đi đâu, hiện số tổng đài để người xem gọi.
   - Gửi kiểu "no-cors" (Apps Script không trả CORS): trình duyệt không đọc được phản hồi,
     nên không có lỗi mạng = coi như đã gửi. Kèm tên xã (từ ?location=, xem loadArea) và đường dẫn trang để biết nguồn. */
(function () {
  "use strict";

  var form = document.getElementById("uu-reg-form");
  if (!form) return;

  var HOTLINE = "028.36.362.362";
  var HOTLINE_TEL = "tel:02836362362";

  var nameInput = form.querySelector("#uu-reg-name");
  var phoneInput = form.querySelector("#uu-reg-phone");
  var classSet = form.querySelector(".uu-reg__classes");
  var trap = form.querySelector("#uu-reg-web");
  var submitBtn = form.querySelector(".uu-reg__submit");
  var submitText = form.querySelector("[data-submit-text]");
  var statusBox = form.querySelector(".uu-reg__status");

  // "0911.739.119" / "+84 911 739 119" → "0911739119"; trả "" nếu không hợp lệ (10–11 số, bắt đầu 0)
  function normalizePhone(value) {
    var digits = String(value || "").replace(/[\s.\-()]/g, "");
    if (digits.indexOf("+84") === 0) digits = "0" + digits.slice(3);
    else if (digits.indexOf("84") === 0 && digits.length === 11) digits = "0" + digits.slice(2);
    return /^0\d{9,10}$/.test(digits) ? digits : "";
  }

  function setError(el, errId, show) {
    var err = document.getElementById(errId);
    if (err) err.hidden = !show;
    if (show) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
  }

  function checkedClass() {
    var r = form.querySelector('input[name="hangDaoTao"]:checked');
    return r ? r.value : "";
  }

  function validate() {
    var okName = nameInput.value.trim().length >= 2;
    var okPhone = !!normalizePhone(phoneInput.value);
    var okClass = !!checkedClass();
    setError(nameInput, "uu-reg-name-err", !okName);
    setError(phoneInput, "uu-reg-phone-err", !okPhone);
    setError(classSet, "uu-reg-class-err", !okClass);
    var first = !okName ? nameInput : !okPhone ? phoneInput : !okClass ? classSet.querySelector("input") : null;
    if (first) first.focus();
    return !first;
  }

  // Sửa xong ô nào thì ẩn lỗi ô đó ngay
  nameInput.addEventListener("input", function () { if (nameInput.value.trim().length >= 2) setError(nameInput, "uu-reg-name-err", false); });
  phoneInput.addEventListener("input", function () { if (normalizePhone(phoneInput.value)) setError(phoneInput, "uu-reg-phone-err", false); });
  classSet.addEventListener("change", function () { setError(classSet, "uu-reg-class-err", false); });

  // Chỉ dùng textContent + tạo thẻ <a> bằng DOM (không innerHTML) để tên người nhập không chạy thành mã
  function showStatus(kind, text, withHotline) {
    statusBox.textContent = text;
    if (withHotline) {
      var a = document.createElement("a");
      a.href = HOTLINE_TEL;
      a.textContent = HOTLINE;
      statusBox.append(" ", a, ".");
    }
    statusBox.className = "uu-reg__status " + (kind === "ok" ? "is-ok" : "is-error");
    statusBox.hidden = false;
  }

  function setBusy(busy) {
    submitBtn.disabled = busy;
    submitText.textContent = busy ? "Đang gửi…" : "Nhận tư vấn miễn phí";
  }

  // Tên xã cho cột "Xã (ưu đãi)" — đọc ?location= ở BẤT KỲ trang nào có form (trang Ưu đãi, trang chủ…).
  //   ?location=TanNhut1793756520 → mã "tannhut" → <data-xa-base>tannhut.json → tenXa "xã Tân Nhựt" → gửi "Tân Nhựt".
  //   Có location nhưng chưa có file dữ liệu → gửi tạm mã bỏ số ("TanNhut") để vẫn biết nguồn.
  //   Không có location → để trống.
  // data-xa-base trên <form>: thư mục chứa file xã, tính từ trang hiện tại (trang Ưu đãi "data/", trang chủ "chuong-trinh-uu-dai/data/").
  var areaName = "";
  (function loadArea() {
    var raw = (new URLSearchParams(window.location.search).get("location") || "").trim();
    var code = raw.toLowerCase().replace(/[-_\s]/g, "");
    if (!/^[a-z0-9]{2,40}$/.test(code)) return;
    var fileCode = code.replace(/\d+$/, "");
    if (!fileCode) return;
    areaName = raw.replace(/[-_\s]/g, "").replace(/\d+$/, "").slice(0, 80);
    var base = form.getAttribute("data-xa-base") || "data/";
    fetch(base + fileCode + ".json", { cache: "no-cache" })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || !data.tenXa || String(data.maXa || "").toLowerCase().replace(/[-_\s]/g, "") !== code) return;
        areaName = String(data.tenXa).replace(/^\s*(xã|phường|thị trấn)\s+/i, "").trim();
        // Dòng "Ưu đãi cho người dân …" trên đầu form: điền tên xã nếu trang chưa tự điền (trang chủ)
        var box = form.closest(".uu-reg");
        if (box) box.querySelectorAll("[data-ten-xa]").forEach(function (el) {
          if (!el.textContent.trim()) el.textContent = data.tenXa;
        });
      })
      .catch(function () { /* giữ mã tạm */ });
  })();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusBox.hidden = true;
    if (!validate()) return;

    // Bot điền ô ẩn → giả vờ thành công, không gửi
    if (trap && trap.value) { showStatus("ok", "Đã nhận đăng ký. Cảm ơn bạn!"); form.reset(); return; }

    var endpoint = (form.getAttribute("data-endpoint") || "").trim();
    if (!/^https:\/\//.test(endpoint)) {
      showStatus("error", "Hệ thống nhận đăng ký đang được cập nhật. Vui lòng gọi tổng đài", true);
      return;
    }

    var data = new URLSearchParams();
    data.append("hoTen", nameInput.value.trim().slice(0, 80));
    data.append("soDienThoai", normalizePhone(phoneInput.value));
    data.append("hangDaoTao", checkedClass());
    data.append("xa", areaName);
    data.append("trang", window.location.href.slice(0, 300));

    var name = nameInput.value.trim();
    setBusy(true);
    fetch(endpoint, { method: "POST", mode: "no-cors", body: data })
      .then(function () {
        form.reset();
        showStatus("ok", "Đã nhận đăng ký của " + name + ". Nhân viên tuyển sinh Hiệp Phát sẽ gọi lại cho bạn sớm. Cần gấp, gọi tổng đài", true);
      })
      .catch(function () {
        showStatus("error", "Chưa gửi được (mạng không ổn định). Vui lòng thử lại hoặc gọi tổng đài", true);
      })
      .then(function () { setBusy(false); });
  });
})();
