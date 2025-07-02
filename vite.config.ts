import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
// @ts-ignore
import { imagetools } from 'vite-imagetools';
// @ts-ignore - plugin has no type definitions
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    // Image optimisation at build
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.6, 0.8] },
      // @ts-expect-error - vite-plugin-imagemin types
      svgo: {},
      webp: { quality: 70 },
      avif: { quality: 50 },
    }),
    imagetools(),
  ],
})
