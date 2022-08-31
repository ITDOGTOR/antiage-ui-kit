import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import DropdownSelect from './DropdownSelect';
import {DropdownSelectProps} from './DropdownSelect.types';

export default {
	title: 'DropdownSelect',
	component: DropdownSelect,
} as ComponentMeta<typeof DropdownSelect>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DropdownSelect> = (args: DropdownSelectProps) => {
	return <DropdownSelect {...args} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {};
