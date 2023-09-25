import {formatDateInput} from '../../../lib';

describe('formatDateInput', () => {
	test('should format a valid date input string correctly', () => {
		const inputDate = '24.09.2023';
		const formattedDate = formatDateInput(inputDate);
		expect(formattedDate).toEqual('2023-09-24');
	});

	test('should return the input string for an invalid date input', () => {
		const invalidInput = '24.09.2';
		const result = formatDateInput(invalidInput);
		expect(result).toEqual(invalidInput);
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
