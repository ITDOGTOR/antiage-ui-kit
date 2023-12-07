import {Size, Theme} from '../index.types';

export enum ToggleButtons {
	PREV = 'prev',
	NEXT = 'next',
	MONTH_AND_YEAR = 'monthAndYear',
}

export enum ViewMode {
	MAIN = 'main',
	MONTHS_AND_YEARS_LISTS = 'monthsAndYearsLists',
}

export enum DateAttributes {
	INPUT = 'input',
	DAY = 'day',
	MONTH = 'month',
	YEAR = 'year',
}

export declare interface DateInfo {
	day: number;
	month: number;
	year: number;
}

export interface DatePickerGeneralProps {
	value: Date | string;
	onChange: Function;
	onClosePopup?: Function;
	applyMask?: Function;
	lang?: string;
	isDropdownAutoPosition?: boolean;
}

interface FieldProps {
	name?: string;
	disabled?: boolean;
	placeholder?: string;
	size: Size;
	theme?: Theme;
	className?: string;
	isSplit?: boolean;
	error?: string | boolean | {message: string};
	inputMask?: Function;
}

type ConditionalFieldProps = FieldProps & {
	withLabel?: false;
	label?: never;
};

type FieldPropsWithLabel = FieldProps & {
	withLabel: true;
	label: string;
	placeholder?: never;
};

export type FinalFieldProps = FieldPropsWithLabel | ConditionalFieldProps;

export declare type DatePickerProps = DatePickerGeneralProps & FinalFieldProps;
