import type { PageLoad } from './$types';
import type { BlogPost } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }): Promise<BlogPost> => {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, tags } = post.metadata;
		const Content = post.default;

		return {
			Content,
			title,
			date,
			tags
		};
	} catch (e) {
		throw error(404, `Could not find blog post /blog/${params.slug}`);
	}
}) satisfies PageLoad;
