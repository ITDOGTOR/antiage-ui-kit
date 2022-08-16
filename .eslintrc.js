module.exports = {
	extends: ['airbnb', 'airbnb-typescript', 'plugin:import/typescript', 'plugin:prettier/recommended'],
	plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'simple-import-sort', 'import', 'react-hooks'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	env: {
		browser: true,
		es6: true,
	},
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				shorthandFirst: true,
			},
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
				enforceForJSX: true,
			},
		],
		'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
		'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
	},
};
