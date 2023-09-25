import React from 'react';

import {DatePickerTypes} from './index.types';
import {DatePickerProvider, DaysGrid, MonthsAndYearsLists, TogglePanel, ViewField} from './ui';

function DatePicker({value, onChange, lang = 'ru'}: DatePickerTypes) {
	return (
		<DatePickerProvider field={<ViewField value={value} />} lang={lang} value={value} onChange={onChange}>
			<TogglePanel />
			<DaysGrid />
			<MonthsAndYearsLists />
		</DatePickerProvider>
	);
}

export default DatePicker;
