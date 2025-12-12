<script lang="ts">
	import { resolve } from '$app/paths';
	type Props = {
		title: string;
		subtitle?: string;
		path: string;
		sample?: string;
	};

	let { title, subtitle, path = '#', sample }: Props = $props();
</script>

<a
	href={resolve(`/blog/[slug]`, { slug: path })}
	class="card preset-filled-surface-100-900 border-surface-200-800 card-hover block p-4 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl"
>
	<h3 class="h3 font-bold">{title}</h3>
	<p class="opacity-75">{subtitle || sample}</p>
</a>
