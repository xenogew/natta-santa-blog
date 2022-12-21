import type { PageLoad } from './$types';

export const load = (async ({ params }): Promise<BlogPost> => {
	const post = await import(`../${params.slug}.md`);
	const { title, date, tags } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
		tags
	};
}) satisfies PageLoad;
