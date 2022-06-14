import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@util': resolve(__dirname, './src/utils'),
      '@page': resolve(__dirname, './src/pages'),
      '@comp': resolve(__dirname, './src/components'),
      '@data': resolve(__dirname, './src/data'),
    },
  },
})
