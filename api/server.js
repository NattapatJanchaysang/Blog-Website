import express from 'express'
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"


const app = express()
const PORT= 8000


app.use(express.json())


app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {console.log(`Server has started on:${PORT}`)})