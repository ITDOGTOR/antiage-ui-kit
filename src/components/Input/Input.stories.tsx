import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Input from './Input';
import {InputProps} from './Input.types';

export default {
	title: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Input> = (args: InputProps) => {
	return <Input {...args} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {};
