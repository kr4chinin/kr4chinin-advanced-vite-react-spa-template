import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// @ts-ignore
// Waiting for the patch to resolve type issue
// https://github.com/gxmari007/vite-plugin-eslint/issues/79
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint({
			exclude: ['/virtual:/**', 'node_modules/**']
		})
	],
	server: {
		port: 3000,
		host: '0.0.0.0'
	}
});
