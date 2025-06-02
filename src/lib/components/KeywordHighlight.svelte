<script lang="ts">
	let { children } = $props();
</script>

<b
	class="underline decoration-pink-600 decoration-wavy decoration-2 underline-offset-4 dark:decoration-pink-300"
>
	{@render children()}
</b>
