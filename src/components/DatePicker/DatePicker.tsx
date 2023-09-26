import React from 'react';

import {Theme} from '../index.types';
import {DatePickerProps} from './index.types';
import {DatePickerProvider, DaysGrid, MonthsAndYearsLists, TogglePanel, ViewField} from './ui';

function DatePicker({
	name,
	placeholder,
	value = '',
	onChange,
	disabled,
	isSplit,
	withLabel,
	error,
	className,
	theme = Theme.WHITE,
	lang = 'ru',
	onClosePopup,
	inputMask,
	applyMask,
}: DatePickerProps) {
	return (
		<DatePickerProvider
			applyMask={applyMask}
			field={
				<ViewField
					className={className}
					disabled={disabled}
					error={error}
					inputMask={inputMask}
					isSplit={isSplit}
					name={name}
					placeholder={placeholder}
					theme={theme}
					value={value}
					withLabel={withLabel}
				/>
			}
			lang={lang}
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
