type BlogPost = {
	Content: any;
	title: string;
	date: Date;
	tags: Array<string>;
};

type TimelineItem = {
	title: string,
	timestamp: string,
	description: string,
	badgeText: null | undefined | string
}
