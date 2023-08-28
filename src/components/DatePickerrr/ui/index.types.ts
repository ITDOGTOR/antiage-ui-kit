export enum ToggleButtons {
	PREV = 'prev',
	NEXT = 'next',
	MONTH_NUM = 'monthNum',
	YEAR = 'year',
}

export enum ViewMode {
	MAIN = 'main',
	MONTHS_LIST = 'monthsList',
	YEARS_LIST = 'yearsList',
}

export enum DateAttributes {
	DAY = 'day',
	MONTH_NUM = 'monthNum',
	YEAR = 'year',
}

export declare interface DateInfo {
	day: number | null;
	monthNum: number;
	year: number;
}
