<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
	const { currentRoute, posts } = data;

	const themeMode = $derived(
		localStorage.theme === 'light' ? 'line-md:sun-rising-twotone-loop' : 'line-md:moon-loop'
	);
	const themeColor = $derived(localStorage.theme === 'light' ? '#FF5F1F' : '#FFEF00');
</script>

<h1 class="h1 my-3">Blog</h1>

<dl class="list-dl">
	{#if posts && posts.length === 0}
		<div class="flex flex-col">
			<h1 class="md:h2 break-all my-4">There's no published posts right now...</h1>
			<div class="flex flex-col items-stretch">
				<div class="self-start">
					<Icon icon={themeMode} color={themeColor} class="w-16 md:w-24 h-16 md:h-24" />
				</div>
				<div><Icon icon="noto:evergreen-tree" class="w-48 md:w-96 h-48 md:h-96" /></div>
			</div>
		</div>
	{/if}
	{#each posts as post, i}
		<div>
			<span class="badge-icon p-3 shadow-md bg-surface-200 dark:bg-surface-800 text-base">
				{i + 1}
			</span>
			<span class="flex-auto">
				<dt>
					<a href="{base}{currentRoute}/{post.slug}" class="text-lg">
						{post.title}
					</a>
				</dt>
				<dd
					class="text-[0.6rem] opacity-60 dark:text-accent-300 text-accent-600 flex flex-row gap-1 items-center"
				>
					<Icon icon="grommet-icons:calendar" inline={true} />
					<span class="mx-1">{post.date}</span>
				</dd>
			</span>
		</div>
	{/each}
</dl>
