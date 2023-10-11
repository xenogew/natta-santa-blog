import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const code: string = url.searchParams.get('code') ?? '';

	return {
		code
	};
}) satisfies PageLoad;
