import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/2024-p2b-web-projekt-VojtechKrupka/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        trending: resolve(__dirname, 'trending.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});