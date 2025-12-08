import mysql from 'mysql2'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config({ path: '.env' })

const caPath = path.resolve(process.cwd(), 'certs', 'isrgrootx1.pem')
let ca = undefined

// Try to load CA cert, but DON'T exit if missing
try {
  if (fs.existsSync(caPath)) {
    ca = fs.readFileSync(caPath)
    console.log('TLS CA loaded successfully')
  } else {
    console.warn('TLS CA not found at', caPath)
  }
} catch (err) {
  console.warn('Error loading TLS CA:', err.message)
}

export const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    port: Number(process.env.DATABASE_PORT) || 4000,
    ssl: ca ? { ca, rejectUnauthorized: true } : undefined
})

db.connect((err) => {
  if(err) {
    console.log("DB Connection Error:", err)
    return
  }
  console.log("Connected to MySQL")
})