// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: ['psenicova.local'],
    },
    build: {
      // Enable compression for static assets
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },

  adapter: vercel(),
});
