import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import vercel from '@astrojs/vercel/static';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fanhypnose.fr',
  integrations: [tailwind(), image(), sitemap()],
  output: 'static',
  adapter: vercel({
    analytics: true,
  }),
});
