import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	// TODO: Get posts with pagination
	const response = await fetch(`/api/posts?page=1&limit=50`);
	const posts = await response.json();

	return posts;
}) satisfies PageServerLoad;
