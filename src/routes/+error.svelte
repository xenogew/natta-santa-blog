<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';

	const { status, error } = page;
</script>

<section class="bg-surface-300 dark:bg-surface-700 my-6 rounded-md">
	<div class="mx-auto max-w-screen-xl px-0 py-8 md:px-4 lg:px-6 lg:py-16">
		<div class="mx-auto text-center md:max-w-screen-sm">
			<div class="my-auto flex flex-row justify-center">
				<div class="bg-surface-50 size-24 rounded-full md:size-124">
					<Icon icon="noto-v1:crying-cat" class="size-full" />
				</div>
			</div>
			<h1
				class="text-primary-600 dark:text-primary-500 my-4 text-4xl font-extrabold tracking-tight lg:text-9xl"
			>
				{status}
			</h1>
			<p class="mb-4 text-xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
				Something's wrong.
			</p>
			<p class="mb-4 text-base font-light text-gray-500 dark:text-gray-400">
				Sorry, {error?.message}
			</p>
			<a
				href="/"
				class="variant-ghost-secondary hover:variant-filled-secondary my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
				>Back to Homepage</a
			>
		</div>
	</div>
</section>
