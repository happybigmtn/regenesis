import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      components: "./src/lib/components",
      assets: "./src/assets",
      utils: "./src/lib/utils",
      types: "./src/lib/types",
    },
  },
};

export default config;
