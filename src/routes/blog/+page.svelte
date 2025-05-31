<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';
	import { checkCurrentMode } from '$lib/utils';
	import { onMount } from 'svelte';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
	const { currentRoute, posts } = data;
	let currentMode: string = 'light';
	onMount(() => {
		currentMode = checkCurrentMode(document);
	});

	const themeMode = $derived(
		currentMode === 'dark' ? 'line-md:sun-rising-twotone-loop' : 'line-md:moon-loop',
	);
	const themeColor = $derived(currentMode === 'light' ? '#FF5F1F' : '#FFEF00');
</script>

<h1 class="h1 my-3">Blog</h1>

<dl class="list-dl">
	{#if posts && posts.length === 0}
		<div class="flex flex-col">
			<h1 class="md:h2 my-4 break-all">There's no archived posts right now...</h1>
			<div class="flex flex-col items-stretch">
				<div class="self-start">
					<Icon icon={themeMode} color={themeColor} class="size-16 md:size-24" />
				</div>
				<div><Icon icon="noto:evergreen-tree" class="size-48 md:size-96" /></div>
			</div>
		</div>
	{/if}
	{#each posts as post (post.id)}
		<div>
			<span
				class="badge-icon bg-surface-500 p-3 text-base font-extrabold shadow-md dark:bg-slate-800 dark:shadow-none"
			>
				{post.id + 1}
			</span>
			<span class="flex-auto">
				<dt>
					<a href="{base}{currentRoute}/{post.slug}" class="text-lg">
						{post.title}
					</a>
				</dt>
				<dd
					class="dark:text-accent-300 text-accent-600 flex flex-row items-center gap-1 text-[0.6rem] opacity-60"
				>
					<Icon icon="grommet-icons:calendar" inline={true} />
					<span class="mx-1">{post.date}</span>
				</dd>
			</span>
		</div>
	{/each}
</dl>
