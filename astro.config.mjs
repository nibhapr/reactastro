// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: 'https://bondsign.ae',
  vite: {
    css: {
      postcss: {
        plugins: [],
      },
    },
  },
  integrations: [tailwind(), react(), 
    sitemap({


  })],
});