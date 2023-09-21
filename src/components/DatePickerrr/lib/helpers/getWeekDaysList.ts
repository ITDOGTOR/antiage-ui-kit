import range from 'lodash.range';

/**
 * Gets the name of the week day for a given day number (0 for Sunday, 1 for Monday, and so on).
 *
 * @param day - The day number (0 for Sunday, 1 for Monday, and so on).
 * @param lang - The language code for localization (default is 'default').
 * @returns The abbreviated name of the week day in uppercase.
 */
const getWeekDayName = (day: number, lang?: string): string => {
	return new Date(1970, 8, day).toLocaleString(lang, {weekday: 'short'}).toUpperCase();
};

/**
 * Retrieves a list of week day names in the specified language.
 *
 * @param lang - The language code for localization.
 * @returns An array of abbreviated week day names in uppercase.
 */
export const getWeekDaysList = (lang: string): string[] => {
	return range(0, 7).map((day) => getWeekDayName(day, lang));
};
