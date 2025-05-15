<script lang="ts">
	import BuyMeCoffee from '$lib/components/BuyMeCoffee.svelte';
	import { base } from '$app/paths';
</script>

<footer class="bg-stone-300 dark:bg-stone-900 z-100 flex w-full flex-col space-y-4 px-4 md:px-24 py-4">
	<div class="flex flex-col-reverse justify-between gap-8 md:flex-row">
		<!-- Left section - Buy Me Coffee -->
		<div class="flex flex-col items-center md:items-start">
			<h3 class="font-extrabold text-xl mb-4">Support Me</h3>
			<BuyMeCoffee bmcId="xenogew" bmcText="Buy me a coffee" />
		</div>

		<!-- Right section - Navigation -->
		<div class="flex flex-col items-center md:items-end">
			<h3 class="font-extrabold text-xl mb-4">Navigation</h3>
			<nav>
				<ul class="flex flex-col items-center gap-4 md:items-end">
					<li>
						<a
							class="btn-footer-menu"
							data-sveltekit-preload-data="tap"
							href="{base}/blog"
							rel="noreferrer"
						>
							.blog()
						</a>
					</li>
					<li>
						<a
							class="btn-footer-menu"
							data-sveltekit-preload-data="tap"
							href="{base}/about"
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
