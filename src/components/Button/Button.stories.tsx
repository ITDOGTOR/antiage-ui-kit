import React from 'react';

import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		label: {
			type: 'string',
			description: 'Текст',
			defaultValue: 'Click me!',
		},
		typeButton: {
			type: 'string',
			description: 'Цвет кнопки',
			defaultValue: 'blue',
			control: {
				type: 'select',
			},
			options: ['blue', 'green', 'gray'],
		},
		size: {
			type: 'string',
			description: 'Размер текста внутри',
			defaultValue: 'middle',
			control: {
				type: 'select',
			},
			options: ['large', 'middle', 'small'],
		},
		disabled: {
			type: 'boolean',
			description: 'Отключить возможность нажатия',
			defaultValue: false,
			control: {
				type: 'radio',
			},
			options: [false, true],
		},
		width: {
			type: 'string',
			description: 'Ширина кнопки',
			defaultValue: 'default',
			control: {
				type: 'select',
			},
			options: ['default', 'full'],
		},
		loading: {
			type: 'boolean',
			description: 'Загрузка',
			defaultValue: false,
			control: {
				type: 'radio',
			},
			options: [false, true],
		},
	},
};

function Template(arg) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Button {...arg} />;
}
export const WithButton = Template.bind({});
