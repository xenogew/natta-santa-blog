<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-surface-300 dark:bg-surface-700 my-6 rounded-md">
	<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
		<div class="mx-auto max-w-screen-sm text-center">
			<div class="my-10 flex flex-row justify-center">
				<div class="bg-surface-50 h-480 w-480 rounded-full">
					<Icon icon="noto-v1:crying-cat" class="h-240 w-240" width="240" height="240" />
				</div>
			</div>
			<h1
				class="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl"
			>
				{$page.status}
			</h1>
			<p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
				Something's wrong.
			</p>
			<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
				Sorry, {$page.error?.message}
			</p>
			<a
				href="/"
				class="variant-ghost-secondary hover:variant-filled-secondary my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
				>Back to Homepage</a
			>
		</div>
	</div>
</section>
