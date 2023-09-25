import {getMonthName} from '../../../lib';

describe('getMonthName', () => {
	test('should return the full name of the month for January (default language)', () => {
		const result = getMonthName(0);
		expect(result).toBe('JANUARY');
	});

	test('should return the full name of the month for January (Russian language)', () => {
		const result = getMonthName(0, 'ru');
		expect(result).toBe('ЯНВАРЬ');
	});

	test('should return the full name of the month for February (default language)', () => {
		const result = getMonthName(1);
		expect(result).toBe('FEBRUARY');
	});

	test('should return the full name of the month for February (Russian language)', () => {
		const result = getMonthName(1, 'ru');
		expect(result).toBe('ФЕВРАЛЬ');
	});
});
