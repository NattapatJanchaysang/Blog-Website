import express from 'express'
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from 'cookie-parser'
import multer from 'multer'
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cors from 'cors'

const app = express()
const PORT= 8000

// behind Vercel/other proxies we need this so secure cookies + IPs work
app.set('trust proxy', 1)

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog_app', // ชื่อโฟลเดอร์ที่จะไปโผล่ใน Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});


app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: ["https://njblog-seven.vercel.app", "http://localhost:5173"], // อนุญาต Frontend ของคุณ (ทั้งบนเว็บและ localhost)
  methods: ["GET", "POST", "PUT", "DELETE"], // อนุญาต method อะไรบ้าง
  credentials: true // ถ้ามีการส่ง cookie/token ต้องเปิดตัวนี้
}))


const upload = multer({ storage: storage });

// 3. แก้ Route Upload
app.post("/api/upload", upload.single("file"), function (req, res) {
  // Cloudinary จะส่ง path รูปกลับมาใน req.file.path (เป็น URL เต็มๆ เช่น https://res.cloudinary...)
  if (!req.file) {
      return res.status(400).json("No file uploaded");
  }
  res.status(200).json(req.file.path); 
}, (err, req, res, next) => {
  console.error("Upload failed", err);
  return res.status(500).json("Upload failed");
});


app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {console.log(`Server has started on:${PORT}`)})