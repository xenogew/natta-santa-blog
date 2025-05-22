<script lang="ts">
	import { page } from '$app/state';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import Search from '$lib/components/layouts/header/Search.svelte';
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
				<span class="m-auto ml-4 content-center font-mono text-2xl capitalize"> Natta::Santa </span>
			</a>
		</div>
	{/snippet}

	{#snippet trail()}
		<div class="flex items-center gap-4">
			<Search />
			<ThemeSwitch />
		</div>
	{/snippet}
</AppBar>
