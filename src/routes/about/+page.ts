import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	let code: string = url.searchParams.get('code') ?? '';

	return {
		code
	};
}) satisfies PageLoad;
