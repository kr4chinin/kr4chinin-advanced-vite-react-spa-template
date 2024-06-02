import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// @ts-ignore
// Waiting for the patch to resolve type issue
// https://github.com/gxmari007/vite-plugin-eslint/issues/79
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // For styled components transform to readable classnames
      babel: {
        presets: ['@babel/preset-typescript'],
        plugins: [
          '@babel/plugin-transform-typescript',
          '@babel/plugin-proposal-class-properties',
          [
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
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    minify: true,
    outDir: 'build',
    sourcemap: true,
    cssCodeSplit: true,
    assetsDir: 'assets',

    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
  },
});
