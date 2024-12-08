import type { LayoutLoad } from './$types';

export const load = (({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
}) satisfies LayoutLoad;
