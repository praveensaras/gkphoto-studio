import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/gkphoto-studio/',
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// })
// @ts-ignore
export default defineConfig({
  base: '/gkphoto-studio/',  // Ye line add karo
  plugins: [react()],
});
