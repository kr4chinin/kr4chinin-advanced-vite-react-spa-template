// https://github.com/simonhaenisch/prettier-plugin-organize-imports
const organizeImports = require('prettier-plugin-organize-imports');

// https://prettier.io/docs/en/configuration.html
module.exports = {
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  plugins: [organizeImports],
};
