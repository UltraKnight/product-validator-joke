import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/product-validator-joke/',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: () => 'app',
      },
    },
  },
});
