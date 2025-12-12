## Blog Website (MERN + Cloudinary)

เว็บบล็อกเต็มระบบ แยก frontend (Vite/React) และ backend (Express + MySQL) และยืนยันตัวตนด้วย JWT cookie
Live Demo: [blogserver-sepia.vercel.app](https://blogserver-sepia.vercel.app)

### สรุปฟีเจอร์
- บัญชีผู้ใช้: สมัคร, ล็อกอิน, ล็อกเอาต์, cookie httpOnly ปลอดภัย
- โพสต์: สร้าง/แก้ไข/ลบ/อ่าน, จัดหมวดหมู่, ตัวแก้ไข Rich Text (React Quill)
- UI: React Router, Lucide icons, Tailwind utility styles (ผ่านไฟล์ CSS ในโปรเจ็กต์)

### โครงสร้างโปรเจ็กต์
- api/ : โค้ดฝั่งเซิร์ฟเวอร์ Express
- client/ : โค้ดฝั่งเว็บ React (Vite)

### การตั้งค่า Environment Variables
สร้างไฟล์ `.env` ในโฟลเดอร์ `api/` (ใช้ค่าจริงของคุณ)

```
DATABASE_HOST=...
DATABASE_USER=...
DATABASE_PASSWORD=...
DATABASE_DATABASE=...
DATABASE_PORT=3306
JWT_SECRET=jwtkey

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

สำหรับ `client/` ให้ตั้งใน `.env` (หรือบน Vercel) เช่น

```
VITE_API_URL=https://your-backend-domain
VITE_CLERK_PUBLISHABLE_KEY=...
```

### การรันฝั่ง Backend (api/)
1) ติดตั้งแพ็กเกจ: `npm install`
2) เริ่ม dev: `npm run dev` (ใช้ nodemon)
3) API หลัก: `/api/posts`, `/api/auth`, `/api/users`, และ `/api/upload`

### การรันฝั่ง Frontend (client/)
1) ติดตั้งแพ็กเกจ: `npm install`
2) เริ่ม dev: `npm run dev`
3) เปิดเบราว์เซอร์ที่พอร์ตที่ Vite แจ้ง (ปกติ 5173)

### การดีพลอย (แนวทางย่อ)
- Backend: ดีพลอยบน Vercel/Render ฯลฯ พร้อมตั้ง environment และเปิด `app.set('trust proxy', 1)` (มีในโค้ดแล้ว) เพื่อให้ secure cookie ทำงานหลัง proxy
- Frontend: ตั้ง `VITE_API_URL` ชี้โดเมน backend และ redeploy

### ทดสอบพื้นฐาน
- สมัคร → ล็อกอิน → โพสต์ใหม่พร้อมอัปโหลดรูป → ตรวจว่ารูปขึ้นและโพสต์แสดงในหน้า Home/Single
- แก้ไข/ลบโพสต์ของตนเองต้องแน่ใจว่า cookie ถูกส่ง (withCredentials เปิดในโค้ดแล้ว)

### ปัญหาที่พบบ่อย
- 401 กับการสร้างโพสต์: ตรวจว่าได้ล็อกอินและเบราว์เซอร์ส่ง cookie (CORS ต้องตรงโดเมน)
- 500 ตอนอัปโหลด: เช็กค่า Cloudinary ใน env และขนาดไฟล์ไม่เกินลิมิตของโฮสต์
