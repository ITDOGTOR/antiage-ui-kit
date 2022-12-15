import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';

import {Theme} from '../index.types';

export declare type TextAreaProps = {
	className?: string;
	theme?: Theme;
	placeholder?: string;
	label?: string;
	error?: string;
	wrapperClassName?: string;
	labelClassName?: string;
	placeholderClassName?: string;
	innerRef?: React.RefObject<HTMLTextAreaElement>;
	rows?: number;
	autoSize?: boolean;
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
