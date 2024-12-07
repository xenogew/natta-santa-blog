<script lang="ts">
	import TimelineItem from '$lib/components/TimelineItem.svelte';
	import type { TimelineItem as TLType } from '$lib/types';

	interface Props {
		timelines: Array<TLType>;
		displayPrivate: boolean;
	}
	let { timelines, displayPrivate }: Props = $props();
</script>

<ol class="relative border-l border-gray-200 dark:border-gray-700 mx-6">
	{#each timelines as timeline}
		<TimelineItem {...timeline} {displayPrivate} />
	{/each}
</ol>
