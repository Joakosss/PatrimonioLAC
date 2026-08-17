// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tallerhistoria-lac.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
