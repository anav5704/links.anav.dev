import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */

const config = {
    preprocess: vitePreprocess(),
    kit: {
        alias: {
            "@/*": "./src/*"
        },
        adapter: adapter()
    }
};

export default config;
