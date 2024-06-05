# kr4chinin advanced Vite React SPA template ⚛️

Pre-configured **template** for React SPA apps with the most popular libraries
and tools. Perfect option to bootstrap your next project.

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
