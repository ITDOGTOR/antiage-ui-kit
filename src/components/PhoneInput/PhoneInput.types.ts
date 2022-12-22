import React from 'react';
import {PhoneInputProps as PhoneInputTypes} from 'react-phone-input-2';

export declare type PhoneInputProps = {
	error?: string;
	innerRef?: React.RefObject<HTMLInputElement>;
	className?: string;
	wrapperClassName?: string;
	value?: string | null | undefined;
	onChange?: (value: string) => void;
	onCountryChange?: (country: {dialCode?: any; format?: string | undefined}) => void;
} & Omit<PhoneInputTypes, 'onChange'>;
