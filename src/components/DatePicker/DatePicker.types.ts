import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

import {Theme} from '../index.types';

declare const Sizes: ['small', 'default'];
export declare type Size = (typeof Sizes)[number];

export declare type DatePickerProps = {
	className?: string;
	theme?: Theme;
	label?: string;
	error?: string;
	wrapperClassName?: string;
	labelClassName?: string;
	iconClassName?: string;
	size?: Size;
	centered?: boolean;
	dropdown?: boolean;
	dropdownClassName?: string;
	contrast?: boolean;
	innerRef?: React.RefObject<HTMLInputElement>;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'>;
