import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import DropdownOption from '../DropdownOption';
import DropdownSelect from '../DropdownSelect';
import DropdownController from './DropdownController';
import {DropdownControllerProps} from './DropdownController.types';

export default {
	title: 'DropdownController',
	component: DropdownController,
	subcomponents: {DropdownSelect, DropdownOption},
} as ComponentMeta<typeof DropdownController>;

const options = [
	{currency: 'RUB', label: 'Русский рубль', rate: 25},
	{currency: 'UAH', label: 'Украинская гривна', rate: 10},
	{currency: 'KZT', label: 'Казахстанський теньге ', rate: 15},
	{currency: 'USD', label: 'США доллар', rate: 20},
	{currency: 'USD', label: 'США доллар', rate: 20},
	{currency: 'USD', label: 'США доллар', rate: 20},
	{currency: 'USD', label: 'США доллар', rate: 20},
];

const optionsLabel = [{label: 'День'}, {label: 'Неделя'}, {label: 'Месяц'}, {label: 'Год'}];

const returnArrWithKeyIndex = (arr: any[]) => {
	return arr.map((item, i) => ({...item, keyIndex: i}));
};

const points = 3500;
const PLACEHOLDER = 'Choose item';
const customOptions = options.map((option, index) => ({...option, amount: option.rate * points, keyIndex: index}));

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DropdownController> = (args: DropdownControllerProps) => {
	return <DropdownController {...args} />;
};

export const SelectDefault = Template.bind({});
SelectDefault.args = {
	options: returnArrWithKeyIndex(optionsLabel),
	menuRender: (props) => <DropdownSelect {...props} />,
	dropdownRender: (props) => <DropdownOption {...props} />,
	placeholder: PLACEHOLDER,
};

export const SelectWithTwoValues = Template.bind({});
SelectWithTwoValues.args = {
	options: customOptions,
	menuRender: (props) => <DropdownSelect {...props} />,
	dropdownRender: (props) => <DropdownOption {...props} />,
	placeholder: PLACEHOLDER,
};
