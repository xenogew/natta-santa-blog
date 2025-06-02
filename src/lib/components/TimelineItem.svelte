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
		displayPrivate = false,
	}: Props = $props();

	let timelineIconWidth = $state(24);
	let timelineIconHeight = $state(24);
</script>

{#if pub || displayPrivate}
	<li class="mb-6 ml-6">
		<span
			class="bg-secondary-100 dark:bg-secondary-900 absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-slate-100 dark:ring-gray-900"
		>
			{#if !icon}
				<Icon icon="mingcute:calendar-line" width={timelineIconWidth} height={timelineIconHeight} />
			{:else}
				<Icon {icon} width={timelineIconWidth} height={timelineIconHeight} />
			{/if}
		</span>
		<h1 class="text-primary-700 dark:text-primary-200 mb-2 flex items-center text-lg font-semibold">
			{title}
			{#if badgeText}
				<span
					class="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
					>{badgeText.toUpperCase()}</span
				>
			{/if}
		</h1>
		<time class="text-surface-400 dark:text-surface-500 mb-2 block text-sm leading-none font-normal"
			>on {timestamp}</time
		>
		<p class="text-secondary-500 dark:text-secondary-400 mb-4 text-base font-normal">
			{@html description}
		</p>
	</li>
{/if}
