import type { MarkdownPost } from '$lib/types';

const LAST_POSITION = -1;

export const fetchMarkdownPost = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md', { eager: true });
	const allPosts: MarkdownPost[] = [];

	for (const postFile in allPostFiles) {
		const file = allPostFiles[postFile];
		const mdName = postFile.split('/').at(LAST_POSITION)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && mdName) {
			const metadata = file.metadata as Omit<MarkdownPost, 'slug'>;
			const post = { ...metadata, slug: mdName } satisfies MarkdownPost;
			post.published && allPosts.push(post);
		}
	}

	return allPosts.sort((first, second) => {
		return new Date(second.date).getTime() - new Date(first.date).getTime();
	});
};
