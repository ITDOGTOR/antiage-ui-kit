import range from 'lodash.range';

export const getMonthName = (month: number, lang = 'default'): string => {
	return new Date(1970, month, 1).toLocaleString(lang, {month: 'long'}).toUpperCase();
};

export const getMonthsList = (lang: string): string[] => {
	return range(0, 12).map((month) => getMonthName(month, lang));
};

export const getYearsList = (): number[] => {
	const currentYear = new Date().getFullYear();

	return range(currentYear - 123, currentYear + 1);
};
