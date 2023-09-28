import React from 'react';

import {Theme} from '../index.types';
import {DatePickerProps, Position} from './index.types';
import {DatePickerProvider, DaysGrid, MonthsAndYearsLists, TogglePanel, ViewField} from './ui';

function DatePicker({
	value = '',
	onChange,
	theme = Theme.WHITE,
	lang = 'ru',
	onClosePopup,
	applyMask,
	position = Position.LEFT,
	...props
}: DatePickerProps) {
	return (
		<DatePickerProvider
			applyMask={applyMask}
			field={<ViewField theme={theme} value={value} {...props} />}
			lang={lang}
			position={position}
			value={value}
			onChange={onChange}
			onClosePopup={onClosePopup}
		>
			<TogglePanel />
			<DaysGrid />
			<MonthsAndYearsLists />
		</DatePickerProvider>
	);
}

export default DatePicker;
