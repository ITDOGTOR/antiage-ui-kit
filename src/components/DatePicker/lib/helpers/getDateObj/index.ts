import {DateAttributes, DateInfo} from '../../../index.types';

/**
 * Parses a Date or string input and returns an object with day, month, and year attributes.
 *
 * @param value - The Date or string input to parse. If not provided, the current date will be used.
 * @returns An object with day, month, and year attributes.
 */
export const getDateObj = (value: Date | string): DateInfo => {
	let date: Date;
	if (value) {
		date = new Date(value);
		if (Number.isNaN(date.getTime())) {
			date = new Date();
		}
	} else {
		date = new Date();
	}

	return {
		[DateAttributes.DAY]: date.getDate(),
		[DateAttributes.MONTH]: date.getMonth(),
		[DateAttributes.YEAR]: date.getFullYear(),
	};
};
