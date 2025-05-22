<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import SearchWorker from '$lib/search-worker?worker';
	import Icon from '@iconify/svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/search';
	import { Command, Dialog } from 'bits-ui';
	import Kbd from '$lib/components/Kbd.svelte';

	const platform = browser && window.navigator.platform;

	let dialogOpening = $state(false);

	let searchQuery = $state('');
	let searchBox: HTMLInputElement;
	let isSearchOpen = $state(false);

	let search: 'loading' | 'ready' = $state('loading');
	let searchTerm = 'joy';
	let results = [];

	onMount(async () => {
		const response = await fetch('/search.json');
		const posts = await response.json();
		createPostsIndex(posts);
		search = 'ready';

		// Add keyboard shortcut listener
		window.addEventListener('keydown', (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
				e.preventDefault();
				isSearchOpen = !isSearchOpen;
			}
			if (e.key === 'Escape' && isSearchOpen) {
				isSearchOpen = false;
			}
		});
	});

	$effect(() => {
		if (search === 'ready') {
			results = searchPostsIndex(searchTerm);
			console.log(results);
		}
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
			console.log('Wol');
			e.preventDefault();
			dialogOpening = true;
		}
	}}
/>

<Dialog.Root bind:open={dialogOpening}>
	<Dialog.Trigger
		class="border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 focus:ring-primary-500 flex h-8 items-center gap-1 rounded-md border px-2.5 py-1 shadow-sm transition-all duration-200 focus:ring-2 focus:outline-none sm:gap-1.5 sm:px-3 sm:py-5"
	>
		<Icon
			icon="material-symbols:search"
			class="text-surface-600 dark:text-surface-300 h-4 w-4 flex-shrink-0"
		/>
		<span
			class="text-surface-700 dark:text-surface-300 hidden text-xs font-medium sm:inline sm:text-sm"
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
			<Dialog.Title class="sr-only">Command Menu</Dialog.Title>
			<Dialog.Description class="sr-only">
				This is the command menu. Use the arrow keys to navigate and press ⌘K to open the search
				bar.
			</Dialog.Description>
			<Command.Root
				class="divide-surface-300 dark:divide-surface-700 rounded-container-lg border-surface-300 dark:border-surface-700 bg-surface-50 dark:bg-surface-900 flex h-full w-full flex-col divide-y self-start overflow-hidden border"
			>
				<Command.Input
					class="rounded-container-token bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-50 placeholder:text-surface-500 dark:placeholder:text-surface-400 inline-flex h-12 truncate border-0 border-b px-4 text-sm transition-colors focus:ring-0 focus:outline-none"
					placeholder="Search for blog post..."
				/>
				<Command.List
					class="scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-surface-500 dark:scrollbar-thumb-surface-700 scrollbar-track-surface-100 dark:scrollbar-track-surface-800 max-h-[280px] overflow-x-hidden overflow-y-auto px-2 pb-2"
				>
					<Command.Viewport>
						<Command.Empty
							class="text-surface-500 dark:text-surface-400 flex w-full items-center justify-center pt-8 pb-6 text-sm"
						>
							No results found.
						</Command.Empty>
						<Command.Group>
							<Command.GroupHeading
								class="text-surface-500 dark:text-surface-400 px-3 pt-4 pb-2 text-xs"
							>
								Suggestions
							</Command.GroupHeading>
							<Command.GroupItems>
								<Command.Item
									class="hover:bg-surface-200 dark:hover:bg-surface-700 data-[selected=true]:bg-primary-500/20 dark:data-[selected=true]:bg-primary-500/30 flex h-10 cursor-pointer items-center gap-2 rounded px-3 py-2.5 text-sm capitalize outline-none select-none"
									keywords={['getting started', 'tutorial']}
								>
									<Icon icon="mdi:sticker-outline" class="size-4" />
									Introduction
								</Command.Item>
								<Command.Item
									class="hover:bg-surface-200 dark:hover:bg-surface-700 data-[selected=true]:bg-primary-500/20 dark:data-[selected=true]:bg-primary-500/30 flex h-10 cursor-pointer items-center gap-2 rounded px-3 py-2.5 text-sm capitalize outline-none select-none"
									keywords={['child', 'custom element', 'snippets']}
								>
									<Icon icon="material-symbols:code" class="size-4" />
									Delegation
								</Command.Item>
								<Command.Item
									class="hover:bg-surface-200 dark:hover:bg-surface-700 data-[selected=true]:bg-primary-500/20 dark:data-[selected=true]:bg-primary-500/30 flex h-10 cursor-pointer items-center gap-2 rounded px-3 py-2.5 text-sm capitalize outline-none select-none"
									keywords={['css', 'theme', 'colors', 'fonts', 'tailwind']}
								>
									<Icon icon="solar:pallete-2-bold" class="size-4" />
									Styling
								</Command.Item>
							</Command.GroupItems>
						</Command.Group>
						<Command.Separator />
						<Command.Group>
							<Command.GroupHeading
								class="text-surface-500 dark:text-surface-400 px-3 pt-4 pb-2 text-xs"
							>
								Components
							</Command.GroupHeading>
							<Command.GroupItems>
								<Command.Item
									class="hover:bg-surface-200 dark:hover:bg-surface-700 data-[selected=true]:bg-primary-500/20 dark:data-[selected=true]:bg-primary-500/30 flex h-10 cursor-pointer items-center gap-2 rounded px-3 py-2.5 text-sm capitalize outline-none select-none"
									keywords={['dates', 'times']}
								>
									<Icon icon="mdi:calendar" class="size-4" />
									Calendar
								</Command.Item>
								<Command.Item
									class="hover:bg-surface-200 dark:hover:bg-surface-700 data-[selected=true]:bg-primary-500/20 dark:data-[selected=true]:bg-primary-500/30 flex h-10 cursor-pointer items-center gap-2 rounded px-3 py-2.5 text-sm capitalize outline-none select-none"
									keywords={['buttons', 'forms']}
								>
									<Icon icon="radix-icons:radiobutton" class="size-4" />
									Radio Group
								</Command.Item>
								<Command.Item
									class="hover:bg-surface-200 dark:hover:bg-surface-700 data-[selected=true]:bg-primary-500/20 dark:data-[selected=true]:bg-primary-500/30 flex h-10 cursor-pointer items-center gap-2 rounded px-3 py-2.5 text-sm capitalize outline-none select-none"
									keywords={['inputs', 'text', 'autocomplete']}
								>
									<Icon icon="mingcute:textbox-line" class="size-4" />
									Combobox
								</Command.Item>
							</Command.GroupItems>
						</Command.Group>
					</Command.Viewport>
				</Command.List>
			</Command.Root>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
