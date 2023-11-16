module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-css-modules',
		'stylelint-prettier/recommended',
		'stylelint-config-clean-order/error',
	],
	rules: {
		'alpha-value-notation': 'number',
		'color-hex-alpha': 'never',
		'color-hex-length': 'long',
		'color-named': 'never',
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'numeric',
		'function-url-quotes': 'always',
		'number-max-precision': 4,
		'selector-max-id': 0,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'no-empty-source': [true, {severity: 'warning'}],
		'media-feature-range-notation': 'prefix',
		'prettier/prettier': [true, {singleQuote: false}],
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: ['/flex/', '/grid/', '/background/'],
			},
		],
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: ['composes', 'font-family'],
			},
		],
	},
};
