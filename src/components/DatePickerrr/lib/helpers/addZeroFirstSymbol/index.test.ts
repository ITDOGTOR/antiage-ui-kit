import {addZeroFirstSymbol} from './index';

describe('addZeroFirstSymbol', () => {
	test('should add a leading zero to a single-digit number', () => {
		const result = addZeroFirstSymbol(5);
		expect(result).toBe('05');
	});

	test('should not add a leading zero to a double-digit number', () => {
		const result = addZeroFirstSymbol(15);
		expect(result).toBe('15');
	});

	test('should add a leading zero to a single-digit string', () => {
		const result = addZeroFirstSymbol('7');
		expect(result).toBe('07');
	});

	test('should not add a leading zero to a double-digit string', () => {
		const result = addZeroFirstSymbol('12');
		expect(result).toBe('12');
	});

	test('should not add a leading zero to a string with more than two characters', () => {
		const result = addZeroFirstSymbol('123');
		expect(result).toBe('123');
	});
});
