import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://vendicated.dev",

    output: "static",
    adapter: cloudflare({
        imageService: "compile"
    }),
    integrations: [sitemap(), svelte(), mdx()],
});
