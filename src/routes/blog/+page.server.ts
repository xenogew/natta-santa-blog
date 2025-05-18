import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/posts?page=1&limit=12`);
	const posts = await response.json();

	return {
		posts
	};
}) satisfies PageServerLoad;
