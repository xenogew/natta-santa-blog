<script lang="ts">
	type Props = {
		title: string;
		subtitle?: string;
		sample: string;
		author: string;
		cover: string;
		path?: string;
	};

	let { title, subtitle, sample, author, cover, path = '#' }: Props = $props();
</script>

<a
	href={path}
	class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 flex flex-col divide-y overflow-hidden border-[1px]"
>
	<header class="flex-none">
		<enhanced:img src={cover} class="aspect-[21/9] w-full object-cover" alt={title} />
	</header>
	<article class="flex flex-auto flex-col p-4">
		<div class="flex-none">
			{#if subtitle}
				<span class="p-3 text-base font-semibold">
					{subtitle}
				</span>
			{/if}
			<h3 class="h3 font-(family-name:--base-font-family) font-extrabold">{title}</h3>
		</div>
		<p class="flex-auto opacity-75">
			{sample}
		</p>
	</article>
	<footer class="flex flex-none items-center justify-between gap-4 p-4">
		<small class="opacity-75">By {author}</small>
		<small class="opacity-75">On {new Date().toLocaleDateString()}</small>
	</footer>
</a>
