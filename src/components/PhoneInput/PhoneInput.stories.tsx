import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import PhoneInput from './PhoneInput';
import {PhoneInputProps} from './PhoneInput.types';

export default {
	title: 'PhoneInput',
	component: PhoneInput,
	argTypes: {
		disabled: {
			name: 'disabled',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		country: {
			name: 'country',
			defaultValue: 'ru',
			control: {type: 'text'},
		},
		error: {
			name: 'error',
			description: 'error message',
			defaultValue: '',
			control: {type: 'text'},
		},
		className: {table: {disable: true}},
		innerRef: {table: {disable: true}},
	},
} as ComponentMeta<typeof PhoneInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof PhoneInput> = (args: PhoneInputProps) => {
	return <PhoneInput {...args} />;
};

export const Sandbox = Template.bind({});
