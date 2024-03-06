import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/admission': {
        target: "http://localhost:4000/",
        changeOrigin: true,
       secure:false
      },
      '/products': {
        target: "http://localhost:4000/",
        changeOrigin: true,
       secure:false
      },
    },
  }
})
