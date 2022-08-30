import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Switch from './Switch';
import {SwitchProps} from './Switch.types';

export default {
	title: 'Switch',
	component: Switch,
	argTypes: {
		theme: {
			type: 'string',
			defaultValue: 'white',
			control: {
				type: 'radio',
			},
			options: ['white', 'gray'],
		},
		disabled: {
			type: 'boolean',
			defaultValue: false,
		},
		children: {
			type: 'string',
			defaultValue: '',
		},
		className: {
			type: 'string',
			defaultValue: '',
		},
	},
} as ComponentMeta<typeof Switch>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
	return <Switch {...args} />;
};

export const WhiteTheme = Template.bind({});
export const GrayTheme = Template.bind({});
export const WhiteThemeChildren = Template.bind({});

WhiteThemeChildren.args = {
	theme: 'white',
	children: 'Text',
};

WhiteTheme.args = {
	theme: 'white',
};

GrayTheme.args = {
	theme: 'gray',
};
