import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts: ['mkp1qr-ip-190-242-142-73.tunnelmole.net']
  }
})
