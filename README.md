# Blog Website - README

## 📝 รายละเอียดโปรเจค

**NJ Blog** เป็นแอปพลิเคชันบล็อกแบบเต็มสแต็ก (Full-stack) ที่สร้างด้วยเทคโนโลยีเว็บสมัยใหม่ ช่วยให้ผู้ใช้สามารถสร้าง อ่าน อัปเดต และลบโพสต์บล็อกจัดเรียงตามหมวดหมู่ พร้อมระบบยืนยันตัวตนและอัปโหลดรูปภาพ

## 🎯 ฟีเจอร์หลัก

- **ยืนยันตัวตน**: สมัครสมาชิกและเข้าสู่ระบบด้วยการแฮชรหัสผ่านที่ปลอดภัย
- **จัดการบล็อก**: สร้าง แก้ไข และลบโพสต์บล็อก
- **หมวดหมู่**: กรองโพสต์ตามหมวดหมู่ (ศิลปะ วิทยาศาสตร์ เทคโนโลยี ภาพยนตร์ ดีไซน์ อาหาร)
- **ตัวแก้ไขข้อความสมบูรณ์**: เขียนโพสต์ด้วยข้อความจัดรูปแบบโดยใช้ React Quill
- **อัปโหลดรูปภาพ**: อัปโหลดรูปปกสำหรับโพสต์บล็อก
- **โปรไฟล์ผู้ใช้**: แสดงข้อมูลผู้ใช้พร้อมโพสต์ของพวกเขา
- **ออกแบบที่ตอบสนอง**: อินเทอร์เฟซที่เหมาะสมกับอุปกรณ์มือถือ

## 🛠️ เทคโนโลยีที่ใช้

### Frontend (`client`)
- **React 18** - ไลบรารี UI
- **Vite** - เครื่องมือสร้าง
- **Tailwind CSS v4** - CSS Framework
- **React Router v7** - การนำทาง
- **Axios** - HTTP client
- **React Quill** - ตัวแก้ไขข้อความสมบูรณ์
- **Moment.js** - จัดรูปแบบวันที่
- **Lucide React** - ไลบรารีไอคอน
- **DOMPurify** - การล้างข้อมูล HTML

### Backend (`api`)
- **Express.js** - เฟรมเวิร์กเว็บ
- **MySQL2** - ไดรเวอร์ฐานข้อมูล
- **JWT** - โทเค็นยืนยันตัวตน
- **Bcryptjs** - การแฮชรหัสผ่าน
- **Multer** - มิดเดิลแวร์อัปโหลดไฟล์
- **Cookie Parser** - การจัดการคุกกี้

## 📁 โครงสร้างโปรเจค

```
Blog-Website/
├── api/                    # เซิร์ฟเวอร์ Backend
│   ├── controllers/        # ลอจิกธุรกิจ
│   │   ├── auth.js
│   │   ├── post.js
│   │   └── user.js
│   ├── routes/            # จุดปลายทาง API
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── users.js
│   ├── server.js          # แอป Express
│   ├── db.js              # การเชื่อมต่อ MySQL
│   ├── package.json
│   ├── vercel.json        # ตั้งค่า Vercel
│   └── upload/            # โฟลเดอร์อัปโหลด
│
└── client/                # แอป Frontend
    ├── src/
    │   ├── components/    # คอมโพเนนต์ UI
    │   │   ├── Footer.jsx
    │   │   ├── Menu.jsx
    │   │   └── NavBar.jsx
    │   ├── pages/         # หน้าเส้นทาง
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Single.jsx
    │   │   └── Write.jsx
    │   ├── context/       # Auth context
    │   │   └── authContext.jsx
    │   ├── App.jsx        # แอปหลัก
    │   ├── index.css      # สไตล์ทั่วโลก
    │   └── main.jsx
    ├── public/
    │   └── upload/
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    └── index.html
```

## 🚀 เริ่มต้นใช้งาน

### ข้อกำหนดเบื้องต้น
- Node.js (v16+)
- ฐานข้อมูล MySQL
- npm หรือ yarn

### การติดตั้ง

#### 1. ตั้งค่า Backend
```bash
cd api
npm install
```

สร้างไฟล์ `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog
JWT_SECRET=your_secret_key
PORT=8000
```

#### 2. ตั้งค่า Frontend
```bash
cd client
npm install
```

สร้างไฟล์ `.env`:
```
VITE_API_URL=http://localhost:8000
```

#### 3. รันเซิร์ฟเวอร์พัฒนา

**Backend** (จากโฟลเดอร์ `api`):
```bash
npm run dev
```
เซิร์ฟเวอร์ทำงานที่ `http://localhost:8000`

**Frontend** (จากโฟลเดอร์ `client`):
```bash
npm run dev
```
Frontend ทำงานที่ `http://localhost:5173`

## 📚 จุดปลายทาง API

### โพสต์
- `GET /api/posts` - ดึงโพสต์ทั้งหมด
- `GET /api/posts/:id` - ดึงโพสต์เดี่ยว
- `POST /api/posts` - สร้างโพสต์ (ต้องยืนยันตัวตน)
- `PUT /api/posts/:id` - อัปเดตโพสต์ (ต้องยืนยันตัวตน)
- `DELETE /api/posts/:id` - ลบโพสต์ (ต้องยืนยันตัวตน)

### ยืนยันตัวตน
- `POST /api/auth/register` - สมัครสมาชิก
- `POST /api/auth/login` - เข้าสู่ระบบ
- `POST /api/auth/logout` - ออกจากระบบ

### ผู้ใช้
- `GET /api/users/:id` - ดึงข้อมูลผู้ใช้
- `PUT /api/users/:id` - อัปเดตข้อมูลผู้ใช้ (ต้องยืนยันตัวตน)

### อัปโหลด
- `POST /api/upload` - อัปโหลดไฟล์รูปภาพ

## 🔐 ระบบยืนยันตัวตน

- รหัสผ่านแฮชด้วย **bcryptjs**
- โทเค็น JWT เก็บไว้ในคุกกี้ HTTP-only
- เส้นทางที่ป้องกันต้องใช้โทเค็นที่ถูกต้อง

## 🎨 สไตล์

Tailwind CSS พร้อม utilities ที่กำหนดเอง:
- `main-button` - ปุ่มหลักพร้อมเอฟเฟกต์แสง
- `text-glow` - เอฟเฟกต์แสงเงา
- `container` - คอนเทนเนอร์ที่ตอบสนอง
- `card-hover` - แอนิเมชันการโฮเวอร์

## 👨‍💻 หน้าที่ของไฟล์หลัก

| ไฟล์ | หน้าที่ |
|------|--------|
| `api/server.js` | ตั้งค่าและรัน Express server |
| `api/db.js` | การเชื่อมต่อฐานข้อมูล MySQL |
| `client/src/App.jsx` | กำหนดค่าเส้นทางหลัก |
| `client/src/context/authContext.jsx` | ระบบจัดการสถานะการยืนยันตัวตน |
| `client/src/pages/Home.jsx` | หน้าแรกแสดงรายการโพสต์ |
| `client/src/pages/Write.jsx` | หน้าสร้างและแก้ไขโพสต์ |
| `client/src/pages/Single.jsx` | หน้าแสดงโพสต์เดี่ยว |

## 🌐 ตัวแปรสภาพแวดล้อม

### Backend (`.env`)
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog
JWT_SECRET=your_secret_key_here
PORT=8000
NODE_ENV=development
```

### Frontend (`.env`)
```
VITE_API_URL=http://localhost:8000
```

## 📝 ลิขสิทธิ์

ISC

---

**สร้างเมื่อ**: December 8, 2025