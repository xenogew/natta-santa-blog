<script lang="ts">
	export let data: BlogPost;
	const { Content, tags } = data;
</script>

<article>
	<Content />

	<p class="my-2 text-sm">
		Tags:
		{#each tags as tag}
			<a href="/blog/tags/{tag}"><span class="chip m-0.5">{tag}</span></a>
		{/each}
	</p>
</article>
