import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import DropdownOption from './DropdownOption';
import {DropdownOptionProps} from './DropdownOption.types';

export default {
	title: 'DropdownOption',
	component: DropdownOption,
} as ComponentMeta<typeof DropdownOption>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DropdownOption> = (args: DropdownOptionProps) => {
	return <DropdownOption {...args} />;
};

export const FirstStory = Template.bind({});
FirstStory.args = {};
