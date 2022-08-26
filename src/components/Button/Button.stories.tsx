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
			description: 'The background color on which the button is displayed',
			defaultValue: 'white',
			control: {
				type: 'radio',
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
				type: 'radio',
			},
			options: ['button', 'submit', 'reset'],
		},
	},
};

function Template(arg) {
	return <Button {...arg} />;
}
export const BaseFillWhite = Template.bind({});
export const BaseFillGray = Template.bind({});
export const BaseOutlineWhite = Template.bind({});
export const BaseOutlineGray = Template.bind({});
export const AccentFill = Template.bind({});
export const AccentOutline = Template.bind({});
export const ComplementFill = Template.bind({});
export const ComplementOutline = Template.bind({});
export const CriticOutline = Template.bind({});
export const Text = Template.bind({});

BaseFillWhite.args = {
	styleType: 'base-fill',
	theme: 'white',
};

BaseFillGray.args = {
	styleType: 'base-fill',
	theme: 'gray',
};

BaseOutlineWhite.args = {
	styleType: 'base-outline',
	theme: 'white',
};

BaseOutlineGray.args = {
	styleType: 'base-outline',
	theme: 'gray',
};

AccentFill.args = {
	styleType: 'accent-fill',
	theme: 'white',
};

AccentOutline.args = {
	styleType: 'accent-outline',
	theme: 'white',
};

ComplementFill.args = {
	styleType: 'complement-fill',
	theme: 'white',
};

ComplementOutline.args = {
	styleType: 'complement-outline',
	theme: 'white',
};

CriticOutline.args = {
	styleType: 'critic-outline',
	theme: 'white',
};

Text.args = {
	styleType: 'text',
	theme: 'white',
};
