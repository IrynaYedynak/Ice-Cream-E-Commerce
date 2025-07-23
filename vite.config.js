import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // обов’язково для тестування компонентів
    globals: true,        // щоб працювали expect, describe, test без імпорту
  }
})

