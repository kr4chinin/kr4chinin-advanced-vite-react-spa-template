import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// @ts-ignore
// Waiting for the patch to resolve type issue
// https://github.com/gxmari007/vite-plugin-eslint/issues/79
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsconfigPaths(),
		react({
			babel: {
				presets: ['@babel/preset-typescript'],
				plugins: [
					'@babel/plugin-transform-typescript',
					'@babel/plugin-transform-class-properties',
					[
						// For styled components transform to readable classnames
						// https://github.com/styled-components/babel-plugin-styled-components
						'babel-plugin-styled-components',
						{
							ssr: false,
							pure: true,
							fileName: true,
							displayName: true,
						},
					],
				],
			},
		}),
		// https://github.com/gxmari007/vite-plugin-eslint
		eslint({
			exclude: ['/virtual:/**', 'node_modules/**'],
		}),
		// https://github.com/pd4d10/vite-plugin-svgr#readme
		// Imports should look like this – "import ReactLogo from './assets/react.svg?react';""
		svgr(),
	],
	// Will run on http://localhost:3000
	server: {
		port: 3000,
		host: '0.0.0.0',
	},

	build: {
		// Enable minification of the output files
		minify: true,

		// Directory to output the built files
		outDir: 'build',

		// Generate source maps for debugging purposes
		sourcemap: true,

		// Enable CSS code splitting, which creates separate CSS files instead of inline styles
		cssCodeSplit: true,

		// Directory for placing built assets (like images, fonts, etc.)
		assetsDir: 'assets',

		// Rollup options for more granular control over the build process
		rollupOptions: {
			output: {
				// Naming convention for chunk files
				chunkFileNames: 'assets/[name].[hash].js',

				// Naming convention for entry files
				entryFileNames: 'assets/[name].[hash].js',

				// Naming convention for asset files (like images, fonts, etc.)
				assetFileNames: 'assets/[name].[hash][extname]',
			},
		},
	},
});
