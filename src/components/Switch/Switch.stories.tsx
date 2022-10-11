import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Switch from './Switch';
import {SwitchProps} from './Switch.types';

export default {
	title: 'Switch',
	component: Switch,
	argTypes: {
		theme: {
			defaultValue: 'white',
			table: {defaultValue: {summary: 'white'}},
			control: {type: 'select'},
		},
		status: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		checked: {
			control: {type: 'boolean'},
		},
		disabled: {
			name: 'disabled',
			description: 'Ant-Design prop',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		label: {control: {disable: true}},
		className: {table: {disable: true}},
		classNameContainer: {table: {disable: true}},
	},
} as ComponentMeta<typeof Switch>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
	return <Switch {...args} />;
};

export const Sandbox = Template.bind({});

export const Label = Template.bind({});
Label.args = {label: 'Я согласен на обработку персональных данных!'};

export const Status = Template.bind({});
Status.args = {status: true, checkedChildren: 'Добавлен к филиалу', unCheckedChildren: 'Добавить к филиалу'};
