/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    coverage: {
      reporter: ['text', 'html'],
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
})

