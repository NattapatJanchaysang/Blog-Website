import mysql from 'mysql2'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

dotenv.config({ path: '.env' })

const caPath = path.resolve(process.cwd(), 'certs', 'isrgrootx1.pem')
let ca
try {
  ca = fs.readFileSync(caPath)
} catch (err) {
  console.error('TLS CA not found at', caPath)
  console.error('Download the TiDB Cloud CA and place it at api/certs/isrgrootx1.pem')
  process.exit(1)
}

export const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    port: Number(process.env.DATABASE_PORT) || 4000,
    ssl: {
      ca,
      rejectUnauthorized: true
    }
})

db.connect((err) => {
  if(err) {
    console.log("DB Connection Error:", err)
    return
  }
  console.log("Connected to MySQL")
})