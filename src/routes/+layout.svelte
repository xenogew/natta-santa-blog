<script lang="ts">
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Header from '$lib/components/layouts/Header.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();
</script>

<!-- Main Layout -->
<div class="variant-soft-surface grid h-screen grid-rows-[auto_1fr_auto] overflow-y-auto">
	<Header />

	<!-- Page Route Content -->
	<main class="bg-surface-200 dark:bg-surface-900 overflow-y-auto">
		<div class="container mx-auto">
			{#key data.currentRoute}
				<main class="mx-6" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
					{@render children()}
				</main>
			{/key}
		</div>
	</main>

	<Footer />
</div>
