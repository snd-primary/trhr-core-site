// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { rehypeRemoveFirstHeading } from "./src/lib/rehype-remove-first-heading";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [rehypeRemoveFirstHeading],
    remarkPlugins: [],
  },

  integrations: [react()],
});
