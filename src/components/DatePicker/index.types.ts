import {Theme} from '../index.types';

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
}

export interface FieldProps {
	name?: string;
	disabled?: boolean;
	placeholder?: string;
	theme?: Theme;
	className?: string;
	isSplit?: boolean;
	withLabel?: boolean;
	error?: string | boolean | {message: string};
	inputMask?: Function;
}

export declare type DatePickerProps = DatePickerGeneralProps & FieldProps;
