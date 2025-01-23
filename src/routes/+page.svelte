<script lang="ts">
	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="container h-full justify-center items-center py-8">
	<div class="space-x-10 text-center flex">
		<a
			href="#"
			class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
		>
			<header>
				<img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
			</header>
			<article class="space-y-4 p-4">
				<div>
					<h2 class="h6">Announcements</h2>
					<h3 class="h3">Skeleton is Awesome</h3>
				</div>
				<p class="opacity-60">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
					eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam
					iure molestias cum expedita architecto itaque quae rem.
				</p>
			</article>
			<footer class="flex items-center justify-between gap-4 p-4">
				<small class="opacity-60">By Alex</small>
				<small class="opacity-60">On {new Date().toLocaleDateString()}</small>
			</footer>
		</a>

		<a
			href="#"
			class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
		>
			<header>
				<img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
			</header>
			<article class="space-y-4 p-4">
				<div>
					<h2 class="h6">Announcements</h2>
					<h3 class="h3">Skeleton is Awesome</h3>
				</div>
				<p class="opacity-60">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
					eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae
				</p>
			</article>
			<footer class="flex items-center justify-between gap-4 p-4">
				<small class="opacity-60">By Alex</small>
				<small class="opacity-60">On {new Date().toLocaleDateString()}</small>
			</footer>
		</a>
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
