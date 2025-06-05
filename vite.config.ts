import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/context/hooks'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@types': path.resolve(__dirname, 'src/utils/types'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
    },
  },
  build: {
    assetsInlineLimit: 0,
    assetsDir: 'assets',
  },
})
