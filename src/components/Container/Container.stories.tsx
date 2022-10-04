import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Container from './Container';
import {ContainerProps} from './Container.types';

export default {
	title: 'Container',
	component: Container,
	argTypes: {
		children: {table: {disable: true}},
		className: {table: {disable: true}},
	},
} as ComponentMeta<typeof Container>;

// eslint-disable-next-line react/function-component-definition
export const Story: ComponentStory<typeof Container> = (args: ContainerProps) => {
	return (
		<Container {...args}>
			<h1>This is Paper component</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur commodi cupiditate dignissimos
				ducimus fuga fugiat itaque minima minus necessitatibus nesciunt non placeat repudiandae soluta tempore, unde vel
				voluptas.
			</p>

			<button type="button">Click</button>
		</Container>
	);
};
