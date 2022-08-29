import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Paper from './Paper';
import {PaperProps} from './Paper.types';

export default {
	title: 'Paper',
	component: Paper,
	argTypes: {
		children: {
			name: 'children',
			type: {name: 'string', required: false},
			control: {
				type: 'text',
			},
		},
	},
} as ComponentMeta<typeof Paper>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Paper> = (args: PaperProps) => {
	return <Paper {...args} />;
};

export const Empty = Template.bind({});
Empty.args = {
	children: '',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
	children: (
		<>
			<h1>This is Paper component</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur commodi cupiditate dignissimos
				ducimus fuga fugiat itaque minima minus necessitatibus nesciunt non placeat repudiandae soluta tempore, unde vel
				voluptas.
			</p>

			<button type="button">Click</button>
		</>
	),
};