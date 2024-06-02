module.exports = {
	extends: [
		'react-app',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'plugin:regexp/recommended'
	],
	plugins: ['@tanstack/query', '@stylistic', 'regexp'],
	parser: '@typescript-eslint/parser',
	rules: {
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports'
			}
		],
		'no-redeclare': 0,
		'line-comment-position': [
			'warn',
			{
				position: 'above'
			}
		],
		'padding-line-between-statements': [
			'warn',
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'return',
					'if',
					'do',
					'while',
					'for',
					'switch',
					'try',
					'with'
				]
			},
			{
				blankLine: 'always',
				prev: ['if', 'do', 'while', 'for', 'switch', 'try', 'with'],
				next: '*'
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['if', 'do', 'while', 'for', 'switch', 'try', 'with']
			}
		],
		'@typescript-eslint/no-redeclare': 0,
		'react/button-has-type': 1,
		'react/function-component-definition': [
			1,
			{
				namedComponents: 'arrow-function'
			}
		]
	}
};
