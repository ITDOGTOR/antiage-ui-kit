import range from 'lodash.range';

/**
 * Gets the last day of the specified month in the given year.
 *
 * @param year - The year.
 * @param month - The month (0 for January, 1 for February, and so on).
 * @returns The last day of the month (a number).
 */
const getLastDay = (year: number, month: number): number => {
	return new Date(year, month, 0).getDate();
};

/**
 * Gets the weekday for the specified month in the given year.
 *
 * @param year - The year.
 * @param month - The month (0 for January, 1 for February, and so on).
 * @returns The weekday (0 for Sunday, 1 for Monday, and so on).
 */
const getWeekDay = (year: number, month: number): number => {
	return new Date(year, month, 0).getDay();
};

/**
 * Retrieves arrays of days for the previous month, the current month, and the next month.
 *
 * @param year - The year.
 * @param month - The month (0 for January, 1 for February, and so on).
 * @returns An object containing arrays of days for three months.
 */
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
