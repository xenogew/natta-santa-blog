<script lang="ts">
	import type { LayoutData } from './$types';

	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let data: LayoutData;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">
					<a href="/" class="flex">
						<span class="mr-4">
							<Icon icon="emojione-v1:santa-claus" inline={true} width="48" height="48" />
						</span>
						<span class="content-center m-auto">Natta Santa Blog</span>
					</a>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm btn-ghost-surface" href="/blog" rel="noreferrer">Blog</a>
				<a class="btn btn-sm btn-ghost-surface" href="/about" rel="noreferrer">About</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="m-6">
		{#key data.currentRoute}
			<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}
	</div>
</AppShell>
