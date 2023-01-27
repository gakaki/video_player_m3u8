import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import deno from '@astrojs/deno';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), vue()],
  output: 'server',
  adapter: deno()
});