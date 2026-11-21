# 🇷🇺 WEB HỌC TIẾNG NGA TOÀN DIỆN (FLAT DESIGN & PURE JAVASCRIPT)

Ứng dụng web học tiếng Nga hiện đại, thiết kế theo ngôn ngữ **Modern Flat Design**, hoạt động 100% bằng **HTML5, CSS3 và Vanilla JavaScript**, không cần backend phức tạp.

---

## 🌟 1. Tính năng nổi bật
1. **Lộ trình học theo chuẩn TRKI (A1 -> C1):**
   - Phân cấp bài học từ Căn bản (A1), Sơ cấp (A2), Trung cấp (B1) đến Cao cấp (B2-C1).
   - Nội dung giải thích chi tiết ngữ âm, biến cách 6 cách, thể động từ, động từ chuyển động, phân từ, trạng từ động từ và văn phong dịch thuật.
2. **Hệ thống Luyện tập & Đề thi tương tác:**
   - Hàng chục câu hỏi phong phú phân theo từng cấp độ và chủ đề ngữ pháp.
   - Chấm điểm ngay lập tức với hệ thống phản hồi giải thích ngữ pháp chi tiết.
   - Thang đo đánh giá năng lực chuẩn thi TRKI.
3. **📊 TÍNH NĂNG XUẤT KẾT QUẢ BẰNG CSV CHUẨN UTF-8:**
   - Cho phép xuất trực tiếp kết quả bài làm ra file `.csv` ngay sau khi làm xong hoặc xuất toàn bộ lịch sử học tập.
   - **Tích hợp UTF-8 BOM (`\uFEFF`)**: Cam kết khi mở bằng Microsoft Excel trên Windows/Mac hoặc tải lên Google Sheets sẽ **không bao giờ bị lỗi font** chữ Cyrillic tiếng Nga hay tiếng Việt có dấu.
   - Cung cấp đầy đủ thông tin: Mã câu hỏi, Cấp độ, Chủ đề ngữ pháp, Nội dung câu hỏi, Câu trả lời của người học, Đáp án chính xác, Trạng thái (ĐÚNG/SAI), Điểm số và Giải thích.
4. **Flashcards từ vựng tương tác:**
   - Lật thẻ 3D phẳng trực quan kèm dấu trọng âm, phiên âm quốc tế IPA, từ loại, nghĩa tiếng Việt và ví dụ câu.
   - Tích hợp phát âm giọng đọc tiếng Nga bản xứ qua Web Speech API.
5. **Bảng tra cứu ngữ pháp nhanh:**
   - Bảng biến cách 6 cách danh từ số ít (Nam, Nữ, Trung).
   - Bảng tiếp đầu ngữ không gian của động từ chuyển động.
6. **Lưu trữ & Thống kê cá nhân:**
   - Tự động lưu tiến độ vào `localStorage` của trình duyệt mà không cần tài khoản hay cơ sở dữ liệu backend.

---

## 🚀 2. Hướng dẫn chạy ứng dụng

### Cách 1: Chạy Server cấu hình trực tiếp tại `127.0.0.1:8080` (Khuyên dùng)
- **Nhấp đúp chuột vào file:** `web-russian-lang/start_server.bat`
- Hoặc mở terminal và chạy lệnh:
  ```powershell
  cd "web-russian-lang"
  python serve.py
  ```
- Trình duyệt sẽ mở trực tiếp tại địa chỉ: **[http://127.0.0.1:8080](http://127.0.0.1:8080)**

### Cách 2: Chạy trực tiếp qua module http.server chuẩn của Python
  ```powershell
  cd "web-russian-lang"
  python -m http.server 8080 --bind 127.0.0.1
  ```
  Sau đó mở trình duyệt và truy cập: **[http://127.0.0.1:8080](http://127.0.0.1:8080)**

### Cách 3: Mở trực tiếp file tĩnh không cần server
- Nhấp đúp chuột trực tiếp vào tệp `index.html` trong thư mục `web-russian-lang/`.

---

## 📁 3. Cấu trúc mã nguồn

```
web-russian-lang/
│
├── index.html          # Giao diện chính với cấu trúc ngữ nghĩa HTML5 & tabs
├── serve.py            # Máy chủ HTTP chuẩn gắn trực tiếp 127.0.0.1:8080
├── start_server.bat    # File kích hoạt 1-click trên Windows
├── css/
│   └── style.css       # Hệ thống định kiểu Modern Flat UI chuẩn mực
├── js/
│   ├── data.js         # Cơ sở dữ liệu bài học, ngân hàng câu hỏi, flashcards & ngữ pháp
│   └── app.js          # Bộ điều khiển logic, bài tập, chấm điểm, lưu trữ & xuất CSV
└── README.md           # Tài liệu hướng dẫn sử dụng
```

## 👨‍💻 4. Thông tin Tác giả & Người thiết kế (Информация о разработчике)

- **Họ và tên:** Tran Quoc Minh (Phiên âm tiếng Nga: **Чан Куок Минь**)
- **Vai trò:** Веб-разработчик и создатель сайта (Nhà phát triển & Thiết kế hệ thống)
- **Email (Электронная почта):** [mtranquoc77@gmail.com](mailto:mtranquoc77@gmail.com)
- **GitHub (Гитхаб):** [Mercenarya](https://github.com/Mercenarya)
- **Số điện thoại (Телефон):** `0766709535` (Quốc tế: `+84 766 709 535`)



