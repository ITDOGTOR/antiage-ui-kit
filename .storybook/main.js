module.exports = {
	stories: [{
		directory: '../src',
		titlePrefix: 'Anti-Age UI-Kit',
	}],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: 'storybook-css-modules',
			options: {
				cssModulesLoaderOptions: {
					importLoaders: 1,
					modules: {
						'localIdentName': 'ui-kit-[local]',
					},
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
