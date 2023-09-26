import {ComponentMeta, ComponentStory} from '@storybook/react';
import React, {useState} from 'react';

import DatePicker from './DatePicker';
import {DatePickerProps} from './index.types';

export default {
	title: 'DatePicker',
	component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

// eslint-disable-next-line react/function-component-definition
const UncontrolledTemplate: ComponentStory<typeof DatePicker> = (args: DatePickerProps) => {
	return <DatePicker {...args} />;
};

// eslint-disable-next-line react/function-component-definition
const ControlledTemplate: ComponentStory<typeof DatePicker> = (args: DatePickerProps) => {
	const [value, setValue] = useState('');

	return <DatePicker {...args} value={value} onChange={(val: string) => setValue(val)} />;
};

export const Sandbox = UncontrolledTemplate.bind({});
export const Controlled = ControlledTemplate.bind({});
