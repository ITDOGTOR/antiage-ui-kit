module.exports = {
	stories: [{
		directory: '../src',
		titlePrefix: 'Anti-Age UI-Kit',
	}],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
