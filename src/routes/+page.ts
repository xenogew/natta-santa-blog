import type { BlogPostsResponse, MarkdownPost } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/posts?page=1&limit=12`);
	const { posts, total, hasMore } = (await response.json()) as BlogPostsResponse<MarkdownPost>;

	return {
		posts,
		total,
		hasMore
	};
}) satisfies PageLoad;
