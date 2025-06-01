<script lang="ts">
	import { browser } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Result } from '$lib/types';
	import { Dialog } from 'bits-ui';
	import SearchWorker from '$lib/search-worker?worker';
	import Icon from '@iconify/svelte';
	import Kbd from '$lib/components/Kbd.svelte';

	// TODO: warning of unpatch nodejs
	const platform = browser && navigator.userAgentData?.platform;

	let dialogOpening = $state(false);
	let selectedIndex = $state(-1);

	let searchWorker: Worker;
	let searchStatus: 'idle' | 'loading' | 'ready' = $state('idle');
	let searchTerm: string = $state('');
	let results: Result[] = $state([]);

	// all posts coming here at component mounted
	onMount(async () => {
		// /api/search endpoint implementation
		searchWorker = new SearchWorker();
		searchWorker.addEventListener('message', (e) => {
			const { type, payload } = e.data;
			if (type === 'ready') searchStatus = 'ready';
			if (type === 'results') results = payload.results;
		});
		searchWorker.postMessage({ type: 'load' });
	});

	onNavigate(() => {
		dialogOpening = false;
	});

	$effect(() => {
		if (searchStatus === 'ready' && searchTerm) {
			searchWorker.postMessage({ type: 'search', payload: { searchTerm } });
		}

		if (searchTerm === '') {
			results = [];
		}
	});

	$effect(() => {
		if (!dialogOpening) {
			searchTerm = '';
		}
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
			e.preventDefault();
			dialogOpening = true;
		}
	}}
/>

<Dialog.Root bind:open={dialogOpening}>
	<Dialog.Trigger
		id="search-trigger"
		aria-label="search-trigger"
		class="border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 focus:ring-primary-500 flex h-8 items-center gap-1 rounded-md border px-2.5 py-1 shadow-sm transition-all duration-200 focus:ring-2 focus:outline-none sm:gap-1.5 sm:px-3 sm:py-5"
	>
		<Icon
			icon="material-symbols:search"
			class="text-surface-600 dark:text-surface-50 h-4 w-4 flex-shrink-0"
		/>
		<span
			class="text-surface-700 dark:text-surface-50 hidden text-xs font-medium sm:inline sm:text-sm"
			>Search</span
		>
		<div class="ml-1 hidden items-center md:flex">
			<Kbd>{platform === 'MacIntel' ? '⌘' : 'Ctrl'}</Kbd>
			<span class="text-surface-500 dark:text-surface-400 mx-0.5 text-[10px]">+</span>
			<Kbd>K</Kbd>
		</div>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
		/>
		<Dialog.Content
			class="rounded-container-lg bg-surface-50 dark:bg-surface-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed top-[50%] left-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] shadow-lg outline-none sm:max-w-[490px] md:w-full"
		>
			<Dialog.Title class="sr-only">Search Toolbar</Dialog.Title>
			<Dialog.Description class="sr-only">press ⌘K to open the search bar.</Dialog.Description>
			<div
				class="divide-surface-300 dark:divide-surface-700 rounded-container-lg border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 flex h-full w-full flex-col divide-y self-start overflow-hidden border"
			>
				<input
					class="rounded-container-token bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-50 placeholder:text-surface-500 dark:placeholder:text-surface-400 inline-flex h-12 truncate border-0 border-b px-4 text-sm transition-colors focus:ring-0 focus:outline-none"
					placeholder="Search for blog post..."
					bind:value={searchTerm}
					autocomplete="off"
					spellcheck="false"
					type="search"
				/>

				<div
					class="scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-surface-500 dark:scrollbar-thumb-surface-700 scrollbar-track-surface-100 dark:scrollbar-track-surface-800 max-h-[280px] overflow-x-hidden overflow-y-auto px-2 pb-2"
				>
					{#if results.length === 0}
						<div
							class="text-surface-500 dark:text-surface-400 flex w-full items-center justify-center pt-8 pb-6 text-sm"
						>
							No results found.
						</div>
					{:else}
						{#each results as result, index (result.id)}
							<a
								class="hover:bg-surface-200 dark:hover:bg-surface-700 flex cursor-pointer items-start gap-2 rounded px-3 py-3 text-sm transition-colors outline-none select-none {selectedIndex ===
								index
									? 'bg-primary-500/20 dark:bg-primary-500/30'
									: ''}"
								href="/blog/{result.slug}"
								onclick={() => {
									dialogOpening = false;
								}}
							>
								<div class="flex w-full flex-col gap-1">
									<h3
										class="text-surface-900 dark:text-surface-50 text-sm leading-tight font-medium"
									>
										{@html result.title}
									</h3>
									<div
										class="text-surface-600 dark:text-surface-400 line-clamp-2 text-xs leading-relaxed"
									>
										{@html result.content}
									</div>
								</div>
							</a>
						{/each}
					{/if}
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
