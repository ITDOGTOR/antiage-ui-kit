import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Button from '../Button';
import Tooltip from './Tooltip';
import {TooltipProps} from './Tooltip.types';

export default {
	title: 'Tooltip',
	component: Tooltip,
	argTypes: {
		placement: {
			name: 'placement',
			description: 'The position of the tooltip relative to the target',
			defaultValue: 'topLeft',
			table: {defaultValue: {summary: 'topLeft'}},
			control: {
				type: 'select',
				options: [
					'top',
					'left',
					'right',
					'bottom',
					'topLeft',
					'topRight',
					'bottomLeft',
					'bottomRight',
					'leftTop',
					'leftBottom',
					'rightTop',
					'rightBottom',
				],
			},
		},
		trigger: {
			name: 'trigger',
			description: 'Tooltip trigger mode. Could be multiple by passing an array',
			defaultValue: 'hover',
			table: {defaultValue: {summary: 'hover'}},
			control: {type: 'multi-select', options: ['hover', 'focus', 'click', 'contextMenu']},
		},
		title: {
			name: 'title',
			description: 'The text shown in the tooltip',
			defaultValue: "I'am Tooltip!",
			table: {type: {summary: 'ReactNode'}},
			control: {type: 'text'},
		},
		color: {
			name: 'color',
			description: 'The background color',
			defaultValue: 'white',
			table: {defaultValue: {summary: 'white'}},
			control: {type: 'text'},
		},
		overlayClassName: {
			name: 'overlayClassName',
			description: 'Class name of the tooltip card',
		},
		showArrow: {
			name: 'showArrow',
			description: 'Whether to show arrow of tooltip',
			defaultValue: false,
			table: {defaultValue: {summary: false}},
			control: {type: 'boolean'},
		},
	},
} as ComponentMeta<typeof Tooltip>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => {
	return (
		<div style={{height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Tooltip {...args}>
				<Button danger type="default">
					Button
				</Button>
			</Tooltip>
		</div>
	);
};

export const Sandbox = Template.bind({});
Sandbox.args = {};
