import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This points Netlify to this directory to serve as a page.
  base: '/cv-application/',
  plugins: [react()],
})
