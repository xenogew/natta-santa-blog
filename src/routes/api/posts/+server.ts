import type { RequestHandler } from './$types';
import type { BlogPostsResponse, MarkdownPost } from '$lib/types';
import { json } from '@sveltejs/kit';
import { MarkdownService } from '$lib/server/markdown.service';

export const GET = (async ({ url }): Promise<Response> => {
	const markdownService = new MarkdownService();
	const page = Number(url.searchParams.get('page')) || 1;
	const limit = Number(url.searchParams.get('limit')) || 12;

	const allPosts: BlogPostsResponse<MarkdownPost> = await markdownService.getPaginatedPosts({
		page,
		limit,
	});
	return json(allPosts);
}) satisfies RequestHandler;
