module.exports = {
	stories: [{
		directory: '../src',
		titlePrefix: 'Anti-Age UI-Kit',
	}],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-react-router-v6',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
};
