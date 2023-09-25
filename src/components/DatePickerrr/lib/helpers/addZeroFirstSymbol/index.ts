/**
 * Adds a leading zero to a string or number if its length is less than or equal to 1.
 *
 * @param value - The value to add a leading zero to, if necessary.
 * @returns A string with a leading zero if the original value's length is less than or equal to 1, or the original value as a string.
 */
export const addZeroFirstSymbol = (value: string | number): string => {
	const str = value.toString();

	return str.length <= 1 ? `0${str}` : str;
};
