import React from 'react';

import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
			description: 'Content inside the button',
			defaultValue: 'Click me!',
		},
		icon: {
			type: 'string',
			description: 'Icon inside the button',
			defaultValue: 'icon',
		},
		styleButton: {
			type: 'string',
			description: 'Ready-made button style',
			defaultValue: 'accent-fill',
			control: {
				type: 'select',
			},
			options: [
				'accent-fill',
				'complement-fill',
				'faint-fill',
				'delete-button',
				'base-outline',
				'text-link',
				'base-fill',
			],
		},

		theme: {
			type: 'string',
			description: 'Background style for the button',
			defaultValue: 'white',
			control: {
				type: 'select',
			},
			options: ['white', 'dark'],
		},

		customClass: {
			type: 'string',
			description: 'Adding a custom class',
		},
		disabled: {
			type: 'boolean',
			description: 'Disable the button',
			defaultValue: false,
			control: {
				type: 'radio',
			},
			options: [false, true],
		},
		width: {
			type: 'string',
			description: 'Button width',
			defaultValue: 'default',
			control: {
				type: 'select',
			},
			options: ['default', 'full'],
		},
		htmlType: {
			type: 'string',
			description: 'Button html type',
			defaultValue: 'button',
			control: {
				type: 'select',
			},
			options: ['button', 'submit'],
		},
	},
};

function Template(arg) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Button {...arg} />;
}
export const WithButton = Template.bind({});
