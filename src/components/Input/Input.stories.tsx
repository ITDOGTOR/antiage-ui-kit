import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Input from './Input';
import {InputProps} from './Input.types';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		theme: {
			defaultValue: 'white',
			table: {defaultValue: {summary: 'white'}},
			control: {type: 'select'},
		},
		disabled: {
			name: 'disabled',
			description: 'Ant-Design prop',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		type: {
			name: 'type',
			description: 'HTML input type',
			defaultValue: 'text',
			control: {type: 'select', options: ['text', 'password', 'email', 'textarea', 'number', 'range']},
		},
		className: {table: {disable: true}},
	},
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Input> = (args: InputProps) => {
	return <Input {...args} />;
};

export const Sandbox = Template.bind({});
