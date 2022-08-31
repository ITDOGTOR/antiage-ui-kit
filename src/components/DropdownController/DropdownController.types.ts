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
	name?: string;
};

export interface DropdownRenderMenu {
	placeholder?: string;
	label?: string;
	amount?: number;
	disabled: string;
	icon?: React.ReactNode;
	onChange?: (value: string) => void;
	currency?: string;
	toggleShowOptions?: () => void;
	showOptions?: boolean;
	rotate: string;
	hide: string;
}

export interface DropdownRenderOption {
	keyIndex?: number | null;
	selected: string;
	hover: string;
	animatedIn?: string;
	label?: string | number;
	onOptionMouseEnter?: (index: number) => void;
	onSelectOption?: (index: number) => void;
	currency?: string;
}

export interface DropdownControllerProps {
	menuRender?: (props: DropdownRenderMenu) => React.ReactNode;
	dropdownRender?: (props: DropdownRenderOption) => React.ReactNode;
	placeholder?: string;
	options: OptionType[];
	disabled?: boolean;
	onSelect?: (option: OptionType) => void;
	styleType?: 'filled' | 'outlined';
	className?: string;
}
