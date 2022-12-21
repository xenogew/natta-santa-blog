import { fetchMarkdownPost } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (): Promise<Response> => {
	const allPosts = await fetchMarkdownPost();

	allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});
	return json(allPosts);
};
