import range from 'lodash.range';

import {DateAttributes} from '../ui/index.types';

interface DateInfo {
	day: number | null;
	monthNum: number;
	year: number;
}

export const getZero = (num: number): string => {
	if (num < 10) {
		return `0${num}`;
	}

	return num.toString();
};

export const getToday = (): DateInfo => {
	const date = new Date();

	return {
		[DateAttributes.DAY]: date.getDate(),
		[DateAttributes.MONTH_NUM]: date.getMonth(),
		[DateAttributes.YEAR]: date.getFullYear(),
	};
};

const getWeekDayName = (day: number, lang = 'default'): string => {
	return new Date(1970, 8, day).toLocaleString(lang, {weekday: 'short'}).toUpperCase();
};

export const getWeekDaysList = (lang: string): string[] => {
	return range(0, 7).map((day) => getWeekDayName(day, lang));
};

export const getMonthName = (month: number, lang = 'default'): string => {
	return new Date(1970, month, 1).toLocaleString(lang, {month: 'long'}).toUpperCase();
};

export const getMonthsList = (lang: string): string[] => {
	return range(0, 12).map((month) => getMonthName(month, lang));
};

export const getYearsList = (): number[] => {
	const currentYear = new Date().getFullYear();

	return range(currentYear - 123, currentYear + 1);
};

const getLastDay = (year: number, month: number): number => {
	return new Date(year, month, 0).getDate();
};

const getWeekDay = (year: number, month: number): number => {
	return new Date(year, month, 0).getDay();
};

export const getDays = (
	year: number,
	month: number,
): {
	prevMonthLastDays: number[];
	currentMonthDays: number[];
	nextMonthFirstDays: number[];
} => {
	const currentMonthLastDay = getLastDay(year, month + 1);
	const prevMonthLastDay = getLastDay(year, month);
	const prevMonthWeekDay = getWeekDay(year, month);

	const prevMonthLastDays = range(prevMonthLastDay - prevMonthWeekDay + 1, prevMonthLastDay + 1);
	const currentMonthDays = range(1, currentMonthLastDay + 1);
	const nextMonthFirstDays = range(1, 42 - (prevMonthWeekDay + currentMonthLastDay) + 1);

	return {
		prevMonthLastDays,
		currentMonthDays,
		nextMonthFirstDays,
	};
};

export const getDateObj = (value?: string): DateInfo => {
	let date: Date;

	if (value) {
		date = new Date(value);
	} else {
		date = new Date();
	}

	return {
		[DateAttributes.DAY]: value ? date.getDate() : null,
		[DateAttributes.MONTH_NUM]: date.getMonth(),
		[DateAttributes.YEAR]: date.getFullYear(),
	};
};

export const createResponseValue = (date: DateInfo): string | null => {
	if (!date.day) {
		return null;
	}

	return `${date.year}-${getZero(date.monthNum + 1)}-${getZero(date.day)}`;
};
