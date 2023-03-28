import {StylesConfig} from 'react-select';

import {Theme} from '../index.types';

export interface SelectLocalProps {
	containerStyle?: string;
	type?: 'default' | 'creatable';
	customStyles?: StylesConfig;
	label?: string;
	showLabelAlways?: boolean;
	value: unknown | null;
	error?: string;
	theme?: Theme;
	search?: boolean;
}
