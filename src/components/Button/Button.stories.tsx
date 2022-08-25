import React from 'react';

import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		children: {
			type: 'string',
			defaultValue: 'Click me!',
		},
		styleType: {
			type: 'string',
			description: 'Ready-made button style',
			defaultValue: 'base-fill',
			control: {
				type: 'select',
			},
			options: [
				'base-fill',
				'base-outline',
				'accent-fill',
				'accent-outline',
				'complement-fill',
				'complement-outline',
				'critic-outline',
				'text',
			],
		},

		theme: {
			type: 'string',
			description: 'Background style for the button',
			defaultValue: 'white',
			control: {
				type: 'select',
			},
			options: ['white', 'gray'],
		},

		className: {
			type: 'string',
		},
		disabled: {
			type: 'boolean',
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		htmlType: {
			type: 'string',
			defaultValue: 'button',
			control: {
				type: 'select',
			},
			options: ['button', 'submit', 'reset'],
		},
	},
};

function Template(arg) {
	return <Button {...arg} />;
}
export const WithButton = Template.bind({});
