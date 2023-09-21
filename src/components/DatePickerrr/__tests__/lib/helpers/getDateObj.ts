import {DateAttributes} from '../../../index.types';
import {getDateObj} from '../../../lib';

describe('getDateObj', () => {
	test('should return the current date when no value is provided', () => {
		// @ts-ignore
		const result = getDateObj(undefined);
		const currentDate = new Date();

		expect(result).toEqual({
			[DateAttributes.YEAR]: currentDate.getFullYear(),
			[DateAttributes.MONTH]: currentDate.getMonth(),
			[DateAttributes.DAY]: currentDate.getDate(),
		});
	});

	test('should parse a Date object correctly', () => {
		const inputDate = new Date(2023, 3, 15);
		const result = getDateObj(inputDate);

		expect(result).toEqual({
			[DateAttributes.YEAR]: 2023,
			[DateAttributes.MONTH]: 3,
			[DateAttributes.DAY]: 15,
		});
	});

	test('should parse a date string in ISO format correctly', () => {
		const inputDateString = '2023-06-30';
		const result = getDateObj(inputDateString);

		expect(result).toEqual({
			[DateAttributes.YEAR]: 2023,
			[DateAttributes.MONTH]: 5,
			[DateAttributes.DAY]: 30,
		});
	});

	test('should parse a date string in custom format correctly', () => {
		const inputDateString = '12/25/2022';
		const result = getDateObj(inputDateString);

		expect(result).toEqual({
			[DateAttributes.YEAR]: 2022,
			[DateAttributes.MONTH]: 11,
			[DateAttributes.DAY]: 25,
		});
	});

	test("should return today's date for an invalid date string", () => {
		const inputDateString = 'Invalid Date';
		const currentDate = new Date();
		const result = getDateObj(inputDateString);

		expect(result).toEqual({
			[DateAttributes.YEAR]: currentDate.getFullYear(),
			[DateAttributes.MONTH]: currentDate.getMonth(),
			[DateAttributes.DAY]: currentDate.getDate(),
		});
	});
});
