<script lang="ts">
	import type { PageData } from './$types';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import KeywordHighlight from '$lib/components/KeywordHighlight.svelte';
	import { timelines } from '$lib/data/natta-timeline.json';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
	let { code } = $derived(data);
</script>

<svelte:head>
	<title>About - Natta Santa</title>
</svelte:head>

<section
	class="relative mx-auto my-4 max-w-4xl bg-sky-100 p-6 shadow-md sm:rounded-md dark:bg-sky-700"
>
	<div class="flex flex-row justify-items-center gap-3">
		<div class="grow-0 basis-1/5">
			<Avatar class="size-32">
				<Avatar.Image src="santa-avatar.svg" alt="Natta Santa" />
				<Avatar.Fallback>NS</Avatar.Fallback>
			</Avatar>
		</div>
		<div class="basis-4/5">
			<h2 class="h2 mb-4 font-mono">Hello, I'm Natta</h2>
			<p class="indent-0 lg:indent-8">
				I'm a Java Back-End developer, experience in
				<KeywordHighlight>Spring Boot</KeywordHighlight>, design & develop Restful API.
			</p>
			<p class="indent-0 lg:indent-8">
				Develop this site with inspiration to learn develop Front-End with
				<KeywordHighlight>Svelte-Kit</KeywordHighlight>.
			</p>
		</div>
	</div>
</section>
<section
	class="relative mx-auto mb-4 max-w-4xl bg-slate-100 p-6 shadow-md sm:rounded-md dark:bg-gray-900"
>
	<h1 class="h1 mb-8 font-sans">Bio Timeline</h1>

	<Timeline {timelines} displayPrivate={code === 'reference_from_linkedin'} />
</section>
