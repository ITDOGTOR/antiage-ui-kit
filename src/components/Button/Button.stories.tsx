import React from 'react';

import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		content: {
			type: 'string',
			description: 'Текст',
			defaultValue: 'Click me!',
		},
		styleButton: {
			type: 'string',
			description: 'Цвет кнопки',
			defaultValue: 'accent-strong-fill',
			control: {
				type: 'select',
			},
			options: [
				'accent-strong-fill',
				'complement-strong-fill',
				'faint-weak-fill',
				'delete-button',
				'base-weak-outline',
				'text-link',
				'base-weak-fill',
			],
		},
		customClass: {
			type: 'string',
			description: 'Изменение переменных css',
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
	},
};

function Template(arg) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Button {...arg} />;
}
export const WithButton = Template.bind({});
