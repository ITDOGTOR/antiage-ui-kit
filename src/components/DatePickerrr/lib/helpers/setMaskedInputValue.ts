import {addZeroFirstSymbol} from './addZeroFirstSymbol';
import {getDateObj} from './getDateObj';

/**
 * Formats a date string with or without dashes into a masked date input string 'DD.MM.YYYY'.
 *
 * @param newDate - The input date string, which may contain dashes ('-') or be a masked date ('DD.MM.YYYY').
 * @returns A formatted masked date input string 'DD.MM.YYYY'.
 */
export const setMaskedInputValue = (newDate: string): string => {
	if (newDate.includes('-')) {
		const {day, month, year} = getDateObj(newDate);

		return `${addZeroFirstSymbol(day)}.${addZeroFirstSymbol(month + 1)}.${year}`;
	}

	const maskDate: string = newDate.replace(/\D/g, '').slice(0, 10);

	let formattedValue = '';

	let day = maskDate.slice(0, 2);
	let month = maskDate.slice(2, 4);
	if (Number(day) > 31) {
		day = '31';
	}
	if (Number(month) > 12) {
		month = '12';
	}

	if (maskDate.length >= 1) {
		formattedValue += day[0];
	}

	if (maskDate.length >= 2) {
		formattedValue += day[1];
	}

	if (maskDate.length >= 3) {
		formattedValue += `.${month[0]}`;
	}

	if (maskDate.length >= 4) {
		formattedValue += month[1];
	}

	if (maskDate.length >= 5) {
		formattedValue += `.${maskDate.slice(4, 8)}`;
	}

	return formattedValue;
};
