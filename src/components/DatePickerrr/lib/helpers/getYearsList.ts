import range from 'lodash.range';

/**
 * Gets a list of years from a specified number of years ago to a specified number of years ahead.
 *
 * @param yearsAgo - The number of years ago to start the list from (default is 123).
 * @param yearsAhead - The number of years ahead to extend the list (default is 0).
 * @returns An array of years as numbers.
 */
export const getYearsList = (yearsAgo: number = 123, yearsAhead: number = 0): number[] => {
	const currentYear = new Date().getFullYear();

	return range(currentYear - yearsAgo, currentYear + 1 + yearsAhead);
};
