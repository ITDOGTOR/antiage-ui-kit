import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import InputError from './InputError';
import {InputErrorProps} from './InputError.types';

export default {
	title: 'InputError',
	component: InputError,
	argTypes: {
		error: {
			name: 'error',
			description: 'error message',
			defaultValue: '',
			control: {type: 'text'},
		},
	},
} as ComponentMeta<typeof InputError>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof InputError> = (args: InputErrorProps) => {
	return <InputError {...args} />;
};

export const Sandbox = Template.bind({});
