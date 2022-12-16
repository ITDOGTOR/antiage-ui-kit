import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import DatePicker from './DatePicker';
import {DatePickerProps} from './DatePicker.types';

export default {
	title: 'DatePicker',
	component: DatePicker,
	argTypes: {
		theme: {
			defaultValue: 'white',
			table: {defaultValue: {summary: 'white'}},
			control: {type: 'select'},
		},
		disabled: {
			name: 'disabled',
			defaultValue: false,
			control: {type: 'boolean'},
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
		size: {
			name: 'size',
			description: 'size of datepicker',
			defaultValue: 'default',
			control: {type: 'select', options: ['default', 'small']},
		},
		dropdown: {
			name: 'dropdown',
			description: 'dropdown indicator',
			defaultValue: 'false',
			control: {type: 'boolean'},
		},
		contrast: {
			name: 'contrast',
			description: 'contrast',
			defaultValue: 'false',
			control: {type: 'boolean'},
		},
		className: {table: {disable: true}},
		wrapperClassName: {table: {disable: true}},
		labelClassName: {table: {disable: true}},
		placeholderClassName: {table: {disable: true}},
		iconClassName: {table: {disable: true}},
		innerRef: {table: {disable: true}},
	},
} as ComponentMeta<typeof DatePicker>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DatePicker> = (args: DatePickerProps) => {
	return <DatePicker {...args} />;
};

export const Sandbox = Template.bind({});
