import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Button from './Button';
import {ButtonProps} from './Button.types';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		type: {
			name: 'type',
			defaultValue: 'default',
			table: {defaultValue: {summary: 'default'}},
			control: {type: 'select', options: ['default', 'primary']},
		},
		color: {
			name: 'color',
			defaultValue: 'base',
			control: {type: 'select'},
			if: {arg: 'danger', truthy: false},
		},
		theme: {
			defaultValue: 'white',
			control: {type: 'select'},
			if: {arg: 'danger', truthy: false},
		},
		danger: {
			name: 'danger',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		disabled: {
			name: 'disable',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		className: {table: {disable: true}},
		href: {table: {disable: true}},
		htmlType: {table: {disable: true}},
		target: {table: {disable: true}},
		onClick: {table: {disable: true}},
	},
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
	return <Button {...args}>Название</Button>;
};

export const Sandbox = Template.bind({});
Sandbox.args = {};

export const DefaultBase = Template.bind({});
DefaultBase.args = {color: 'base'};

export const PrimaryBase = Template.bind({});
PrimaryBase.args = {type: 'primary', color: 'base'};

export const PrimaryAccent = Template.bind({});
PrimaryAccent.args = {type: 'primary', color: 'accent'};

export const PrimaryComplement = Template.bind({});
PrimaryComplement.args = {type: 'primary', color: 'complement'};

export const PrimaryWarning = Template.bind({});
PrimaryWarning.args = {type: 'primary', color: 'warning'};

export const PrimarySuccess = Template.bind({});
PrimarySuccess.args = {type: 'primary', color: 'success'};

export const DefaultCritic = Template.bind({});
DefaultCritic.args = {danger: true};

export const PrimaryCritic = Template.bind({});
PrimaryCritic.args = {type: 'primary', danger: true};
