import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Aliases for cleaner imports
    },
  },
  build: {
    rollupOptions: {
      input: './src/main.jsx',  // Ensure Rollup knows where the entry point is
    },
  },
  server: {
    port: 3000,  // Customize port if needed
    open: true,  // Automatically open in browser
  },
  base: '/', // Adjust if deploying to a subdirectory (for example: '/my-app/')
})
