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
		Size: {
			defaultValue: 'large',
			control: {type: 'select'},
		},
		disabled: {
			name: 'disabled',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		type: {
			name: 'type',
			description: 'HTML input type',
			defaultValue: 'text',
			control: {type: 'select', options: ['text', 'password', 'email', 'number', 'range']},
		},
		error: {
			name: 'error',
			description: 'error message',
			defaultValue: '',
			control: {type: 'text'},
		},
		label: {
			name: 'label',
			description: 'Label-placeholder',
			defaultValue: '',
			control: {type: 'text'},
		},
		placeholder: {
			name: 'placeholder',
			description: 'simple placeholder',
			defaultValue: '',
			control: {type: 'text'},
		},
		value: {
			name: 'value',
			description: 'Outer value',
			defaultValue: '',
			control: {type: 'text'},
		},
		className: {table: {disable: true}},
		wrapperClassName: {table: {disable: true}},
		inputWrapperClassName: {table: {disable: true}},
		labelClassName: {table: {disable: true}},
		placeholderClassName: {table: {disable: true}},
		iconClassName: {table: {disable: true}},
		innerRef: {table: {disable: true}},
		name: {
			name: 'name',
			description: 'input name',
			defaultValue: '',
			control: {type: 'text'},
		},
		autoComplete: {
			name: 'autocomplete',
			description: 'input autocomplete',
			defaultValue: false,
			control: {type: 'boolean'},
		},
	},
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Input> = (args: InputProps) => {
	return <Input {...args} />;
};

export const Sandbox = Template.bind({});
