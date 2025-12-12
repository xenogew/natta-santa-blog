import type { MarkdownPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const { tag } = params;
	const response = await fetch(`/api/posts`);
	const data = await response.json();
	const allPosts: MarkdownPost[] = data.posts;
	const posts = allPosts.filter((post) => post.tags.includes(tag));
	return {
		tag,
		posts,
	};
}) satisfies PageLoad;
