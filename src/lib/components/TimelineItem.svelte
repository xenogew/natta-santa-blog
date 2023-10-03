<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string = '(Title)';
	export let timestamp: string = '(timestamp)';
	export let description: string = '(Description)';
	export let badgeText: string = '';
	export let icon: string | null = '';
</script>

<li class="mb-10 ml-6">
	<span
		class="absolute flex items-center justify-center w-8 h-8 bg-secondary-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-secondary-900"
	>
		{#if !icon}
			<Icon icon="tdesign:calendar" />
		{:else}
			<Icon {icon} />
		{/if}
	</span>
	<h3 class="flex items-center mb-2 text-lg font-semibold text-primary-700 dark:text-primary-200">
		{title}
		{#if badgeText}
			<span
				class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
				>{badgeText.toUpperCase()}</span
			>
		{/if}
	</h3>
	<time class="block mb-2 text-sm font-normal leading-none text-surface-400 dark:text-surface-500"
		>on {timestamp}</time
	>
	<p class="mb-4 text-base font-normal text-secondary-500 dark:text-secondary-400">
		{description}
	</p>
	<!-- Slot: Default -->
	{#if $$slots.default}
		<div><slot /></div>
	{/if}
</li>
