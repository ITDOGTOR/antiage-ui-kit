import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import DatePicker from '../DatePickerrr';
import Button from './Button';
import {ButtonProps} from './Button.types';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		type: {
			name: 'type',
			description: 'Ant-Design prop',
			defaultValue: 'default',
			table: {defaultValue: {summary: 'default'}},
			control: {type: 'select', options: ['default', 'primary', 'text']},
		},
		color: {
			defaultValue: 'base',
			control: {type: 'select'},
			if: {arg: 'danger', truthy: false},
		},
		theme: {
			defaultValue: 'white',
			table: {defaultValue: {summary: 'white'}},
			control: {type: 'select'},
			if: {arg: 'danger', truthy: false},
		},
		danger: {
			name: 'danger',
			description: 'Ant-Design prop',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		disabled: {
			name: 'disabled',
			description: 'Ant-Design prop',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		gradient: {
			defaultValue: false,
			control: {type: 'boolean'},
			if: {arg: 'type', eq: 'primary'},
		},
		loading: {
			name: 'loading',
			description: 'Ant-Design prop',
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
	return (
		<>
			<Button {...args}>Название</Button>

			<DatePicker />
		</>
	);
};

export const Sandbox = Template.bind({});

export const DefaultBase = Template.bind({});
DefaultBase.args = {color: 'base'};

export const PrimaryBase = Template.bind({});
PrimaryBase.args = {type: 'primary', color: 'base'};

export const PrimaryBaseGradient = Template.bind({});
PrimaryBaseGradient.args = {type: 'primary', color: 'base', gradient: true};

export const PrimaryAccent = Template.bind({});
PrimaryAccent.args = {type: 'primary', color: 'accent'};

export const PrimaryAccentGradient = Template.bind({});
PrimaryAccentGradient.args = {type: 'primary', color: 'accent', gradient: true};

export const PrimaryComplement = Template.bind({});
PrimaryComplement.args = {type: 'primary', color: 'complement'};

export const PrimaryComplementGradient = Template.bind({});
PrimaryComplementGradient.args = {type: 'primary', color: 'complement', gradient: true};

export const PrimaryWarning = Template.bind({});
PrimaryWarning.args = {type: 'primary', color: 'warning'};

export const PrimarySuccess = Template.bind({});
PrimarySuccess.args = {type: 'primary', color: 'success'};

export const PrimarySuccessGradient = Template.bind({});
PrimarySuccessGradient.args = {type: 'primary', color: 'success', gradient: true};

export const DefaultCritic = Template.bind({});
DefaultCritic.args = {danger: true};

export const PrimaryCritic = Template.bind({});
PrimaryCritic.args = {type: 'primary', danger: true};

export const PrimaryCriticGradient = Template.bind({});
PrimaryCriticGradient.args = {type: 'primary', danger: true, gradient: true};

export const Text = Template.bind({});
Text.args = {type: 'text'};

export const TextCritic = Template.bind({});
TextCritic.args = {type: 'text', danger: true};
