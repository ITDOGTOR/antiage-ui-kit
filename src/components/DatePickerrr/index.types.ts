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

export declare interface DatePickerTypes {
	value: string | Date;
	onChange: Function;
	lang?: string;
}
