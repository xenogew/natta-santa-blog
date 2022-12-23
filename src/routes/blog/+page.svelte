<script lang="ts">
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;
	const { posts } = data;
</script>

<h1>Blog</h1>

<dl class="list-dl">
	{#each posts as post, i}
		<div>
			<span class="badge-icon p-3 bg-accent-500 text-base">{i + 1}</span>
			<span class="flex-auto">
				<dt>
					<a href={post.path} class="text-lg">
						{post.meta.title}
					</a>
				</dt>
				<dd
					class="text-[0.6rem] opacity-60 dark:text-accent-300 text-accent-600 flex flex-row gap-1"
				>
					<Icon icon="grommet-icons:calendar" inline={true} />
					{post.meta.date}
				</dd>
			</span>
		</div>
	{/each}
</dl>
