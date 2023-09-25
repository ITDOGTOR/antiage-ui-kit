/**
 * Gets the name of the month for a given month number (0 for January, 1 for February, and so on).
 *
 * @param month - The month number (0 for January, 1 for February, and so on).
 * @param lang - The language code for localization.
 * @returns The full name of the month in uppercase.
 */
export const getMonthName = (month: number, lang?: string): string => {
	return new Date(1970, month, 1).toLocaleString(lang, {month: 'long'}).toUpperCase();
};
