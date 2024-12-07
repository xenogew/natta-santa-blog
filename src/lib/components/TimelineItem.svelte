<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { TimelineItem } from '$lib/types';

	type Props = TimelineItem & {
		displayPrivate: boolean;
	};

	let {
		title = '(Title)',
		timestamp = '(timestamp)',
		description = '(Description)',
		badgeText = '',
		icon = 'ri:calendar-line',
		pub = false,
		displayPrivate = false
	}: Props = $props();

	let timelineIconWidth = $state(24);
	let timelineIconHeight = $state(24);
</script>

{#if pub || displayPrivate}
	<li class="mb-6 ml-6">
		<span
			class="absolute flex items-center justify-center w-8 h-8 bg-secondary-100 rounded-full -left-4 ring-8 ring-slate-100 dark:ring-gray-900 dark:bg-secondary-900"
		>
			{#if !icon}
				<Icon icon="mingcute:calendar-line" width={timelineIconWidth} height={timelineIconHeight} />
			{:else}
				<Icon {icon} width={timelineIconWidth} height={timelineIconHeight} />
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
			{@html description}
		</p>
	</li>
{/if}
