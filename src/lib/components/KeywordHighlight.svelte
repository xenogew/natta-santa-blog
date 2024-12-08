<script lang="ts">
	let { children } = $props();
</script>

<b
	class="underline underline-offset-4 decoration-pink-600 dark:decoration-pink-300 decoration-wavy decoration-2"
>
	{@render children()}
</b>
