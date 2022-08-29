import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Select from './Select';
import {SelectProps} from './Select.types';

export default {
	title: 'Select',
	component: Select,
	argTypes: {
		icon: {
			control: {
				disable: true,
			},
		},
	},
	args: {
		variant: 'outlined',
		disabled: false,
		placeholder: 'Select item',
		onSelect: action('Chosen option'),
	},
} as ComponentMeta<typeof Select>;

const options = [
	{currency: 'RUB', label: 'Русский рубль', rate: 25},
	{currency: 'UAH', label: 'Украинская гривна', rate: 10},
	{currency: 'KZT', label: 'Казахстанський теньге ', rate: 15},
	{currency: 'USD', label: 'США доллар', rate: 20},
];

const optionsLabel = [{label: 'День'}, {label: 'Неделя'}, {label: 'Месяц'}, {label: 'Год'}];

const points = 3500;

const customOptions = options.map((option, index) => ({...option, amount: option.rate * points, keyIndex: index}));
const customOptionsLabel = optionsLabel.map((option, index) => ({...option, keyIndex: index}));

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Select> = (args: SelectProps) => {
	return <Select {...args} />;
};

export const WithTwoValues = Template.bind({});
WithTwoValues.args = {
	options: customOptions,
};

export const WithOneValue = Template.bind({});
WithOneValue.args = {
	options: customOptionsLabel,
};
