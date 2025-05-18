import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/posts?page=2&limit=50`);
	const posts = await response.json();

	return posts;
}) satisfies PageServerLoad;
