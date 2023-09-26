import {DateAttributes} from '../../../index.types';
import {getToday} from './index';

describe('getToday', () => {
	test('should return an object with the current day, month, and year', () => {
		const result = getToday();
		const currentDate = new Date();

		expect(result).toEqual({
			[DateAttributes.YEAR]: currentDate.getFullYear(),
			[DateAttributes.MONTH]: currentDate.getMonth(),
			[DateAttributes.DAY]: currentDate.getDate(),
		});
	});
});
