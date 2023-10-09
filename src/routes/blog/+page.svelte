<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	export let data: PageData;
	const { posts } = data;
</script>

<h1 class="h1 my-3">Blog</h1>

<dl class="list-dl">
	{#each posts as post, i}
		<div>
			<span class="badge-icon p-3 shadow-md bg-surface-200 dark:bg-surface-800 text-base">
				{i + 1}
			</span>
			<span class="flex-auto">
				<dt>
					<a href="{base}{post.path}" class="text-lg">
						{post.meta.title}
					</a>
				</dt>
				<dd
					class="text-[0.6rem] opacity-60 dark:text-accent-300 text-accent-600 flex flex-row gap-1 items-center"
				>
					<Icon icon="grommet-icons:calendar" inline={true} />
					<span class="mx-1">{post.meta.date}</span>
				</dd>
			</span>
		</div>
	{/each}
</dl>
