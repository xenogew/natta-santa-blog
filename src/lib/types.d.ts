import type { Component } from 'svelte';

export type GlobFile = {
	metadata: object;
	default: Component;
};

export type Post = {
	title: string;
	slug: string;
	content: string;
};

export type MarkdownPost = {
	id: number;
	slug: string;
	title: string;
	subtitle: string;
	author: string;
	sample: string;
	date: Date;
	tags: Array<string>;
	published: boolean;
	path?: string;
	cover?: string;
};

export type BlogPostsResponse<T> = {
	posts: T[];
	total: number;
	currentPage: number;
	totalPages: number;
	hasMore: boolean;
};

export interface PaginationParams {
	page: number;
	limit: number;
}

export type BlogPost = {
	Content: Component;
	title: string;
	date: Date;
	tags: Array<string>;
};

export type TimelineItem = {
	title: string;
	timestamp: string;
	description: string;
	badgeText: null | undefined | string;
	icon: string | null;
	pub?: boolean;
};
