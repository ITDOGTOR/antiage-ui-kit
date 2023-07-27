import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import Radio from './Radio';
import {RadioProps} from './Radio.types';

export default {
	title: 'Radio',
	component: Radio,
	argTypes: {
		value: {
			defaultValue: '',
			control: {type: 'text'},
		},
		className: {
			defaultValue: '',
			control: {type: 'text'},
		},
		containerClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		wrapperClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		name: {
			defaultValue: 'radioGroupName',
			control: {type: 'text'},
		},
		defaultChecked: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		disabled: {
			defaultValue: false,
			control: {type: 'boolean'},
		},
		id: {
			defaultValue: 'checkboxId',
			control: {type: 'text'},
		},
		label: {
			defaultValue: 'Значение',
			control: {type: 'text'},
		},
		labelClassName: {
			defaultValue: '',
			control: {type: 'text'},
		},
		theme: {
			defaultValue: 'white',
			control: {
				type: 'inline-radio',
			},
		},
	},
} as ComponentMeta<typeof Radio>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Radio> = (args: RadioProps) => {
	return <Radio {...args} />;
};

export const Sandbox = Template.bind({});
