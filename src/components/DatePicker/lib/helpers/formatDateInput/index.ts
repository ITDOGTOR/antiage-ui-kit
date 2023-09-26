/**
 * Formats a date input string in the format 'DD.MM.YYYY' to 'YYYY-MM-DD'.
 *
 * @param newDate - The date input string in the format 'DD.MM.YYYY'.
 * @returns A formatted date string in the format 'YYYY-MM-DD'.
 */
export const formatDateInput = (newDate: string): string => {
	if (newDate.length < 10) {
		return newDate;
	}

	const [day, month, year]: string[] = newDate.slice(0, 10).split('.');

	return `${year}-${month}-${day}`;
};
