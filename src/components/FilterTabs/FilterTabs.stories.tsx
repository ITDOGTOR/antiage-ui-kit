import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import FilterTabs from './FilterTabs';
import {FilterTabsProps} from './FilterTabs.types';

export default {
	title: 'FilterTabs',
	component: FilterTabs,
	argTypes: {
		tabs: {
			defaultValue: [
				{link: 'tab1', title: 'Tab 1', disabled: false},
				{link: 'tab2', title: 'Tab 2', disabled: false},
				{link: 'tab3', title: 'Tab 3', disabled: false},
				{link: 'tab4', title: 'Tab long 4', disabled: false},
				{link: 'tab5', title: 'Tab long 5', disabled: true},
				{link: 'tab6', title: 'Tab long 6', disabled: false},
			],
			description: 'An array of tab objects.',
			control: {type: 'object'},
		},
		activeTabLink: {
			defaultValue: 'tab1',
			description: '`link` property of current active `NavTab` object',
			control: {type: 'text'},
		},
		theme: {
			defaultValue: 'white',
			control: {
				type: 'inline-radio',
			},
		},
		activeTabColor: {
			defaultValue: 'accent',
			control: {
				type: 'inline-radio',
			},
		},
		size: {
			defaultValue: 'medium',
			control: {
				type: 'inline-radio',
			},
		},
		containerClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		tabClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		activeTabClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
	},
} as ComponentMeta<typeof FilterTabs>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof FilterTabs> = (args: FilterTabsProps) => {
	return (
		<div style={{height: '400px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<FilterTabs {...args} />
		</div>
	);
};

export const Sandbox = Template.bind({});
