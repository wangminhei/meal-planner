# AI Meal Planner - Thực đơn gia đình Việt Nam (Vị Nam Trung Bộ)

Hệ thống Next.js tự động lên thực đơn hàng ngày cho gia đình với điểm nhấn là ẩm thực miền Nam Trung Bộ (hơn 500+ món ăn phong phú). Hệ thống tự lấy 1 món mặn, 1 món rau, 1 món canh, 1 món phụ sao cho cân bằng dinh dưỡng.

## Đặc điểm nổi bật
- **Thuật toán không trùng lặp:** Lưu lại lịch sử 7 ngày (28 món) trong LocalStorage để đảm bảo trong suốt 1 tuần bạn không phải ăn lại món cũ.
- **Chuẩn vị miền Trung:** Cung cấp thông tin mẹo nấu ăn đặc thù (mắm ruột, củ nén, mắm nêm, kho ngót...).
- **Tiện dụng trên Mobile:** Giao diện tối giản, phong cách ấm cúng, tương thích mọi loại điện thoại.

## Cách chạy trên máy tính của bạn (Local)
Yêu cầu đã cài đặt [Node.js](https://nodejs.org/).

1. Mở Terminal / PowerShell trong thư mục này.
2. Cài đặt thư viện: `npm install`
3. Khởi động ứng dụng: `npm run dev`
4. Mở trình duyệt truy cập: [http://localhost:3000](http://localhost:3000)

## Cách đẩy lên Web miễn phí (Github & Vercel)
Vì ứng dụng chỉ sử dụng LocalStorage (không ghi file server) nên cực kì hoàn hảo để host trên Vercel miễn phí.

1. **Tạo tài khoản Github:** Đưa thư mục code này lên một repository mới (Public/Private đều được).
2. **Tạo tài khoản Vercel:** Truy cập [Vercel.com](https://vercel.com/) và đăng nhập bằng tài khoản Github ở bước 1.
3. Nhấp `Add New Project`, chọn Repository chứa mã nguồn này.
4. Nhấp `Deploy`. Chưa đầy 1 phút, bạn sẽ có một đường link trang web dùng riêng cho mình ở bất cứ đâu!

---
*Mẹo: Nếu bạn muốn tự thêm món, bạn có thể chỉnh sửa file `data/recipes.json` hoặc mở file `scripts/generator.mjs` thêm nguyên liệu và chạy lại lệnh `node scripts/generator.mjs`.*
