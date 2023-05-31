import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import analogjsangular from "@analogjs/astro-angular";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs(), preact(), svelte(), vue(), analogjsangular(), lit()]
});