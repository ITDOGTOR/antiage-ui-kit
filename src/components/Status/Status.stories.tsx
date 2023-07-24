import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Status from './Status';
import {StatusProps} from './Status.types';

export default {
	title: 'Status',
	component: Status,
	argTypes: {
		text: {
			defaultValue: 'Назначен',
			control: {type: 'text'},
		},
		color: {
			defaultValue: 'accent',
			control: {type: 'select'},
		},
		size: {
			defaultValue: 'medium',
			control: {type: 'select'},
		},
		containerClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		textClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		theme: {
			defaultValue: 'white',
			control: {
				type: 'inline-radio',
			},
		},
	},
} as ComponentMeta<typeof Status>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Status> = (args: StatusProps) => {
	return <Status {...args} />;
};

export const Sandbox = Template.bind({});
