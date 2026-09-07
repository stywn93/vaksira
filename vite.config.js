import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    define: {
      'import.meta.env.VITE_API_PATH': JSON.stringify(
        env.VITE_API_PATH || '/api'
      )
    },
    server: {
      allowedHosts: [".ngrok-free.dev"],
      proxy: {
        "/api": {
          target: env.VITE_API_TARGET || "http://localhost",
          changeOrigin: true,
        },
      },
    }
  }
})
