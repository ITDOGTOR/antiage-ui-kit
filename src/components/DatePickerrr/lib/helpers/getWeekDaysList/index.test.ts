import {getWeekDaysList} from './index';

describe('getWeekDaysList', () => {
	test('should return a list of abbreviated week day names for the Russian language (ru)', () => {
		const result = getWeekDaysList('ru');
		expect(result).toEqual(['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']);
	});

	test('should return a list of abbreviated week day names for the English language (en)', () => {
		const result = getWeekDaysList();
		expect(result).toEqual(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']);
	});
});
