<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
	let { tag, posts } = $derived(data);
</script>

<!-- ...Post HTML here -->
<h2>{tag}</h2>
{#if posts.length}
	<aside>
		<h4>Posted in:</h4>
		<ul>
			{#each posts as post}
				<li>
					<a href={resolve(`/blog/${post.path}`)}>
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
