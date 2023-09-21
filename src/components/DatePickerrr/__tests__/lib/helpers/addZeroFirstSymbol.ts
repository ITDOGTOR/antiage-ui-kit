import {addZeroFirstSymbol} from '../../../lib';

describe('addZeroFirstSymbol', () => {
	it('should add a leading zero to a single-digit number', () => {
		const result = addZeroFirstSymbol(5);
		expect(result).toBe('05');
	});

	it('should not add a leading zero to a double-digit number', () => {
		const result = addZeroFirstSymbol(15);
		expect(result).toBe('15');
	});

	it('should add a leading zero to a single-digit string', () => {
		const result = addZeroFirstSymbol('7');
		expect(result).toBe('07');
	});

	it('should not add a leading zero to a double-digit string', () => {
		const result = addZeroFirstSymbol('12');
		expect(result).toBe('12');
	});

	it('should not add a leading zero to a string with more than two characters', () => {
		const result = addZeroFirstSymbol('123');
		expect(result).toBe('123');
	});
});
