import {getMonthsList} from './index';

describe('getMonthsList', () => {
	test('should return a list of full month names for the English language (en)', () => {
		const result = getMonthsList();
		expect(result).toEqual([
			'JANUARY',
			'FEBRUARY',
			'MARCH',
			'APRIL',
			'MAY',
			'JUNE',
			'JULY',
			'AUGUST',
			'SEPTEMBER',
			'OCTOBER',
			'NOVEMBER',
			'DECEMBER',
		]);
	});

	test('should return a list of full month names for the Russian language (ru)', () => {
		const result = getMonthsList('ru');
		expect(result).toEqual([
			'ЯНВАРЬ',
			'ФЕВРАЛЬ',
			'МАРТ',
			'АПРЕЛЬ',
			'МАЙ',
			'ИЮНЬ',
			'ИЮЛЬ',
			'АВГУСТ',
			'СЕНТЯБРЬ',
			'ОКТЯБРЬ',
			'НОЯБРЬ',
			'ДЕКАБРЬ',
		]);
	});
});
