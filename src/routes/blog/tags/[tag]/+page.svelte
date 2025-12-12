<script lang="ts">
	import type { PageData } from './$types';
	import PostListItem from '$lib/components/PostListItem.svelte';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
	let { tag, posts } = $derived(data);
</script>

<h2 class="h2 mb-4">Posts tagged with "{tag}"</h2>
{#if posts.length}
	<div class="flex flex-col gap-4">
		{#each posts as post (post.slug)}
			<PostListItem
				title={post.title}
				subtitle={post.subtitle}
				sample={post.sample}
				path={post.slug}
			/>
		{/each}
	</div>
{:else}
	<p>No posts found for this tag.</p>
{/if}
