import React, {DetailedHTMLProps, InputHTMLAttributes, SVGProps} from 'react';

import {Size, Theme} from '../index.types';

export type InputProps = {
	className?: string;
	theme?: Theme;
	inputSize?: Size;
	placeholder?: string;
	label?: string;
	error?: string;
	wrapperClassName?: string;
	inputWrapperClassName?: string;
	labelClassName?: string;
	placeholderClassName?: string;
	iconClassName?: string;
	innerRef?: React.RefObject<HTMLInputElement>;
	CustomIconComponent?: React.ElementType<SVGProps<SVGSVGElement>>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
