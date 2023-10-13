import type { RequestHandler } from './$types';
import type { MarkdownPost } from '$lib/types';
import { fetchMarkdownPost } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = (async (): Promise<Response> => {
	const allPosts: MarkdownPost[] = await fetchMarkdownPost();
	return json(allPosts);
}) satisfies RequestHandler;
