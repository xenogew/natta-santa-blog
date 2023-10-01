import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		purgeCss({
			safelist: {
				// any selectors that begin with "hljs-" will not be purged
				greedy: [/^hljs-/]
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
