import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/wedding-invitaion/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});