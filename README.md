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

Do not forget to change **author** and other specific information in `package.json`.

### Scripts

Scripts featured in `package.json` file:

- `npm start` - start **development** server;
- `npm run ts` - run **TypeScript** compiler;
- `npm run build` - build **production** version;
- `npm run lint:ts` - run **TypeScript** linter;
- `npm run format` - run **Prettier** formatter;
- `npm run preview` - start **preview** server;
- `npm run prepare` - initialize **Husky** hooks;
