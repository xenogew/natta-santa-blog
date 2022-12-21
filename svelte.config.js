import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md']
		}),
		preprocess({
			postcss: true
		})
	],
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true
			}
		}
	}
};

export default config;
