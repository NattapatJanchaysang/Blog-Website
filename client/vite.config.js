import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// ...existing code...
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://blogserver-sepia.vercel.app/api/posts',
        changeOrigin: true,
        secure: false,
      },
      // ถ้าต้องการ proxied endpoint เพิ่มที่นี่ เช่น '/posts': { target: 'http://localhost:8000' }
    }
  }
})
// ...existing code...