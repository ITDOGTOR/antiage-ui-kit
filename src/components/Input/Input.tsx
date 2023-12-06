import classNames from 'classnames';
import React, {ChangeEvent, FocusEvent, SetStateAction, useEffect, useState} from 'react';

import {Eye, EyeClosed, Letter, Lock} from '../../assets';
import {Size, Theme} from '../index.types';
import InputError from '../InputError';
import {InputProps} from './Input.types';

function Input({
	className = '',
	wrapperClassName = '',
	inputWrapperClassName = '',
	labelClassName = '',
	placeholderClassName = '',
	iconClassName = '',
	size = Size.LARGE,
	theme = Theme.WHITE,
	placeholder = '',
	label = '',
	error = '',
	innerRef,
	...props
}: InputProps) {
	const [isFocused, setFocused] = useState(false);
	const [localValue, setLocalValue] = useState<SetStateAction<string | number | readonly string[] | undefined>>('');

	const {disabled, type, onChange, value} = props;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event);
		}
		setLocalValue(event.target.value);
	};

	useEffect(() => {
		setLocalValue(value);
	}, [value]);

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

	const isPassword = type === 'password';
	const isEmail = type === 'email';
	const isPlaceholder = !(isFocused || localValue) || !label;

	const wrapperClasses = classNames(wrapperClassName);
	const inputWrapperClasses = classNames(
		'ui-kit-input-wrapper',
		theme,
		size,
		{focused: isFocused},
		{password: isPassword},
		{icon: isEmail || isPassword},
		{disabled},
		{error},
		inputWrapperClassName,
	);
	const classes = classNames(
		'ui-kit-input',
		theme,
		{withLabel: label},
		{password: isPassword},
		{icon: isEmail || isPassword},
		{error},
		className,
	);
	const labelClasses = classNames(
		'ui-kit-input-label-common',
		isFocused || localValue ? 'ui-kit-input-label' : 'ui-kit-input-placeholder',
		{invisible: isPlaceholder && placeholder},
		theme,
		{icon: isEmail || isPassword},
		{error},
		labelClassName,
	);
	const placeholderClasses = classNames(
		'ui-kit-input-label-common',
		'ui-kit-input-placeholder',
		theme,
		{noLabel: !label},
		{
			icon: isEmail || isPassword,
		},
		{error},
		placeholderClassName,
	);
	const passwordBtnClasses = classNames('ui-kit-input-password-btn');
	const iconClasses = classNames('ui-kit-input-icon', {disabled}, {error}, iconClassName);

	let Icon = Lock;
	if (isEmail) {
		Icon = Letter;
	}

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisible = () => setShowPassword((prev) => !prev);

	let localType = type;
	if (isPassword) {
		localType = showPassword ? 'text' : 'password';
	}

	const commonProps = {
		className: classes,
		...props,
		type: localType,
		onBlur,
		onFocus,
		onChange: handleChange,
		ref: innerRef,
	};

	return (
		<div className={wrapperClasses}>
			<label className={inputWrapperClasses}>
				{label && <span className={labelClasses}>{label}</span>}
				{placeholder && isPlaceholder && !localValue && <span className={placeholderClasses}>{placeholder}</span>}
				{(isPassword || isEmail) && <Icon className={iconClasses} />}
				<input {...commonProps} />
				{isPassword && !disabled && (
					<button className={passwordBtnClasses} type="button" onClick={togglePasswordVisible}>
						{showPassword ? <EyeClosed aria-label="hide-password" /> : <Eye aria-label="show-password" />}
					</button>
				)}
			</label>
			<InputError error={error} />
		</div>
	);
}

export default Input;
