export type MarkdownPost = {
	slug: string;
	title: string;
	date: Date;
	tags: Array<string>;
	published: boolean;
};

export type BlogPost = {
	Content: any;
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
