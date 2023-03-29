import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

import TextArea from './TextArea';
import {TextAreaProps} from './TextArea.types';

export default {
	title: 'TextArea',
	component: TextArea,
	argTypes: {
		theme: {
			defaultValue: 'white',
			table: {defaultValue: {summary: 'white'}},
			control: {type: 'select'},
		},
		disabled: {
			name: 'disabled',
			description: 'Ant-Design prop',
			defaultValue: false,
			control: {type: 'boolean'},
		},
		error: {
			name: 'error',
			description: 'error message',
			defaultValue: '',
			control: {type: 'text'},
		},
		label: {
			name: 'label',
			description: 'Label-placeholder',
			defaultValue: '',
			control: {type: 'text'},
		},
		placeholder: {
			name: 'placeholder',
			description: 'simple placeholder',
			defaultValue: '',
			control: {type: 'text'},
		},
		value: {
			name: 'value',
			description: 'Outer value',
			defaultValue: '',
			control: {type: 'text'},
		},
		rows: {
			name: 'rows',
			description: 'HTML TextArea prop',
			defaultValue: 2,
			control: {type: 'number'},
		},
		autoSize: {
			name: 'autoSize',
			description: 'flag',
			defaultValue: false,
			control: {type: 'boolean'},
			table: {disable: true},
		},
		className: {table: {disable: true}},
		wrapperClassName: {table: {disable: true}},
		labelClassName: {table: {disable: true}},
		placeholderClassName: {table: {disable: true}},
		iconClassName: {table: {disable: true}},
		innerRef: {table: {disable: true}},
	},
} as ComponentMeta<typeof TextArea>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => {
	return <TextArea {...args} />;
};

export const Sandbox = Template.bind({});
export const AutoSizeTextArea = Template.bind({});
AutoSizeTextArea.args = {
	autoSize: {
		minRows: 2,
		maxRows: 4,
	},
};
