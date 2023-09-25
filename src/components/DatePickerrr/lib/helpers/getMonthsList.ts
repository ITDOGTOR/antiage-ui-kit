import range from 'lodash.range';

import {getMonthName} from './getMonthName';

/**
 * Gets a list of full month names for a specified language.
 *
 * @param lang - The language code for localization.
 * @returns An array of full month names in uppercase.
 */
export const getMonthsList = (lang?: string): string[] => {
	return range(0, 12).map((month) => getMonthName(month, lang));
};
