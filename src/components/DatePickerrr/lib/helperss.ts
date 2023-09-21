import range from 'lodash.range';

import {DateAttributes, DateInfo} from '../ui/index.types';

export const addZeroFirstSymbol = (value: string | number): string => {
	const str = value.toString();

	return str.length <= 1 ? `0${str}` : str;
};

export const getToday = (): DateInfo => {
	const date = new Date();

	return {
		[DateAttributes.DAY]: date.getDate(),
		[DateAttributes.MONTH]: date.getMonth(),
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

/**
 * Retrieves the date information from a given Date object or string.
 *
 * @param {Date | string} value - The Date object or string to extract the date information from.
 * @returns {DateInfo} - An object containing the day, month, and year attributes of the given date.
 */
export const getDateObj = (value: Date | string): DateInfo => {
	let date: Date;
	if (value) {
		date = new Date(value);
	} else {
		date = new Date();
	}

	return {
		[DateAttributes.DAY]: date.getDate(),
		[DateAttributes.MONTH]: date.getMonth(),
		[DateAttributes.YEAR]: date.getFullYear(),
	};
};
