import type { MarkdownPost, BlogPostsResponse, PaginationParams } from '$lib/types';

export class MarkdownService {
	private readonly PAGE_SIZE = 12;

	async getPaginatedPosts(
		params?: Partial<PaginationParams>
	): Promise<BlogPostsResponse<MarkdownPost>> {
		const page = params?.page || 1;
		const limit = params?.limit || this.PAGE_SIZE;
		const start = (page - 1) * limit;
		const end = start + limit;

		const allPosts = await this.fetchMarkdownPosts();
		const sortedPosts = this.sortPostsByDate(allPosts);
		const paginatedPosts = sortedPosts.slice(start, end);

		return {
			posts: paginatedPosts,
			total: sortedPosts.length,
			currentPage: page,
			totalPages: Math.ceil(sortedPosts.length / limit),
			hasMore: end < sortedPosts.length
		} as BlogPostsResponse<MarkdownPost>;
	}

	private async fetchMarkdownPosts(): Promise<MarkdownPost[]> {
		const allPostFiles = import.meta.glob('/src/routes/blog/contents/*.md', { eager: true });
		const posts: MarkdownPost[] = [];

		for (const postFile in allPostFiles) {
			const file = allPostFiles[postFile];
			const post = this.processMarkdownFile(postFile, file as object);
			if (post?.published) {
				posts.push(post);
			}
		}

		return posts;
	}

	private processMarkdownFile(filePath: string, file: object): MarkdownPost | null {
		const slug = this.extractSlug(filePath);

		if (!this.isValidMarkdownFile(file) || !slug) {
			return null;
		}

		const metadata = file.metadata as Omit<MarkdownPost, 'slug'>;
		return { ...metadata, slug };
	}

	private extractSlug(filePath: string): string | undefined {
		return filePath.split('/').at(-1)?.replace('.md', '');
	}

	private isValidMarkdownFile(file: object): file is { metadata: unknown } {
		return file && typeof file === 'object' && 'metadata' in file;
	}

	private sortPostsByDate(posts: MarkdownPost[]): MarkdownPost[] {
		return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	}
}
