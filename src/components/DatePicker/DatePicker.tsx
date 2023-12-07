import React from 'react';

import {Size, Theme} from '../index.types';
import {DatePickerProps} from './index.types';
import {DatePickerProvider, DaysGrid, MonthsAndYearsLists, TogglePanel, ViewField} from './ui';

function DatePicker({
	value = '',
	onChange,
	theme = Theme.WHITE,
	size = Size.LARGE,
	lang = 'ru',
	onClosePopup,
	applyMask,
	isDropdownAutoPosition,
	...props
}: DatePickerProps) {
	return (
		<DatePickerProvider
			applyMask={applyMask}
			field={<ViewField size={size} theme={theme} value={value} {...props} />}
			isDropdownAutoPosition={isDropdownAutoPosition}
			lang={lang}
			size={size}
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
