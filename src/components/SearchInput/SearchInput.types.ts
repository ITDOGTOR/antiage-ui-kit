import {DetailedHTMLProps, InputHTMLAttributes} from 'react';

import {Size, Theme} from '../index.types';

export type SearchInputProps = {
	value?: any;
	onDebounce?: ((inputValue: string) => void) | undefined;
	debounceTimer?: number;
	placeholder?: string;
	disabled?: boolean;
	containerClassName?: string;
	inputClassName?: string;
	theme?: Theme;
	inputSize?: Size;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
