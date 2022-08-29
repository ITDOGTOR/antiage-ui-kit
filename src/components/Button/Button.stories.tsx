import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Button from './Button';
import {ButtonProps} from './Button.types';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		theme: {
			type: 'string',
			description: 'The background color on which the button is displayed',
			defaultValue: 'white',
			control: {
				type: 'radio',
			},
			options: ['white', 'gray'],
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
		children: {
			type: 'string',
			defaultValue: 'Название',
		},
		htmlType: {
			type: 'string',
			defaultValue: 'button',
			control: {
				type: 'radio',
			},
			options: ['button', 'submit', 'reset'],
		},
		disabled: {
			type: 'boolean',
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
		isLink: {
			type: 'boolean',
			description: 'A flag that says that children contains a link',
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
	},
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
	const {isLink} = args;

	if (isLink) {
		return (
			<Button {...args}>
				<a href="/" target="_blank">
					Ссылка
				</a>
			</Button>
		);
	}

	return <Button {...args} />;
};

export const BaseFillWhite = Template.bind({});
BaseFillWhite.args = {
	styleType: 'base-fill',
	theme: 'white',
};

export const BaseFillGray = Template.bind({});
BaseFillGray.args = {
	styleType: 'base-fill',
	theme: 'gray',
};

export const BaseOutlineWhite = Template.bind({});
BaseOutlineWhite.args = {
	styleType: 'base-outline',
	theme: 'white',
};

export const BaseOutlineGray = Template.bind({});
BaseOutlineGray.args = {
	styleType: 'base-outline',
	theme: 'gray',
};

export const AccentFill = Template.bind({});
AccentFill.args = {
	styleType: 'accent-fill',
	theme: 'white',
};

export const AccentOutline = Template.bind({});
AccentOutline.args = {
	styleType: 'accent-outline',
	theme: 'white',
};

export const ComplementFill = Template.bind({});
ComplementFill.args = {
	styleType: 'complement-fill',
	theme: 'white',
};

export const ComplementOutline = Template.bind({});
ComplementOutline.args = {
	styleType: 'complement-outline',
	theme: 'white',
};

export const CriticOutline = Template.bind({});
CriticOutline.args = {
	styleType: 'critic-outline',
	theme: 'white',
};

export const Text = Template.bind({});
Text.args = {
	styleType: 'text',
	theme: 'white',
};

export const Link = Template.bind({});
Link.args = {
	isLink: true,
};
