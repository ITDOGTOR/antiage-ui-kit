import {getDays} from '../../../lib';

describe('getDays', () => {
	test('should return the correct days for a month with 30 days', () => {
		const year = 2023;
		const month = 3;

		const result = getDays(year, month);

		expect(result.prevMonthLastDays).toEqual([27, 28, 29, 30, 31]);
		expect(result.currentMonthDays).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
		]);
		expect(result.nextMonthFirstDays).toEqual([1, 2, 3, 4, 5, 6, 7]);
	});

	test('should return the correct days for a month with 31 days', () => {
		const year = 2023;
		const month = 0;

		const result = getDays(year, month);

		expect(result.prevMonthLastDays).toEqual([26, 27, 28, 29, 30, 31]);
		expect(result.currentMonthDays).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
		]);
		expect(result.nextMonthFirstDays).toEqual([1, 2, 3, 4, 5]);
	});

	test('should return the correct days for February in a leap year', () => {
		const year = 2024;
		const month = 1;

		const result = getDays(year, month);

		expect(result.prevMonthLastDays).toEqual([29, 30, 31]);
		expect(result.currentMonthDays).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
		]);
		expect(result.nextMonthFirstDays).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	test('should return the correct days for February in a non-leap year', () => {
		const year = 2023;
		const month = 1;

		const result = getDays(year, month);

		expect(result.prevMonthLastDays).toEqual([30, 31]);
		expect(result.currentMonthDays).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
		]);
		expect(result.nextMonthFirstDays).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	});
});
