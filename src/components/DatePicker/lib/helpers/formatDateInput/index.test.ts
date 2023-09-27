import {formatDateInput} from './index';

describe('formatDateInput', () => {
	test('should format a valid date input string correctly', () => {
		const inputDate = '24.09.2023';
		const formattedDate = formatDateInput(inputDate);
		expect(formattedDate).toEqual('2023-09-24');
	});

	test('should format date with leading zeros correctly', () => {
		const inputDate = '01.05.2023';
		const formattedDate = formatDateInput(inputDate);
		expect(formattedDate).toEqual('2023-05-01');
	});

	test('should handle invalid day exceeding the month length', () => {
		const inputDate = '31.02.2023';
		const formattedDate = formatDateInput(inputDate);
		expect(formattedDate).toEqual('2023-03-03');
	});

	test('should return the input string for a short date input', () => {
		const shortInput = '24.09';
		const result = formatDateInput(shortInput);
		expect(result).toEqual(shortInput);
	});

	test('should return the input string for an empty input', () => {
		const emptyInput = '';
		const result = formatDateInput(emptyInput);
		expect(result).toEqual(emptyInput);
	});
});
