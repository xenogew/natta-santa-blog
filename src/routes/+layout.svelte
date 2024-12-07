<script lang="ts">
	import type { LayoutData } from './$types';

	import '../app.postcss';

	import { AppBar, Switch } from '@skeletonlabs/skeleton-svelte';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import BuyMeCoffee from '$lib/components/BuyMeCoffee.svelte';

	let { data, children } = $props();

	let mode = $state(false);

	function handleModeChange() {
		document.documentElement.classList.toggle('dark');
	}
</script>

<!-- App Shell -->
<div class="grid grid-rows-[auto_1fr_auto] variant-soft-surface bg-surface-200 dark:bg-surface-900">
	<header>
		<!-- App Bar -->
		<AppBar>
			{#snippet lead()}
				<strong class="text-xl uppercase">
					<a href="{base}/" class="flex">
						<span class="mr-4">
							<Icon icon="emojione-v1:santa-claus" inline={true} width="48" height="48" />
						</span>
						<span class="content-center m-auto invisible md:visible">Natta Santa</span>
					</a>
				</strong>
			{/snippet}
			<!-- All menu links -->
			<a class="btn-top-menu" data-sveltekit-preload-data="tap" href="{base}/blog" rel="noreferrer"
				>Blog</a
			>
			<a class="btn-top-menu" data-sveltekit-preload-data="tap" href="{base}/about" rel="noreferrer"
				>About</a
			>
			{#snippet trail()}
				<Switch
					name="mode"
					controlActive="bg-surface-200"
					bind:checked={mode}
					onCheckedChange={handleModeChange}
				>
					{#snippet inactiveChild()}<Icon icon="lucide:moon" width="14" height="14" />{/snippet}
					{#snippet activeChild()}<Icon icon="lucide:sun" width="14" height="14" />{/snippet}
				</Switch>
			{/snippet}
			<style lang="postcss">
				.rounded-switch {
					@apply rounded-full;
				}
				.btn-top-menu {
					@apply btn btn-lg
					hover:underline
					underline-offset-8
					decoration-primary-900
					dark:decoration-primary-200;
				}
			</style>
		</AppBar>
	</header>

	<!-- Page Route Content -->
	<div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
		{#key data.currentRoute}
			<main class="mx-6" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				{@render children()}
			</main>
		{/key}
	</div>

	<footer>
		<AppBar>
			{#snippet trail()}
				<BuyMeCoffee bmcId="xenogew" bmcText="Buy me a coffee" />
			{/snippet}
		</AppBar>
	</footer>
</div>
