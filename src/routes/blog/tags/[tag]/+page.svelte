<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
</script>

<!-- ...Post HTML here -->
<h2>{data.tag}</h2>
{#if data.posts.length}
	<aside>
		<h4>Posted in:</h4>
		<ul>
			{#each data.posts as post}
				<li>
					<a href={resolve(`/blog/${post.path}`)}>
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
