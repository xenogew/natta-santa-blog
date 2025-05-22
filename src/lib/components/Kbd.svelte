<script lang="ts">
	/**
	 * Keyboard component for displaying keyboard shortcuts
	 * Usage:
	 * <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
	 */
	let { children } = $props();
</script>

<kbd
	class="inline-flex h-5 items-center justify-center rounded border border-gray-200 bg-gray-100 px-2 py-3.5 align-middle font-mono text-xs leading-none font-medium text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
>
	{@render children()}
</kbd>
