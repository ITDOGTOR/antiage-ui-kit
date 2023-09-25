import {getYearsList} from '../../../lib';

describe('getYearsList', () => {
	test('should return a list of years starting from 123 years ago to the current year (default parameters)', () => {
		const currentYear = new Date().getFullYear();
		const expectedYears = [];
		for (let year = currentYear - 123; year <= currentYear; year += 1) {
			expectedYears.push(year);
		}

		const result = getYearsList();
		expect(result).toEqual(expectedYears);
	});

	test('should return a list of years starting from 50 years ago to the current year + 10 years ahead', () => {
		const currentYear = new Date().getFullYear();
		const expectedYears = [];
		for (let year = currentYear - 50; year <= currentYear + 10; year += 1) {
			expectedYears.push(year);
		}

		const result = getYearsList(50, 10);
		expect(result).toEqual(expectedYears);
	});

	test('should return a list of years starting from 10 years ago to the current year (no yearsAhead parameter)', () => {
		const currentYear = new Date().getFullYear();
		const expectedYears = [];
		for (let year = currentYear - 10; year <= currentYear; year += 1) {
			expectedYears.push(year);
		}

		const result = getYearsList(10);
		expect(result).toEqual(expectedYears);
	});
});
