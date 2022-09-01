import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Button from '../Button';
import Switch from './Switch';
import {SwitchProps} from './Switch.types';

export default {
	title: 'Switch',
	component: Switch,
	argTypes: {
		theme: {
			type: 'string',
			description: 'The background color on which the button is displayed',
			defaultValue: 'white',
			control: {type: 'radio'},
			options: ['white', 'gray'],
		},
		defaultChecked: {
			type: 'boolean',
			control: {disable: true},
		},
		disabled: {
			type: 'boolean',
			defaultValue: false,
		},
		onChange: {
			type: 'function',
			control: {disable: true},
		},
		children: {
			type: 'string',
			defaultValue: '',
		},
		className: {
			type: 'string',
			control: {disable: true},
		},
	},
} as ComponentMeta<typeof Switch>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
	return <Switch {...args} />;
};

export const WithChildren = Template.bind({});
WithChildren.args = {
	children: (
		<>
			Very very long text{' '}
			<Button isLink styleType="text">
				<a href="/">Link</a>
			</Button>
		</>
	),
	onChange: action('123'),
};
WithChildren.argTypes = {
	onChange: {control: {disable: true}},
	children: {control: {disable: true}},
};

export const ThemeWhite = Template.bind({});

export const ThemeGray = Template.bind({});
ThemeGray.args = {
	theme: 'gray',
};
