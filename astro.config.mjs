// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://benincasadev.vercel.app',
  integrations: [sitemap({ filter: (page) => !page.includes('/gracias') })],
  vite: {
    plugins: [tailwindcss()]
  }
});