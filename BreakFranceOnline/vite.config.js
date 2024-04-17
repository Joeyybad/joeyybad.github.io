import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'bootstrap': 'bootstrap/dist/js/bootstrap.bundle.js', // Alias pour le fichier JavaScript de Bootstrap
      'bootstrap-css': 'bootstrap/dist/css/bootstrap.min.css' // Alias pour le fichier CSS de Bootstrap
    }
  }
})
