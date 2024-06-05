# kr4chinin advanced Vite React SPA template ⚛️

Pre-configured **template** for React SPA apps with the most popular libraries
and tools. Perfect option to bootstrap your next project.

- [kr4chinin advanced Vite React SPA template ⚛️](#kr4chinin-advanced-vite-react-spa-template-️)
  - [Quick start](#quick-start)
    - [Scripts](#scripts)
    - [Recommended VSCode extensions](#recommended-vscode-extensions)
  - [Tools and libraries](#tools-and-libraries)
    - [Libraries](#libraries)
    - [Tools](#tools)
    - [Plugins](#plugins)
    - [tsconfig.json](#tsconfigjson)
    - [vite.config.ts](#viteconfigts)
  - [Author](#author)

## Quick start

In **existing** project directory:

```bash
# clone repo
git clone https://github.com/kr4chinin/kr4chinin-advanced-vite-react-spa-template .

# install dependencies
npm install

# initialize git
rm -rf .git
git init
git add .
git commit -m "chore: getting started"

# initialize husky hooks
npm run prepare

# start development server
npm start
```

Do not forget to change **author** and other specific information in `package.json`, remove `LICENSE.txt` and `README.md` files and add your own before publishing your app.

If you're not using **VSCode** IDE you also need to delete `.vscode` directory.

### Scripts

Scripts featured in `package.json` file:

- `npm start` - start **development** server;
- `npm run ts` - run **TypeScript** compiler;
- `npm run build` - build **production** version;
- `npm run lint:ts` - run **TypeScript** linter;
- `npm run format` - run **Prettier** formatter;
- `npm run preview` - start **preview** server;
- `npm run prepare` - initialize **Husky** hooks;

### Recommended VSCode extensions

**Essential**:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) – `eslint` support;
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) – `prettier` support;
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - to make work with `git` more comfortable;
- [CSpell](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - to make less **spelling** mistakes;
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - show errors near problematic lines;
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) - to make `TypeScript` errors readable;
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - file path autocompletion;
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) - `styled-components` syntax highlighting, autocompletion.

**Optional**:

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - to make work with HTML tags more comfortable;
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg) – **SVG** preview, minification;
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - to make **indentation** more visually noticeable;
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) - prettier icons;
- [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap) - easier work with `HTML` tags wrapping.

## Tools and libraries

### Libraries

- [React](https://reactjs.org/) – UI framework;
- [TypeScript](https://www.typescriptlang.org/) – static type checker;
- [Vite](https://vitejs.dev/) – build tool;
- [styled-components](https://styled-components.com/) – _CSS-in-JS_ library;
- [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/introduction) – data fetching library;
- [react-router-dom](https://reactrouter.com/en/main/start/overview) – routing library;
- [axios](https://axios-http.com/) – _HTTP_ client;
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary) – error boundary component, handle **runtime errors** in a **safe** way;

### Tools

- [ESLint](https://eslint.org/) – linter;
- [Prettier](https://prettier.io/) – code formatter;
- [Husky](https://typicode.github.io/husky/#/) – git hooks manager;
- [lint-staged](https://github.com/okonet/lint-staged) – linter for staged files;
- [Babel](https://babeljs.io/) – transpiler.

### Plugins

- [prettier-plugin-organize-imports](https://www.npmjs.com/package/prettier-plugin-organize-imports) – automatically organize imports;
- [@stylistic/eslint-plugin](https://eslint.style/packages/default) – `eslint` plugin for stylistic rules (padding, indentation, etc.);
- [@babel/plugin-transform-typescript](https://babeljs.io/docs/babel-plugin-transform-typescript) – transpile `TypeScript` to JavaScript;
- [@babel/plugin-transform-class-properties](https://babeljs.io/docs/babel-plugin-transform-class-properties) – transpile class properties to JavaScript;
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) - React plugin for Vite;
- [@tanstack/eslint-plugin-query](https://tanstack.com/query/v4/docs/eslint/eslint-plugin-query) – `eslint` plugin for `@tanstack/react-query`;
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) – `eslint` plugin for `React` hooks;
- [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp) – `eslint` plugin for _regular expressions_;
- [vite-plugin-eslint](https://www.npmjs.com/package/vite-plugin-eslint) – `eslint` plugin for `Vite`;
- [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr) – SVGR plugin for `Vite`, import **SVGs** as `React` components.

### tsconfig.json

`tsconfig.json` is a configuration file for `TypeScript` compiler. Pre-configured with strict rules, useful options and paths aliases.

```json
{
  "compilerOptions": {
    /* Base options */
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "target": "ESNext",
    "verbatimModuleSyntax": false,
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,
    "useDefineForClassFields": true,

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "strictPropertyInitialization": false,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    /* TypeScript transpilation */
    "noEmit": true,
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "module": "esnext",

    /* Code runs in DOM */
    "lib": ["dom", "dom.iterable", "esnext"],

    /* Types */
    "types": ["vite/client"],

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### vite.config.ts

`vite.config.ts` is a configuration file for `Vite` build tool. Pre-configured with useful build options and plugins.

```typescript
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
```

## Author

Ilya Kruchinin ([https://github.com/kr4chinin](https://github.com/kr4chinin))

<!-- markdownlint-disable-next-line MD033 -->
<img src="./public/kr4chinin.jpg" alt="Author – Ilya Kruchinin (https://github.com/kr4chinin)" width="160" />
