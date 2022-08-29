import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import CheckBox from './CheckBox';
import {CheckBoxProps} from './CheckBox.types';

export default {
	title: 'CheckBox',
	component: CheckBox,
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
} as ComponentMeta<typeof CheckBox>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof CheckBox> = (args: CheckBoxProps) => {
	return <CheckBox {...args} />;
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
