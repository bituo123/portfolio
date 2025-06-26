import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'



export default defineConfig({
  base: './',
  server: {host: '0.0.0.0',port: 6001,},
  resolve: {alias: {'@': path.resolve(import.meta.dirname, 'src'),},},
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
});
