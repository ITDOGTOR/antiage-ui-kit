import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Input from './Input';
import {InputProps} from './Input.types';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		theme: {
			name: 'theme',
			defaultValue: 'white',
			description: 'Input theme',
			control: {
				type: 'inline-radio',
			},
		},
		inputSize: {
			name: 'inputSize',
			defaultValue: 'medium',
			description: 'Input size',
			control: {
				type: 'inline-radio',
			},
		},
		disabled: {
			name: 'disabled',
			description: 'Input disabled flag',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		type: {
			name: 'type',
			description: 'HTML input type',
			defaultValue: 'text',
			control: {type: 'inline-radio', options: ['text', 'password', 'email']},
		},
		error: {
			name: 'error',
			description: 'error message',
			defaultValue: '',
			control: {type: 'text'},
		},
		label: {
			name: 'label',
			description: 'Input label',
			defaultValue: 'Label',
			control: {type: 'text'},
		},
		placeholder: {
			name: 'placeholder',
			description: 'Input placeholder',
			defaultValue: 'Placeholder',
			control: {type: 'text'},
		},
		value: {
			name: 'value',
			description: 'Input value',
			defaultValue: '',
			control: {type: 'text'},
		},
		CustomIconComponent: {
			name: 'CustomIconComponent',
			description: 'Компонент кастомной SVG-иконки',
			defaultValue: undefined,
			control: {
				type: 'custom',
			},
		},
		iconName: {
			name: 'iconName',
			description: 'Имя иконки для автоподставления в путь импорта из кита',
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
	},
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Input> = (args: InputProps) => {
	return <Input {...args} />;
};

export const Sandbox = Template.bind({});
