<script lang="ts">
	import type { PageData } from './$types';
	import ArticleCard from '$lib/components/ArticleCard.svelte';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
	const { posts, hasMore } = data;
</script>

<div class="container mx-auto h-full w-10/12 items-center justify-center py-8">
	<div
		class="grid auto-rows-fr grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-6 lg:grid-cols-3"
	>
		{#each posts as article (article.id)}
			<ArticleCard {...article} />
		{/each}
	</div>

	{#if hasMore}
		<a href="/blog" class="btn preset-filled-primary mt-6">View More Posts</a>
	{/if}
</div>

<style>
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
