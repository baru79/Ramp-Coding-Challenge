module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'./node_modules/ts-standard/eslintrc.json',
		'eslint-config-prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'react', 'react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
}
