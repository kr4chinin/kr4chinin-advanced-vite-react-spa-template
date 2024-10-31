module.exports = {
	// Specifies the base configurations to extend
	extends: [
		// Extends the default configuration for React apps
		'react-app',

		// Extends recommended rules for TanStack Query
		// https://tanstack.com/query/v4/docs/eslint/eslint-plugin-query
		'plugin:@tanstack/eslint-plugin-query/recommended',

		// Extends recommended rules for working with regular expressions
		// https://github.com/ota-meshi/eslint-plugin-regexp
		'plugin:regexp/recommended',
	],
	plugins: [
		// Plugin for TanStack Query
		'@tanstack/query',

		// Plugin for stylistic rules
		// https://www.npmjs.com/package/@stylistic/eslint-plugin
		'@stylistic',

		// Plugin for regex rules
		'regexp',

		// Plugin for React hooks rules
		'react-hooks-extra',
	],
	parser: '@typescript-eslint/parser',
	rules: {
		// Prefers using type imports
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'no-redeclare': 0,
		// Inline comment should be above
		'line-comment-position': [
			'warn',
			{
				position: 'above',
			},
		],

		// Configure padding rules before and after variable declarations and statements
		'padding-line-between-statements': [
			'warn',
			{
				blankLine: 'always',
				prev: '*',
				next: ['return', 'if', 'do', 'while', 'for', 'switch', 'try', 'with'],
			},
			{
				blankLine: 'always',
				prev: ['if', 'do', 'while', 'for', 'switch', 'try', 'with'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['if', 'do', 'while', 'for', 'switch', 'try', 'with'],
			},
		],
		// Disables the TypeScript specific no-redeclare rule
		'@typescript-eslint/no-redeclare': 0,

		// Warns if a button does not have an explicit type attribute
		'react/button-has-type': 1,

		// Named components must be arrow functions
		'react/function-component-definition': [
			1,
			{
				namedComponents: 'arrow-function',
			},
		],

		// Warns if a component uses `useEffect` with a direct `setState` call
		'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
	},
};
