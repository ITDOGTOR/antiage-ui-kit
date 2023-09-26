import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import SearchInput from './SearchInput';
import {SearchInputProps} from './SearchInput.types';

export default {
	title: 'SearchInput',
	component: SearchInput,
	argTypes: {
		value: {
			defaultValue: '',
			control: {type: 'text'},
		},
		debounceTimer: {
			defaultValue: '',
			control: {type: 'number'},
		},
		placeholder: {
			defaultValue: '',
			control: {type: 'text'},
		},
		disabled: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		containerClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		inputClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		theme: {
			defaultValue: 'white',
			control: {
				type: 'inline-radio',
			},
		},
		inputSize: {
			defaultValue: 'medium',
			control: {
				type: 'inline-radio',
			},
		},
	},
} as ComponentMeta<typeof SearchInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SearchInput> = (args: SearchInputProps) => {
	return <SearchInput {...args} />;
};

export const Sandbox = Template.bind({});
