import {Ref} from 'react';
import {InputActionMeta, StylesConfig} from 'react-select';

import {Theme} from '../index.types';

export interface SelectLocalProps {
	containerClassname?: string;
	type?: 'default' | 'creatable';
	getCustomStyles?: (arg: StylesConfig) => StylesConfig;
	label?: string;
	showLabelAlways?: boolean;
	value: unknown | null;
	error?: string;
	theme?: Theme;
	search?: boolean;
	isDisabled?: boolean;
	onInputChange?: (value: string, meta: InputActionMeta) => void;
	innerRef?: Ref<any>;
}
