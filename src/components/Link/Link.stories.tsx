import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {withRouter} from 'storybook-addon-react-router-v6';

import Link from './Link';
import {LinkProps} from './Link.types';

export default {
	title: 'Link',
	component: Link,
	decorators: [withRouter],
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
		gradient: {
			defaultValue: false,
			control: {type: 'boolean'},
			if: {arg: 'type', eq: 'primary'},
		},
		className: {table: {disable: true}},
	},
} as ComponentMeta<typeof Link>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Link> = (args: LinkProps) => {
	return <Link {...args}>Ссылка</Link>;
};

export const Sandbox = Template.bind({});
