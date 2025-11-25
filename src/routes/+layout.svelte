<script lang="ts">
	import type { LayoutData } from './$types';
	import { onMount, type Snippet } from 'svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/layouts/Header.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import { initDarkMode } from '$lib/stores';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();

	onMount(() => {
		initDarkMode();
	});
</script>

<svelte:head>
	<title>Natta Santa: A poor Dev Blog but I'm trying to do better</title>
</svelte:head>

<!-- Main Layout -->
<section class="preset-soft-surface grid h-screen max-w-full grid-rows-[auto_1fr] overflow-y-auto">
	<Header />

	<!-- Page Route Content -->
	<div class="bg-surface-50 dark:bg-surface-800 h-full overflow-y-auto">
		<main class="flex min-h-full flex-col">
			<div class="container mx-0 flex-1 md:mx-auto">
				{#key data.currentRoute}
					<main
						class="mx-auto md:mx-6"
						in:fade={{ duration: 150, delay: 150 }}
						out:fade={{ duration: 150 }}
					>
						{@render children()}
					</main>
				{/key}
			</div>
			<Footer />
		</main>
	</div>
</section>
