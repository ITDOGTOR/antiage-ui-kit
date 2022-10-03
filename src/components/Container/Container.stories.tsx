import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Container from './Container';
import {ContainerProps} from './Container.types';

export default {
	title: 'Paper',
	component: Container,
	argTypes: {
		children: {
			type: 'string',
			defaultValue: '',
		},
		className: {
			type: 'string',
			control: {disable: true},
		},
	},
} as ComponentMeta<typeof Container>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Container> = (args: ContainerProps) => {
	return <Container {...args} />;
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

WithChildren.argTypes = {
	children: {control: {disable: true}},
};

export const WithoutChildren = Template.bind({});
