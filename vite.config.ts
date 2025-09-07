import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  base: 'frontend-mentor-social-links-profile-solution',
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80
      },
      jpeg: {
        quality: 75
      }
    }),
    viteCompression({
      filter: /\.(js|css|html|json|svg)$/,
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ]
})
