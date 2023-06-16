import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import analogjsangular from "@analogjs/astro-angular";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs(), preact(), svelte(), vue(), analogjsangular(), alpinejs(), tailwind()],
  output: "server",
  adapter: vercel()
});