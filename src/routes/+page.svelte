<script lang="ts">
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<TabGroup
			justify="justify-center"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
			flex="flex-1 lg:flex-none"
			rounded=""
			border=""
			class="bg-surface-100-800-token"
		>
			<TabAnchor href="/" selected={true}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>(label)</span>
			</TabAnchor>
			<TabAnchor href="/">
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>(label)</span>
			</TabAnchor>
			<TabAnchor href="/">
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>(label)</span>
			</TabAnchor>
		</TabGroup>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="card card-hover p-4 text-left overflow-hidden hover:cursor-pointer">
				<header>
					<img
						class="bg-black/50 w-full aspect-[21/9]"
						alt="card-img"
						src="https://lh3.googleusercontent.com/pw/AP1GczMAz-kIaFIHKfnv287xiRqDgl1rfEAHdcnVrD_Z93oWIzSiBCjdmflXOBN9hFjhAsg5kj_NdBDgAEzFBXBVD7pGKtx-8PIgim478FWvdx86aEY9i9owCpmXIayxQSTNcZUXYhHol3dcU4W0ozfvaGzNHzUQEFebhzM1j0oRn73WXw_CpQvziGiN0_3V6iZXIsy_5nD3AdvFj3WjtNpxz7GkTvNrvliAD5tW4-updVvHWh3DEsfyr9bhJD6uaZt6fOehWSTvM4aT16ocSRPBipSryaUFCHu4ZpzbaVuUPqVgNQAHgiKQmNDVFP83CaIomlgC8mgtIZpqT4ZpQRNr3dgOA_NhpDj1JIGsBf6HPp6xbekQ7sPHjBwZCPhNkaILQ2axFwRmxQ1PyZm_7Oi4LFtumIOzihEWkErboasodR2x-pfpB6viXK4Nyoq_jE9dVk8ePL74MLDnfKoOQOQ8yy6iuFNoGZMce7ATMkDTMxVpWdgUb5v-FY9efG22acgPuKYEwSp-uz_wd81Se0dYHINMwPdYCanQdX3HD6btx_5OejalMVSDbWwHwSb5Hb-vRmAEPW-iLclcjacXc3vCsmLVt_faAdMMr9TQZHeLeJcE6_qdjlhja55fuG8rzE1CmqcXR36ZPIPq4rtVwZEqHI2_LH_RR0yR5EHoACj6A2vuzFVteME43t0nrueemHwLJYxZIl6fvvnMxv-tqTOzxuowC2Z1TLeaH-hFyZ8b_zoS4ChibI-KX85c8dM50dolHudtmwqgbKmMIykDVqfFS6j2_emBTeYba8FU-uYfrEDGLz47LZBc_697GxJC3uxFkgFOEfcIjUG2lai-i8-EqoQJIJ83YkxHHuag1589VUr-d0Z8Iq4ld82hjTpD_P9GEO1j8qmHNbKwzJqEXSjo2MK770CtLlcwX2T0nIjbK4WoZBuhLkrEgEjhIfRm7w=w1944-h1458-s-no-gm?authuser=1"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore="">Skeleton is Awesome!</h3>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
							eveniet eligendi cu...
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<figure
						class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
						data-testid="avatar"
					>
						<img
							class="avatar-image w-full object-cover"
							style=""
							src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&amp;ixlib=rb-4.0.3&amp;w=32&amp;h=32&amp;auto=format&amp;fit=crop"
							alt=""
						/>
					</figure>
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold" data-toc-ignore="">By Alex</h6>
						<small>On 5/26/2024</small>
					</div>
				</footer>
			</div>

			<div class="card card-hover p-4 text-left overflow-hidden hover:cursor-pointer">
				<header>
					<img
						class="bg-black/50 w-full aspect-[21/9]"
						alt="card-img"
						src="https://lh3.googleusercontent.com/pw/AP1GczMAz-kIaFIHKfnv287xiRqDgl1rfEAHdcnVrD_Z93oWIzSiBCjdmflXOBN9hFjhAsg5kj_NdBDgAEzFBXBVD7pGKtx-8PIgim478FWvdx86aEY9i9owCpmXIayxQSTNcZUXYhHol3dcU4W0ozfvaGzNHzUQEFebhzM1j0oRn73WXw_CpQvziGiN0_3V6iZXIsy_5nD3AdvFj3WjtNpxz7GkTvNrvliAD5tW4-updVvHWh3DEsfyr9bhJD6uaZt6fOehWSTvM4aT16ocSRPBipSryaUFCHu4ZpzbaVuUPqVgNQAHgiKQmNDVFP83CaIomlgC8mgtIZpqT4ZpQRNr3dgOA_NhpDj1JIGsBf6HPp6xbekQ7sPHjBwZCPhNkaILQ2axFwRmxQ1PyZm_7Oi4LFtumIOzihEWkErboasodR2x-pfpB6viXK4Nyoq_jE9dVk8ePL74MLDnfKoOQOQ8yy6iuFNoGZMce7ATMkDTMxVpWdgUb5v-FY9efG22acgPuKYEwSp-uz_wd81Se0dYHINMwPdYCanQdX3HD6btx_5OejalMVSDbWwHwSb5Hb-vRmAEPW-iLclcjacXc3vCsmLVt_faAdMMr9TQZHeLeJcE6_qdjlhja55fuG8rzE1CmqcXR36ZPIPq4rtVwZEqHI2_LH_RR0yR5EHoACj6A2vuzFVteME43t0nrueemHwLJYxZIl6fvvnMxv-tqTOzxuowC2Z1TLeaH-hFyZ8b_zoS4ChibI-KX85c8dM50dolHudtmwqgbKmMIykDVqfFS6j2_emBTeYba8FU-uYfrEDGLz47LZBc_697GxJC3uxFkgFOEfcIjUG2lai-i8-EqoQJIJ83YkxHHuag1589VUr-d0Z8Iq4ld82hjTpD_P9GEO1j8qmHNbKwzJqEXSjo2MK770CtLlcwX2T0nIjbK4WoZBuhLkrEgEjhIfRm7w=w1944-h1458-s-no-gm?authuser=1"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore="">Skeleton is Awesome!</h3>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
							eveniet
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<figure
						class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-8 rounded-full"
						data-testid="avatar"
					>
						<img
							class="avatar-image w-full object-cover"
							style=""
							src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&amp;ixlib=rb-4.0.3&amp;w=32&amp;h=32&amp;auto=format&amp;fit=crop"
							alt=""
						/>
					</figure>
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold" data-toc-ignore="">By Alex</h6>
						<small>On 5/26/2024</small>
					</div>
				</footer>
			</div>
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
