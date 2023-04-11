import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Button from '../Button';
import Container from './Container';
import {ContainerProps} from './Container.types';

export default {
	title: 'Container',
	component: Container,
	argTypes: {
		theme: {
			control: {type: 'select'},
		},
		resetStyle: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		children: {table: {disable: true}},
		className: {table: {disable: true}},
	},
} as ComponentMeta<typeof Container>;

// eslint-disable-next-line react/function-component-definition
export const Sandbox: ComponentStory<typeof Container> = (args: ContainerProps) => {
	return (
		<Container {...args}>
			<h1>Контейнер</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur commodi cupiditate dignissimos
				ducimus fuga fugiat itaque minima minus necessitatibus nesciunt non placeat repudiandae soluta tempore, unde vel
				voluptas.
			</p>

			<Button gradient color="accent" type="primary">
				Нажми на меня!
			</Button>
		</Container>
	);
};
