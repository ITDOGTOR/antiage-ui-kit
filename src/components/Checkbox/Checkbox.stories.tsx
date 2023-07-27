import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Checkbox from './Checkbox';
import {CheckboxProps} from './Checkbox.types';

export default {
	title: 'Checkbox',
	component: Checkbox,
	argTypes: {
		value: {
			defaultValue: '',
			control: {type: 'text'},
		},
		className: {
			defaultValue: '',
			control: {type: 'text'},
		},
		containerClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		wrapperClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		defaultChecked: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		disabled: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		id: {
			defaultValue: 'checkboxId',
			control: {type: 'text'},
		},
		label: {
			defaultValue: 'Значение',
			control: {type: 'text'},
		},
		labelClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		theme: {
			defaultValue: 'white',
			control: {
				type: 'inline-radio',
			},
		},
	},
} as ComponentMeta<typeof Checkbox>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
	return <Checkbox {...args} />;
};

export const Sandbox = Template.bind({});
