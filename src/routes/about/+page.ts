import type { PageLoad } from './$types';
import { onMount } from 'svelte';

export const load = (async ({ url }) => {
	let code: string = '';
	onMount(() => {
		code = url.searchParams.get('code') ?? '';
	});

	return {
		code
	};
}) satisfies PageLoad;
