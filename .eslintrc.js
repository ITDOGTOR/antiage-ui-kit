module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:jest/recommended',
		'plugin:storybook/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		createDefaultProgram: true,
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.eslint.json',
	},
	rules: {
		'react/jsx-props-no-spreading': 'off',
		'react/display-name': 'warn',
		'react/jsx-key': 'warn',

		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',

		'no-restricted-exports': 'off',
		'jsx-a11y/label-has-associated-control': 'warn',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-types': 'warn',
	},
};
