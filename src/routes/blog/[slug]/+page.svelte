<script lang="ts">
	export let data: BlogPost;
	const { title, Content, tags } = data;

	import BuyMeCoffee from '$lib/components/BuyMeCoffee.svelte';
</script>

<svelte:head>
	<title>Blog - {title}</title>
	<meta name="description" content={title} />
</svelte:head>

<article
	class="w-max-prose prose prose-lg dark:text-primary-100 prose-headings:dark:text-primary-300 prose-strong:dark:text-primary-200"
>
	<Content />

	<p class="my-2 text-sm">
		Tags:
		{#each tags as tag}
			<a href="/blog/tags/{tag}"><span class="chip m-0.5">{tag}</span></a>
		{/each}
	</p>
</article>

<BuyMeCoffee bmcId="xenogew" bmcText="Buy me a coffee" />
