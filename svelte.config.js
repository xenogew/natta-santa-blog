import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import slug from 'rehype-slug';
import autoLinkHeadings from 'rehype-autolink-headings';
import remarkHeadingId from 'remark-heading-id';

const langs = ['javascript', 'typescript', 'java', 'html', 'css', 'bash', 'json', 'yaml'];

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
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs
			});
			await highlighter.loadLanguage(...langs);
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	alias: {
		$components: 'src/lib/components',
		$src: 'src'
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md', '.svx']
};

export default config;
