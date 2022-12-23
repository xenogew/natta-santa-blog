<script lang="ts">
	import { base } from '$app/paths';
	export let data: any;
	console.log(data.posts);
	const { tag, posts } = data;
</script>

<!-- ...Post HTML here -->
<h2>{tag}</h2>
{#if posts.length}
	<aside>
		<h4>Posted in:</h4>
		<ul>
			{#each posts as post}
				<li>
					<a href="{base}{post.path}">
						{post.meta.title}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
