import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import remarkHeadingId from 'remark-heading-id';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [
		slug,
		[
			autoLinkHeadings,
			{
				behavior: 'append'
			}
		]
	],
	remarkPlugins: [remarkHeadingId]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/natta-santa' : ''
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex(mdsvexOptions),
		sveltePreprocess({
			postcss: true
		})
	],
	vitePlugin: {
		inspector: {
			holdMode: true
		}
	}
};

export default config;
