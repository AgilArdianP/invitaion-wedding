import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/invitaion-wedding/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});