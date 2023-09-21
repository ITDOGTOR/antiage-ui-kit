import {getDays} from '../../../../components/DatePickerrr/lib';

describe('getDays', () => {
	it('возвращает правильные дни для месяца с 30 днями', () => {
		const year = 2023; // Невисокосный год
		const month = 4; // Май (индекс 4, так как считаем с 0)
		const {prevMonthLastDays, currentMonthDays, nextMonthFirstDays} = getDays(year, month);

		// Вычисляем ожидаемое количество дней в предыдущем месяце
		const expectedPrevMonthLastDays = new Date(year, month, 0).getDate();

		expect(prevMonthLastDays.length).toBe(expectedPrevMonthLastDays);
		expect(currentMonthDays.length).toBe(31); // Май имеет 31 день
		expect(nextMonthFirstDays.length).toBe(6); // В следующем месяце должно быть 6 дней
	});

	it('возвращает правильные дни для месяца с 31 днем', () => {
		const year = 2023; // Невисокосный год
		const month = 7; // Август
		const {prevMonthLastDays, currentMonthDays, nextMonthFirstDays} = getDays(year, month);

		expect(prevMonthLastDays.length).toBe(3); // Июль имеет 31 день, в предыдущем месяце должно быть 3 дня
		expect(currentMonthDays.length).toBe(31); // Август имеет 31 день
		expect(nextMonthFirstDays.length).toBe(2); // В следующем месяце должно быть 2 дня
	});

	it('возвращает правильные дни для февраля в високосном году', () => {
		const year = 2024; // Високосный год
		const month = 2; // Февраль
		const {prevMonthLastDays, currentMonthDays, nextMonthFirstDays} = getDays(year, month);

		expect(prevMonthLastDays.length).toBe(4); // Январь имеет 31 день, в предыдущем месяце должно быть 4 дня
		expect(currentMonthDays.length).toBe(29); // Февраль в високосном году имеет 29 дней
		expect(nextMonthFirstDays.length).toBe(4); // В следующем месяце (март) должно быть 4 дня
	});

	it('возвращает правильные дни для февраля в невисокосном году', () => {
		const year = 2023; // Невисокосный год
		const month = 2; // Февраль
		const {prevMonthLastDays, currentMonthDays, nextMonthFirstDays} = getDays(year, month);

		expect(prevMonthLastDays.length).toBe(3); // Январь имеет 31 день, в предыдущем месяце должно быть 3 дня
		expect(currentMonthDays.length).toBe(28); // Февраль в невисокосном году имеет 28 дней
		expect(nextMonthFirstDays.length).toBe(5); // В следующем месяце (март) должно быть 5 дней
	});
});
