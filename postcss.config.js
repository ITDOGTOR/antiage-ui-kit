/* eslint-disable @typescript-eslint/no-var-requires */
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');

module.exports = {
	plugins: [
		postcssPresetEnv({
			autoprefixer: false,
			features: {'nesting-rules': false},
		}),
		postcssNested(),
	],
};
