import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Select from './Select';
import {SelectLocalProps} from './Select.types';

const options = [
	{value: 1, label: 'Один'},
	{value: 2, label: 'Два'},
	{value: 3, label: 'Три'},
	{value: 4, label: 'Четыре'},
	{value: 5, label: 'Пять'},
	{value: 6, label: 'Шесть'},
	{value: 7, label: 'Семь'},
	{value: 8, label: 'Восемь'},
	{value: 9, label: 'Девять'},
	{value: 10, label: 'Десять'},
];

export default {
	title: 'Select',
	component: Select,
	argTypes: {
		options: {
			defaultValue: options,
		},
		placeholder: {
			defaultValue: 'Placeholder...',
			control: {type: 'text'},
		},
		type: {
			defaultValue: 'default',
		},
		label: {
			defaultValue: '',
			control: {type: 'text'},
		},
		value: {
			defaultValue: null,
			control: {type: 'text'},
		},
		error: {
			defaultValue: '',
			control: {type: 'text'},
		}
	},
} as ComponentMeta<typeof Select>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Select> = (args: SelectLocalProps) => {
	return <Select {...args} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {};
