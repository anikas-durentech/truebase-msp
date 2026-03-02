import vercelAdapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const configuration = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: vercelAdapter()
    }
}

export default configuration;
