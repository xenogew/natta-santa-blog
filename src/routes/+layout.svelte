<script lang="ts">
	import type { LayoutData } from './$types';

	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import BuyMeCoffee from '$lib/components/BuyMeCoffee.svelte';

	export let data: LayoutData;
	console.log('base => ', base);
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">
					<a href="{base}/" class="flex">
						<span class="mr-4">
							<Icon icon="emojione-v1:santa-claus" inline={true} width="48" height="48" />
						</span>
						<span class="content-center m-auto">Natta Santa Blog</span>
					</a>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm btn-ghost-surface"
					data-sveltekit-preload-data="tap"
					href="{base}/blog"
					rel="noreferrer">Blog</a
				>
				<a
					class="btn btn-sm btn-ghost-surface"
					data-sveltekit-preload-data="tap"
					href="{base}/about"
					rel="noreferrer">About</a
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="mx-6">
		{#key data.currentRoute}
			<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}
	</div>

	<svelte:fragment slot="footer">
		<AppBar>
			<svelte:fragment slot="trail">
				<BuyMeCoffee bmcId="xenogew" bmcText="Buy me a coffee" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
