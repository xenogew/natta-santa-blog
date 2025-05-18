<script lang="ts">
	import type { BlogPost } from '$lib/types';
	import { base } from '$app/paths';

	type Props = {
		data: BlogPost;
	};
	let { data }: Props = $props();
	const { title, Content, tags } = data;
</script>

<svelte:head>
	<title>Blog - {title}</title>
	<meta name="description" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
</svelte:head>

<section
	class="bg-surface-100 my-6 max-w-4xl p-6 shadow-md sm:rounded-md dark:bg-slate-700"
>
	<article class="markdown">
		<Content />

		<div class="my-4 py-2 text-sm">
			Tags:
			{#each tags as tag, key}
				<a href="{base}/blog/tags/{tag}" aria-label="tag-{key}"
					><span class="chip preset-outlined-secondary-500 hover:preset-glass-secondary m-0.5">{tag}</span
					></a
				>
			{/each}
		</div>
	</article>
</section>

<style>
	@reference "../../../app.css";
	.markdown {
		@apply prose prose-2xl prose-headings:p-0 prose-headings:m-0 prose-h1:mt-4 prose-h2:mt-6 prose-h2:mb-4 prose-h3:my-3 prose-p:my-0 prose-li:my-0.5 prose-li:text-xl prose-li:leading-7 prose-li:marker:text-primary-600 prose-li:marker:dark:text-primary-50 prose-blockquote:my-3 prose-blockquote:text-tertiary-700 prose-blockquote:dark:text-tertiary-200 prose-blockquote:border-l-4 prose-blockquote:border-tertiary-900 prose-blockquote:dark:border-tertiary-50 prose-img:mx-auto text-primary-800 dark:text-primary-100 prose-code:text-secondary-700 prose-code:dark:text-secondary-200 prose-a:text-slate-800 prose-a:dark:text-slate-100 prose-thead:border-b-2 prose-thead:border-slate-400 prose-thead:dark:border-slate-500 prose-tr:border-slate-400 prose-tr:dark:border-slate-500 prose-headings:text-primary-900 prose-headings:dark:text-primary-50 prose-strong:text-primary-700 prose-strong:dark:text-primary-200 prose-hr:my-12 prose-hr:border-2 prose-hr:!border-surface-400 prose-hr:dark:!border-surface-700 max-w-prose;
	}
</style>
