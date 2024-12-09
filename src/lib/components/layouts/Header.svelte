<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<!-- App Bar -->
<AppBar background="bg-surface-50 dark:bg-surface-700">
	{#snippet lead()}
		<strong class="text-xl uppercase">
			<a href="{base}/" class="flex items-center">
				{#if $page.url.pathname !== '/about'}
					<span class="mr-4">
						<Icon icon="emojione-v1:santa-claus" inline={true} width="48" height="48" />
					</span>
				{:else}
					<span class="mr-4">
						<Icon icon="twemoji:christmas-tree" inline={true} width="48" height="48" />
					</span>
				{/if}
				<span class="py-2 invisible md:visible">Natta Santa</span>
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
		<ThemeSwitch />
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
