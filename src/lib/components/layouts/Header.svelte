<script lang="ts">
	import { page } from '$app/state';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

	let searchQuery = '';
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
			<div class="hidden sm:block">
				<input
					type="search"
					placeholder="Search..."
					autocomplete="off"
					bind:value={searchQuery}
					class="dark:bg-surface-800 border-surface-500 dark:border-surface-900 max-w-[200px] rounded-md border-2 bg-slate-200 focus:border-transparent focus:ring-1 focus:ring-zinc-900 focus:outline-2 dark:placeholder-slate-100"
				/>
			</div>
			<ThemeSwitch />
		</div>
	{/snippet}
</AppBar>

<style>
	@reference "../../../app.css";
	input[type='search']::-webkit-search-cancel-button {
		@apply appearance-none;
	}
</style>
