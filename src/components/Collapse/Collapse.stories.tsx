import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Collapse from './Collapse';
import {CollapseProps} from './Collapse.types';

export default {
	title: 'Collapse',
	component: Collapse,
	argTypes: {
		children: {
			type: 'string',
			defaultValue: 'Text',
		},
		header: {
			type: 'string',
			defaultValue: 'Header',
		},
		styleType: {
			type: 'string',
			defaultValue: 'button-remove',
			control: {
				type: 'select',
			},
			options: ['button-remove', 'not-button-remove'],
		},
	},
} as ComponentMeta<typeof Collapse>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Collapse> = (args: CollapseProps) => {
	return <Collapse {...args} />;
};

export const CollapseWith = Template.bind({});
