import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion', '@react-spring/web'],
          ui: ['@mui/material', '@mui/icons-material', 'lucide-react'],
          data: ['@supabase/supabase-js', 'axios'],
          vendor: ['sweetalert2', 'aos', 'gsap', 'typewriter-effect'],
        },
      },
    },
  },
})
