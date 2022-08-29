import React from 'react';

export enum Key {
	ENTER = 'Enter',
	ARROW_UP = 'ArrowUp',
	ARROW_DOWN = 'ArrowDown',
	ESCAPE = 'Escape',
	OTHER = 'Other',
}

export enum Index {
	FIRST_ELEMENT,
}

export type OptionType = {
	currency?: string;
	amount?: number;
	keyIndex: number | null;
	label: string;
};

export interface SelectProps {
	placeholder?: string;
	options: OptionType[];
	disabled?: boolean;
	onSelect?: (option: OptionType) => void;
	variant?: 'filled' | 'outlined';
	className?: string;
	icon?: React.ReactNode;
}
