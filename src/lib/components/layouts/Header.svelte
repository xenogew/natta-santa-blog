<script lang="ts">
	import { page } from '$app/state';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<!-- App Bar -->
<AppBar background="bg-surface-200 dark:bg-surface-700">
	{#snippet lead()}
		<div class="flex items-center justify-center text-xl uppercase">
			<a href="{base}/" class="flex items-center">
				{#if page.url.pathname !== '/about'}
					<span>
						<Icon
							icon="emojione-v1:santa-claus"
							inline={true}
							class="scale-75 md:scale-none"
							width="48"
							height="48"
						/>
					</span>
				{:else}
					<span>
						<Icon
							icon="twemoji:christmas-tree"
							inline={true}
							class="scale-75 md:scale-none"
							width="48"
							height="48"
						/>
					</span>
				{/if}
				<span
					class="m-auto hidden content-center font-mono text-2xl capitalize md:ml-4 md:inline-flex"
				>
					Natta::Santa
				</span>
			</a>
		</div>
	{/snippet}
	<!-- All menu links -->
	<div class="flex h-16 flex-col place-content-center md:flex-row">
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

<style>
	@reference "../../../app.css";
	.btn-top-menu {
		@apply btn btn-base decoration-primary-900 dark:decoration-primary-200 hover:preset-tonal-secondary rounded-sm font-mono underline-offset-8 hover:underline;
	}
</style>
