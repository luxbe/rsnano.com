import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			precompress: true
		}),
		prerender: {
			crawl: true
		}
	}
};

export default config;
