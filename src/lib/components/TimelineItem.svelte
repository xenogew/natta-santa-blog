<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string = '(Title)';
	export let timestamp: string = '(timestamp)';
	export let description: string = '(Description)';
	export let badgeText: string = '(Badge)';
</script>

<li class="mb-10 ml-6">
	<span
		class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
	>
		<Icon icon="tdesign:calendar" />
	</span>
	<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
		{title}
		{#if badgeText}
			<span
				class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
				>{badgeText}</span
			>
		{/if}
	</h3>
	<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
		>on {timestamp}</time
	>
	<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
		{description}
	</p>
	<!-- Slot: Default -->
	{#if $$slots.default}
		<div><slot /></div>
	{/if}
</li>
