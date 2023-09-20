import './DatePickerProvider.css';

import classNames from 'classnames';
import React, {useMemo, useState} from 'react';

import Container from '../../../Container';
import {DatePickerContext} from '../../config';
import {addZeroFirstSymbol} from '../../lib';
import {DateAttributes, DateInfo, ViewMode} from '../index.types';
import {DatePickerProviderProps} from './DatePickerProvider.types';

const formatDateInput = (newDate: string): string => {
	if (newDate.length < 10) {
		return newDate;
	}

	const [day, month, year]: string[] = newDate.slice(0, 10).split('.');

	return `${year}-${month}-${day}`;
};

/**
 * Applies the "YYYY-MM-DD" mask to a date value.
 *
 * @param {string} newDate - The date value to be formatted.
 * @returns {string} The formatted date value in the "YYYY-MM-DD" format.
 */
const setMaskedInputValue = (newDate: string): string => {
	const maskDate: string = newDate.replace(/\D/g, '').slice(0, 10);

	let formattedValue = '';

	let day = maskDate.slice(0, 2);
	let month = maskDate.slice(2, 4);
	if (Number(day) > 31) {
		day = '31';
	}
	if (Number(month) > 12) {
		month = '12';
	}

	if (maskDate.length >= 1) {
		formattedValue += day[0];
	}

	if (maskDate.length >= 2) {
		formattedValue += day[1];
	}

	if (maskDate.length >= 3) {
		formattedValue += `.${month[0]}`;
	}

	if (maskDate.length >= 4) {
		formattedValue += month[1];
	}

	if (maskDate.length >= 5) {
		formattedValue += `.${maskDate.slice(4, 8)}`;
	}

	return formattedValue;
};

/**
 * Retrieves the date information from a given Date object or string.
 *
 * @param {Date | string} value - The Date object or string to extract the date information from.
 * @returns {DateInfo} - An object containing the day, month, and year attributes of the given date.
 */
const getDateObj = (value: Date | string): DateInfo => {
	let date: Date;
	if (value) {
		date = new Date(value);
	} else {
		date = new Date();
	}

	return {
		[DateAttributes.DAY]: date.getDate(),
		[DateAttributes.MONTH]: date.getMonth(),
		[DateAttributes.YEAR]: date.getFullYear(),
	};
};

export function DatePickerProvider({
	value,
	onChange,
	applyDateMaskInput = formatDateInput,
	lang = 'ru',
	children,
}: DatePickerProviderProps) {
	const [mode, setMode] = useState(ViewMode.MAIN);
	const [visualDate, setVisualDate] = useState<DateInfo>(getDateObj(value));

	const onChangeDate = (attribute: DateAttributes, newValue: string | number) => {
		if (attribute === DateAttributes.DAY) {
			onChange(`${visualDate.year}-${addZeroFirstSymbol(visualDate.month + 1)}-${addZeroFirstSymbol(newValue)}`);
		}

		if (attribute === DateAttributes.INPUT) {
			if (typeof newValue !== 'number') {
				onChange(applyDateMaskInput(newValue));
			}

			setVisualDate(getDateObj(applyDateMaskInput(newValue)));
		}

		setVisualDate({...visualDate, [attribute]: newValue});
	};

	const contextData = useMemo(
		() => ({
			visualDate,
			selectedDate: value ? getDateObj(value) : null,
			onChangeDate,
			lang,
			mode,
			setMode,
		}),
		[visualDate, mode, lang],
	);

	return (
		<DatePickerContext.Provider value={contextData}>
			<input
				value={setMaskedInputValue(value)}
				onChange={({target}) => onChangeDate(DateAttributes.INPUT, target.value)}
			/>

			<Container className={classNames('ui-kit-date-picker__container')}>{children}</Container>
		</DatePickerContext.Provider>
	);
}
