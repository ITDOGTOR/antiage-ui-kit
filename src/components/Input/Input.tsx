import classNames from 'classnames';
import React, {ChangeEvent, FocusEvent, SetStateAction, useEffect, useRef, useState} from 'react';

import {Danger, LightMessage, PasswordEye, PasswordEyeHide, PasswordLock} from '../../assets';
import {InputProps} from './Input.types';

function Input({
	className = '',
	wrapperClassName = '',
	labelClassName = '',
	placeholderClassName = '',
	iconClassName = '',
	theme = 'white',
	placeholder = '',
	label = '',
	error = '',
	innerRef,
	...props
}: InputProps) {
	const [isFocused, setFocused] = useState(false);
	const [localValue, setLocalValue] = useState<SetStateAction<string | number | readonly string[] | undefined>>('');

	const id = useRef({id: String(Date.now())});

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

	const wrapperClasses = classNames(
		'ui-kit-input-wrapper',
		theme,
		{focused: isFocused},
		{password: isPassword},
		{icon: isEmail || isPassword},
		{disabled},
		{error},
		wrapperClassName,
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
		theme,
		{icon: isEmail || isPassword},
		{error},
		labelClassName,
	);
	const placeholderClasses = classNames(
		'ui-kit-input-label-common',
		'ui-kit-input-placeholder',
		theme,
		{
			icon: isEmail || isPassword,
		},
		placeholderClassName,
	);
	const passwordBtnClasses = classNames('ui-kit-input-password-btn');
	const errorClasses = classNames('ui-kit-input-error');
	const iconClasses = classNames('ui-kit-input-icon', {disabled}, {error}, iconClassName);

	let Icon = PasswordLock;
	if (isEmail) {
		Icon = LightMessage;
	}

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisible = () => setShowPassword((prev) => !prev);

	let localType = type;
	if (isPassword) {
		localType = showPassword ? 'text' : 'password';
	}

	const commonProps = {
		id: id.current.id,
		className: classes,
		...props,
		type: localType,
		onBlur,
		onFocus,
		onChange: handleChange,
		ref: innerRef,
	};

	return (
		<div>
			<div className={wrapperClasses}>
				{label && (
					<label className={labelClasses} htmlFor={id.current.id}>
						{label}
					</label>
				)}
				{placeholder && !localValue && (
					<label className={placeholderClasses} htmlFor={id.current.id}>
						{placeholder}
					</label>
				)}
				{(isPassword || isEmail) && <Icon className={iconClasses} />}
				<input {...commonProps} />
				{isPassword && !disabled && (
					<button className={passwordBtnClasses} type="button" onClick={togglePasswordVisible}>
						{showPassword ? <PasswordEyeHide aria-label="hide-password" /> : <PasswordEye aria-label="show-password" />}
					</button>
				)}
			</div>
			{error && (
				<div className={errorClasses}>
					<Danger aria-label="error" />
					<span>{error}</span>
				</div>
			)}
		</div>
	);
}

export default Input;
