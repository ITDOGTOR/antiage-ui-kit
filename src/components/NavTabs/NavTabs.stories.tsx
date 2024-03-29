import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import NavTabs from './NavTabs';
import {NavTabsProps} from './NavTabs.types';

export default {
	title: 'NavTabs',
	component: NavTabs,
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
		tabsType: {
			defaultValue: 'button',
			description: 'Regulates tabs type',
			control: {type: 'select'},
		},
		tabsPosition: {
			defaultValue: 'top',
			description: 'Position of the block relative to content',
			control: {type: 'select'},
		},
		tabClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		containerClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
	},
} as ComponentMeta<typeof NavTabs>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof NavTabs> = (args: NavTabsProps) => {
	return (
		<Router>
			<div style={{height: '400px', width: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				<NavTabs {...args} />
			</div>
		</Router>
	);
};

export const Sandbox = Template.bind({});
