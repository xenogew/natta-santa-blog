<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-surface-300 dark:bg-surface-700 rounded-md my-6">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<div class="flex flex-row justify-center my-10">
				<div class="bg-surface-50 rounded-full w-480 h-480">
					<Icon icon="noto-v1:crying-cat" class="w-240 h-240" width="240" height="240" />
				</div>
			</div>
			<h1
				class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
			>
				{$page.status}
			</h1>
			<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
				Something's wrong.
			</p>
			<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
				Sorry, {$page.error?.message}
			</p>
			<a
				href="/"
				class="inline-flex text-white variant-ghost-secondary hover:variant-filled-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
				>Back to Homepage</a
			>
		</div>
	</div>
</section>
