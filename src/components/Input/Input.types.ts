import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

import {Size, Theme} from '../index.types';

export declare type InputProps = {
	className?: string;
	theme?: Theme;
	Size?: Size;
	placeholder?: string;
	label?: string;
	error?: string;
	wrapperClassName?: string;
	inputWrapperClassName?: string;
	labelClassName?: string;
	placeholderClassName?: string;
	iconClassName?: string;
	innerRef?: React.RefObject<HTMLInputElement>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
