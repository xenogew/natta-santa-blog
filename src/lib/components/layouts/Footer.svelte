<script lang="ts">
	import BuyMeCoffee from '$lib/components/BuyMeCoffee.svelte';
	import { resolve } from '$app/paths';
</script>

<footer
	class="z-100 flex w-full flex-col space-y-4 bg-stone-300 px-4 py-4 md:px-24 dark:bg-stone-900"
>
	<div class="flex flex-col-reverse justify-between gap-8 md:flex-row">
		<!-- Left section - Buy Me Coffee -->
		<div class="flex flex-col items-center md:items-start">
			<h3 class="mb-4 text-xl font-extrabold">Support Me</h3>
			<BuyMeCoffee bmcId="xenogew" bmcText="Buy me a coffee" />
		</div>

		<!-- Right section - Navigation -->
		<div class="flex flex-col items-center md:items-end">
			<h3 class="mb-4 text-xl font-extrabold">Navigation</h3>
			<nav>
				<ul class="flex flex-col items-center gap-4 md:items-end">
					<li>
						<a
							class="btn-footer-menu"
							data-sveltekit-preload-data="tap"
							href={resolve('/blog')}
							rel="noreferrer"
						>
							.blog()
						</a>
					</li>
					<li>
						<a
							class="btn-footer-menu"
							data-sveltekit-preload-data="tap"
							href={resolve('/about')}
							rel="noreferrer"
						>
							.about()
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</footer>

<style>
	@reference "../../../app.css";
	.btn-footer-menu {
		@apply btn btn-base decoration-primary-900 dark:decoration-primary-200 hover:preset-tonal-secondary rounded-sm font-mono underline-offset-8 hover:underline;
	}
</style>
