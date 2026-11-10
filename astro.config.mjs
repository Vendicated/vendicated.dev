import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://vendicated.dev",

    output: "static",
    adapter: cloudflare({
        imageService: "compile"
    }),
    integrations: [sitemap(), svelte(), mdx()],

    vite: {
        build: {
            sourcemap: true
        },
        ssr: {
            // https://github.com/withastro/astro/issues/9192
            external: ["prismjs"]
        }
    }
});
