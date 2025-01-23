<script lang="ts">
	import { page } from '$app/state';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<!-- App Bar -->
<AppBar background="bg-surface-50 dark:bg-surface-700">
	{#snippet lead()}
		<div class="text-xl uppercase flex items-center justify-center">
			<a href="{base}/" class="flex items-center">
				{#if page.url.pathname !== '/about'}
					<span class="mr-4">
						<Icon icon="emojione-v1:santa-claus" inline={true} width="48" height="48" />
					</span>
				{:else}
					<span class="mr-4">
						<Icon icon="twemoji:christmas-tree" inline={true} width="48" height="48" />
					</span>
				{/if}
				<span class="content-center m-auto hidden md:inline-flex font-mono text-2xl capitalize">
					Natta::Santa
				</span>
			</a>
		</div>
	{/snippet}
	<!-- All menu links -->
	<div class="flex flex-row place-content-center h-16">
		<div class="flex items-center justify-center">
			<a class="btn-top-menu" data-sveltekit-preload-data="tap" href="{base}/blog" rel="noreferrer"
				>.blog()</a
			>
		</div>
		<div class="flex items-center justify-center">
			<a class="btn-top-menu" data-sveltekit-preload-data="tap" href="{base}/about" rel="noreferrer"
				>.about()</a
			>
		</div>
	</div>
	{#snippet trail()}
		<ThemeSwitch />
	{/snippet}
</AppBar>

<style lang="postcss">
	.btn-top-menu {
		@apply btn btn-md
		font-mono
		hover:underline
		underline-offset-8
		decoration-primary-900
		dark:decoration-primary-200
		rounded-sm
		hover:preset-tonal-secondary;
	}
</style>
