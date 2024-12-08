<script lang="ts">
	import type { PageData } from './$types';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import KeywordHighlight from '$lib/components/KeywordHighlight.svelte';

	type Props = {
		data: PageData;
	};
	let { data }: Props = $props();
	let displayBio: boolean = (data.code ?? '') === 'reference_from_linkedin';
	import { timelines } from '$lib/data/natta-timeline.json';
</script>

<svelte:head>
	<title>About - Natta Santa</title>
</svelte:head>

<section
	class="max-w-4xl p-6 mx-auto my-4 bg-sky-100 sm:rounded-md shadow-md dark:bg-sky-700 relative"
>
	<div class="flex flex-row gap-3 justify-items-center">
		<div class="basis-1/5 grow-0">
			<Avatar
				name="Santa"
				src="santa-avatar.svg"
				rounded="rounded-full"
				classes="mx-auto w-32 h-32"
			/>
		</div>
		<div class="basis-4/5">
			<h2 class="h2 font-mono mb-4">Hello, I'm Natta</h2>
			<p class="lg:indent-8 indent-0">
				I'm a Java Back-End developer, experience in
				<KeywordHighlight>Spring Boot</KeywordHighlight>, design & develop Restful API.
			</p>
			<p class="lg:indent-8 indent-0">
				Develop this site with inspiration to learn develop Front-End with
				<KeywordHighlight>Svelte-Kit</KeywordHighlight>.
			</p>
		</div>
	</div>
</section>
<section
	class="max-w-4xl p-6 mx-auto mb-4 bg-slate-100 sm:rounded-md shadow-md dark:bg-gray-900 relative"
>
	<h1 class="h1 font-sans mb-8">Bio Timeline</h1>

	<Timeline {timelines} displayPrivate={displayBio} />
</section>
