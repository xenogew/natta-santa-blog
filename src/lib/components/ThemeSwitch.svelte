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
	controlInactive="bg-surface-900"
	checked={mode}
	onCheckedChange={(e) => {
		switchMode(e.checked);
	}}
>
	{#snippet inactiveChild()}<Icon icon="lucide:moon" width="14" height="14" />{/snippet}
	{#snippet activeChild()}<Icon icon="lucide:sun" width="14" height="14" />{/snippet}
</Switch>
