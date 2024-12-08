<script lang="ts">
	import type { LayoutData } from './$types';
	import type { Snippet } from 'svelte';

	import '../app.postcss';

	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import Header from '$lib/components/layouts/Header.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();
</script>

<!-- Main Layout -->
<div class="grid grid-rows-[auto_1fr_auto] variant-soft-surface overflow-y-auto h-screen">
	<Header />

	<!-- Page Route Content -->
	<main class="flex-1 overflow-y-auto bg-surface-200 dark:bg-surface-900">
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
