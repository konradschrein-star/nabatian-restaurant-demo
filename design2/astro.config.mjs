import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nabatian.de',
  build: {
    format: 'file'  // Generate relative paths for subdirectory deployment
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sanity({
      projectId: 'webste-nabatian',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
    }),
    sitemap()
  ]
});
