import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
