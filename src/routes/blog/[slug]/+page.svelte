<script lang="ts">
	export let data: BlogPost;
	const { title, Content, tags } = data;
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Blog - {title}</title>
	<meta name="description" content={title} />
</svelte:head>

<article class="markdown">
	<Content />

	<div class="my-4 py-2 text-sm">
		Tags:
		{#each tags as tag}
			<a href="{base}/blog/tags/{tag}"
				><span class="chip m-0.5 variant-soft-secondary hover:variant-glass-secondary">{tag}</span></a
			>
		{/each}
	</div>

	<style lang="postcss">
		.markdown {
			@apply max-w-prose
			prose
			prose-base
			prose-headings:p-0
			prose-headings:m-0
			prose-h1:mt-4
			prose-h2:mt-6
			prose-h2:mb-4
			prose-h3:my-3
			prose-p:my-0
			prose-li:my-0.5
			prose-li:leading-5
			prose-li:marker:text-primary-900
			prose-li:marker:dark:text-primary-50
			prose-blockquote:my-3
			prose-blockquote:text-tertiary-700
			prose-blockquote:dark:text-tertiary-200
			prose-blockquote:border-l-4
			prose-blockquote:border-tertiary-900
			prose-blockquote:dark:border-tertiary-50
			prose-img:mx-auto
			text-primary-800
			dark:text-primary-100
			prose-code:text-secondary-700
			prose-code:dark:text-secondary-200
			prose-a:text-slate-800
			prose-a:dark:text-slate-100
			prose-thead:border-b-2
			prose-thead:border-slate-400
			prose-thead:dark:border-slate-500
			prose-tr:border-slate-400
			prose-tr:dark:border-slate-500
			prose-headings:text-primary-900
			prose-headings:dark:text-primary-50
			prose-strong:text-primary-700
			prose-strong:dark:text-primary-200;
		}
		ul.contains-task-list {
			@apply prose-li:list-none
			prose-ul:p-0;
		}
		ul.contains-task-list > li > input[type='checkbox'] {
			@apply checkbox mr-2;
		}
		span.icon-link {
			@apply w-4 h-4
			inline-block
			bg-no-repeat
			my-auto
			mx-1
			text-slate-600
			dark:text-slate-300
			bg-[url('https://api.iconify.design/akar-icons/link-chain.svg?color=%23046d7f')];
		}
	</style>
</article>
