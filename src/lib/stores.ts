import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isDark = writable(true);

export function initDarkMode() {
	if (!browser) {
		return;
	}

	const storedMode = localStorage.getItem('mode');
	if (storedMode !== null) {
		isDark.set(storedMode === 'dark');
	} else {
		localStorage.setItem('mode', 'dark');
	}

	isDark.subscribe((value) => {
		localStorage.setItem('mode', value ? 'dark' : 'light');
		document.documentElement.setAttribute('data-mode', value ? 'dark' : 'light');
	});
}
