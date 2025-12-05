import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [tailwindcss(), enhancedImages(), sveltekit()],
	server: {
		host: '0.0.0.0',
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				'static/.well-known/appspecific/com.chrome.devtools.json',
			],
		},
	},
});
