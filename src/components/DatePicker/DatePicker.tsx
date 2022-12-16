import classNames from 'classnames';
import React, {ChangeEvent, FocusEvent, MouseEvent, SetStateAction, useEffect, useRef, useState} from 'react';

import {ArrowShow, LightCalendar} from '../../assets';
import InputError from '../InputError';
import {DatePickerProps} from './DatePicker.types';

function DatePicker({
	className = '',
	wrapperClassName = '',
	labelClassName = '',
	iconClassName = '',
	theme = 'white',
	label = '',
	error = '',
	size = 'default',
	centered = false,
	dropdown = false,
	dropdownClassName = '',
	contrast = false,
	innerRef,
	...props
}: DatePickerProps) {
	const [isFocused, setFocused] = useState(false);
	const [localValue, setLocalValue] = useState<SetStateAction<string | number | readonly string[] | undefined>>('');

	const {disabled, onChange, value} = props;

	const ref = useRef<HTMLInputElement>(null);
	const datePickerRef = innerRef || ref;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event);
		}
		setLocalValue(event.target.value);
	};

	useEffect(() => {
		setLocalValue(value);
	}, [value]);

	useEffect(() => {
		const handleCalendarClick = () => {
			try {
				datePickerRef.current?.showPicker();
			} catch (err) {
				//
			}
		};
		if (datePickerRef.current) {
			datePickerRef.current.addEventListener('focusin', handleCalendarClick);
		}
		return () => datePickerRef.current?.removeEventListener('focusin', handleCalendarClick);
	}, [datePickerRef.current]);

	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (props.onBlur) {
			props.onBlur(e);
		}
		setFocused(false);
	};

	const onFocus = (e: FocusEvent<HTMLInputElement>) => {
		if (props.onFocus) {
			props.onFocus(e);
		}
		setFocused(true);
	};

	const onClick = (e: MouseEvent<HTMLInputElement>) => {
		if (props.onClick) {
			props.onClick(e);
		}
		setFocused(true);
	};

	const wrapperClasses = classNames(
		'ui-kit-datepicker-wrapper',
		theme,
		size,
		{contrast},
		{centered},
		{focused: isFocused},
		{disabled},
		{error},
		wrapperClassName,
	);
	const classes = classNames('ui-kit-datepicker', theme, size, {centered}, {error}, className);
	const labelClasses = classNames(
		'ui-kit-datepicker-label-common',
		isFocused || localValue ? 'ui-kit-datepicker-label' : 'ui-kit-datepicker-placeholder',
		theme,
		size,
		{contrast},
		{dropdown},
		{error},
		labelClassName,
	);
	const iconClasses = classNames('ui-kit-datepicker-icon', {disabled}, {centered}, {error}, iconClassName);
	const dropdownClasses = classNames('ui-kit-datepicker-dropdown', dropdownClassName);

	const commonProps = {
		className: classes,
		...props,
		type: 'date',
		onBlur,
		onFocus,
		onChange: handleChange,
		onClick,
		ref: datePickerRef,
	};

	return (
		<div>
			<label className={wrapperClasses}>
				{label && (
					<span className={labelClasses}>
						<LightCalendar className={iconClasses} />
						{label}
					</span>
				)}
				<LightCalendar className={iconClasses} />
				<input {...commonProps} />
				{dropdown && !centered && !disabled && <ArrowShow className={dropdownClasses} />}
			</label>
			<InputError error={error} />
		</div>
	);
}

export default DatePicker;
