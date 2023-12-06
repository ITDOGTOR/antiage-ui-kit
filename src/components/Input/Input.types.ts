import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

import {Size, Theme} from '../index.types';

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type ExcludedDefaultInputSizeProps = Omit<DefaultProps, 'size'>;

export declare type InputProps = {
	className?: string;
	theme?: Theme;
	size?: Size;
	placeholder?: string;
	label?: string;
	error?: string;
	wrapperClassName?: string;
	inputWrapperClassName?: string;
	labelClassName?: string;
	placeholderClassName?: string;
	iconClassName?: string;
	innerRef?: React.RefObject<HTMLInputElement>;
} & ExcludedDefaultInputSizeProps;
