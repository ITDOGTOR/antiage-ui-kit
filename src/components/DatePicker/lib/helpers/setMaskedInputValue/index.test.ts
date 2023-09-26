import {setMaskedInputValue} from './index';

describe('setMaskedInputValue', () => {
	test('should format a date string with dashes correctly', () => {
		const inputDate = '2023-09-24';
		const formattedDate = setMaskedInputValue(inputDate);
		expect(formattedDate).toEqual('24.09.2023');
	});

	test('should format a masked date string correctly', () => {
		const maskedInput = '24.09.2023';
		const formattedDate = setMaskedInputValue(maskedInput);
		expect(formattedDate).toEqual(maskedInput);
	});

	test('should handle empty input', () => {
		const emptyInput = '';
		const formattedDate = setMaskedInputValue(emptyInput);
		expect(formattedDate).toEqual('');
	});
});
