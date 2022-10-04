module.exports = {
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-rational-order',
		'stylelint-config-css-modules',
		'stylelint-prettier/recommended',
	],
	'overrides': [
		{
			'files': ['**/*.tsx', '**/*.ts', '**/*.js', '**/*.jsx'],
			'customSyntax': '@stylelint/postcss-css-in-js',
		},
	],
	rules: {
		'function-no-unknown': [true, {'ignoreFunctions': ['/\\${/']}],
		'keyframe-declaration-no-important': true,
		'alpha-value-notation': 'number',
		'hue-degree-notation': 'angle',
		'color-function-notation': 'modern',
		'color-hex-alpha': 'never',
		'color-hex-length': 'long',
		'color-named': 'never',
		'length-zero-no-unit': true,
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'numeric',
		'function-url-quotes': 'always',
		'number-max-precision': 3,
		'shorthand-property-no-redundant-values': true,
		'value-no-vendor-prefix': true,
		'selector-pseudo-element-colon-notation': 'double',
		'rule-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-single-line-comment'],
			},
		],
		'at-rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment'],
			},
		],
		'comment-whitespace-inside': 'always',
		'selector-max-id': 0,
		'declaration-no-important': null,
		'no-descending-specificity': null,
		'prettier/prettier': [
			true,
			{
				'singleQuote': false,
			},
		],
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: ['composes', 'font-family'],
			},
		],
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: ['/flex/', '/grid/', '/background/'],
			},
		],
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignoreProperties: ['composes'],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'order/properties-order': [
			{
				groupName: 'Special',
				emptyLineBefore: 'always',
				properties: ['all'],
			},
		],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': true,
			},
		],
	},
};
