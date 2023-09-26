import './DatePickerProvider.css';

import classNames from 'classnames';
import React, {useMemo, useState} from 'react';

import Container from '../../../Container';
import {DateAttributes, DateInfo, ViewMode} from '../../index.types';
import {addZeroFirstSymbol, formatDateInput, getDateObj, usePopupControl} from '../../lib';
import {DatePickerContext} from '../../model';
import {DatePickerProviderProps} from './DatePickerProvider.types';

export function DatePickerProvider({
	field,
	value,
	onChange,
	applyMask = formatDateInput,
	onClosePopup,
	lang,
	children,
}: DatePickerProviderProps) {
	const [mode, setMode] = useState(ViewMode.MAIN);
	const [visualDate, setVisualDate] = useState<DateInfo>(getDateObj(value));

	const {isOpen, onToggle, onBlur, isRenderPopupTop, isPopupShouldClose, onDelayClose} = usePopupControl(
		setMode,
		onClosePopup,
	);

	const onChangeDate = (attribute: DateAttributes, newValue: string | number) => {
		setVisualDate({...visualDate, [attribute]: newValue});

		if (attribute === DateAttributes.DAY) {
			onChange(`${visualDate.year}-${addZeroFirstSymbol(visualDate.month + 1)}-${addZeroFirstSymbol(newValue)}`);
			onDelayClose();
		}

		if (attribute === DateAttributes.INPUT) {
			if (typeof newValue !== 'number') {
				onChange(applyMask(newValue));
			}

			setVisualDate(getDateObj(applyMask(newValue)));
			onDelayClose();
		}
	};

	const contextData = useMemo(
		() => ({
			visualDate,
			selectedDate: value ? getDateObj(value) : null,
			onChangeDate,
			onToggle,
			lang,
			mode,
			setMode,
		}),
		[visualDate, mode, lang, onChangeDate, onToggle],
	);

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
		<div style={{position: 'relative'}} tabIndex={0} onBlur={onBlur}>
			<DatePickerContext.Provider value={contextData}>
				{field}

				{isOpen && (
					<Container
						className={classNames('ui-kit-date-picker__container', {
							'ui-kit-date-picker__container--top': isRenderPopupTop,
							'ui-kit-date-picker__container--close': isPopupShouldClose,
						})}
					>
						{children}
					</Container>
				)}
			</DatePickerContext.Provider>
		</div>
	);
}
