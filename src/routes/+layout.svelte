<script lang="ts">
	import '@fontsource-variable/noto-sans-thai';
	import '../app.css';
	import type { LayoutData } from './$types';
	import { onMount, type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/layouts/Header.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import { initDarkMode } from '$lib/stores';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();
	let { currentRoute } = $derived(data);

	onMount(() => {
		initDarkMode();
	});
</script>

<svelte:head>
	<title>Natta Santa: A poor Dev Blog but I'm trying to do better</title>
</svelte:head>

<!-- Main Layout -->
<main class="preset-soft-surface grid h-screen max-w-full grid-rows-[auto_1fr] overflow-y-auto">
	<Header />

	<!-- Page Route Content -->
	<div class="bg-surface-50 dark:bg-surface-800 flex-1 overflow-y-auto">
		<section class="container mx-auto px-4 py-8">
			{#key currentRoute}
				<div
					class="mx-auto md:mx-6"
					in:fade={{ duration: 150, delay: 150 }}
					out:fade={{ duration: 150 }}
				>
					{@render children()}
				</div>
			{/key}
		</section>
	</div>

	<Footer />
</main>
