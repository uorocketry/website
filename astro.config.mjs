import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import node from "@astrojs/node";

export default defineConfig({
    integrations: [
        mdx(),
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
    ],
    adapter: node({
        mode: "standalone",
    }),
});
