import { json } from '@sveltejs/kit';
import matter from 'gray-matter';

export const prerender = true;

const patterns: Record<string, RegExp> = {
	frontmatter: /---.*?---/gs,
	code: /```.*?\n|```/gs,
	inline: /`([^`]*)`/g,
	heading: /^#{1,6}\s.*$/gm,
	link: /\[([^\]]+)\]\(([^)]+)\)/g,
	image: /!\[.*?\]\(.*?\)/g,
	blockquote: /> /gm,
	bold: /\*\*/g,
	italic: /\b_([^_]+)_(?!\w)/g,
	special: /{%.*?%}/g,
	tags: /[<>]/g,
};

const htmlEntities: Record<string, string> = {
	'<': '&lt;',
	'>': '&gt;',
};

function stripMarkdown(markdown: string): string {
	for (const pattern in patterns) {
		switch (pattern) {
			case 'inline':
				markdown = markdown.replace(patterns[pattern], '$1');
				break;
			case 'tags':
				markdown = markdown.replace(patterns[pattern], (match) => htmlEntities[match]);
				break;
			case 'link':
				markdown = markdown.replace(patterns[pattern], '$2');
				break;
			case 'italic':
				markdown = markdown.replace(patterns[pattern], '$1');
				break;
			default:
				markdown = markdown.replace(patterns[pattern], '');
		}
	}

	return markdown;
}

export async function GET() {
	const paths = import.meta.glob<string>('/blog/**/*.md', {
		query: '?raw',
		eager: true,
		import: 'default',
	});
	const posts = Object.entries(paths)
		.map(([, content]) => {
			const { data } = matter(content);

			if (!data.published) {
				return null;
			}

			return {
				title: data.title,
				slug: data.slug,
				content: stripMarkdown(content),
			};
		})
		.filter(Boolean);

	return json(posts);
}
