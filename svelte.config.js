import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
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
	remarkPlugins: [remarkHeadingId],
	Highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'java']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'java');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\`}`;
		}
	},
	schema: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			description: { type: 'string' }
		}
	}
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
