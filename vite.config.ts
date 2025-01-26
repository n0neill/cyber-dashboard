import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite' // [!code ++] // [!code focus]

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({ // [!code ++] // [!code focus]
			compiler: 'svelte', // [!code ++] // [!code focus]
		}), // [!code ++] // [!code focus]
	]
});
