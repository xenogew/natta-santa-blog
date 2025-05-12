<script lang="ts">
	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="container h-full items-center justify-center py-8">
	<div class="grid auto-rows-fr grid-cols-2 gap-10 text-center">
		<a
			href="#"
			class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 flex flex-col divide-y overflow-hidden border-[1px]"
		>
			<header class="flex-none">
				<img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
			</header>
			<article class="flex flex-auto flex-col p-4">
				<div class="flex-none">
					<h2 class="h6">Announcements</h2>
					<h3 class="h3">Skeleton is Awesome</h3>
				</div>
				<p class="flex-auto opacity-60">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
					eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam
					iure molestias cum expedita architecto itaque quae rem.
				</p>
			</article>
			<footer class="flex flex-none items-center justify-between gap-4 p-4">
				<small class="opacity-60">By Alex</small>
				<small class="opacity-60">On {new Date().toLocaleDateString()}</small>
			</footer>
		</a>

		<a
			href="#"
			class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 flex flex-col divide-y overflow-hidden border-[1px]"
		>
			<header class="flex-none">
				<img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
			</header>
			<article class="flex flex-auto flex-col p-4">
				<div class="flex-none">
					<h2 class="h6">Announcements</h2>
					<h3 class="h3">Skeleton is Awesome</h3>
				</div>
				<p class="flex-auto opacity-60">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
					eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae
				</p>
			</article>
			<footer class="flex flex-none items-center justify-between gap-4 p-4">
				<small class="opacity-60">By Alex</small>
				<small class="opacity-60">On {new Date().toLocaleDateString()}</small>
			</footer>
		</a>
	</div>
</div>

<style>
	@reference "../app.css";
	figure {
		@apply relative flex flex-col;
	}
	figure svg,
	.img-bg {
		@apply h-64 w-64 md:h-80 md:w-80;
	}
	.img-bg {
		@apply from-primary-300 to-warning-300 bg-gradient-to-r;
		@apply absolute z-[-1] rounded-full blur-[64px];
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite;
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
