<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h1 class="font-bold text-3xl">Welcome to Natta Santa Blog</h1>
		<div class="flex justify-center space-x-2">
			<a class="btn btn-filled" href="https://skeleton.dev/" target="_blank" rel="noreferrer"
				>Launch Documentation</a
			>
		</div>
		<div class="space-y-2">
			<p>Try editing the following:</p>
			<p><code>/src/routes/+layout.svelte</code></p>
			<p><code>/src/routes/+page.svelte</code></p>
		</div>
	</div>

	<style lang="postcss">
		figure {
			@apply flex relative flex-col;
		}
		figure svg,
		.img-bg {
			@apply w-64 h-64 md:w-80 md:h-80;
		}
		.img-bg {
			@apply bg-gradient-to-r from-primary-300 to-warning-300;
			@apply absolute z-[-1] rounded-full blur-[64px];
			animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite;
		}
		@keyframes pulse {
			50% {
				transform: scale(1.5);
			}
		}
	</style>
</div>
