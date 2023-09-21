import {DateAttributes, DateInfo} from '../../index.types';

/**
 * Retrieves the current date and returns an object with day, month, and year attributes.
 *
 * @returns An object with day, month, and year attributes representing the current date.
 */
export const getToday = (): DateInfo => {
	const date = new Date();

	return {
		[DateAttributes.DAY]: date.getDate(),
		[DateAttributes.MONTH]: date.getMonth(),
		[DateAttributes.YEAR]: date.getFullYear(),
	};
};
