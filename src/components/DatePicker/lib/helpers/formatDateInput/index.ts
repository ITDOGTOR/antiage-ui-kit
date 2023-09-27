import {addZeroFirstSymbol} from '../addZeroFirstSymbol';
import {getDateObj} from '../getDateObj';

/**
 * Formats a date input string in the format 'DD.MM.YYYY' to 'YYYY-MM-DD'.
 *
 * @param newDate - The date input string in the format 'DD.MM.YYYY'.
 * @returns A formatted date string in the format 'YYYY-MM-DD'.
 */
export const formatDateInput = (newDate: string): string => {
	if (newDate.length < 10) {
		return newDate.replace(/[^0-9.]/g, '');
	}

	const [day, month, year]: string[] = newDate.slice(0, 10).split('.');
	const {day: formatDay, month: formatMonth, year: formatYear} = getDateObj(`${year}-${month}-${day}`);

	return `${formatYear}-${addZeroFirstSymbol(formatMonth + 1)}-${addZeroFirstSymbol(formatDay)}`;
};
