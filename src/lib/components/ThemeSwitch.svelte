<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	const switchMode = (checked: boolean) => {
		mode = checked;
		document.documentElement.classList.toggle('dark');
	};

	let mode = $state(false);
</script>

<Switch
	name="mode"
	controlActive="bg-surface-400"
	controlInactive="bg-slate-800"
	compact
	checked={mode}
	onCheckedChange={(e) => {
		switchMode(e.checked);
	}}
	base="hidden md:inline-flex items-center gap-4 "
	labelClasses="hidden"
>
	{#snippet inactiveChild()}<Icon icon="lucide:moon" width="24" height="24" />{/snippet}
	{#snippet activeChild()}<Icon icon="lucide:sun" width="24" height="24" />{/snippet}
	light-dark switch
</Switch>
