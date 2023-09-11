import React from 'react';

import {DatePickerProvider, DaysGrid, MonthsAndYearsLists, TogglePanel} from './ui';

function DatePicker({value, onChange, lang}) {
	return (
		<DatePickerProvider value={value} onChange={onChange} lang={lang}>
			<TogglePanel />
			<DaysGrid />
			<MonthsAndYearsLists />
		</DatePickerProvider>
	);
}

export default DatePicker;
