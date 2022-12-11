import {Input as AntInput} from 'antd';
import classNames from 'classnames';
import React, {FocusEvent, useRef, useState} from 'react';

import {Danger, LightMessage, PasswordEye, PasswordEyeHide, PasswordLock} from '../../assets';
import {InputProps} from './Input.types';

function Input({className, theme = 'white', placeholder = '', error = '', ...props}: InputProps) {
	const [isFocused, setFocused] = useState(false);

	const id = useRef({id: String(Date.now())});
	const ref = useRef(null);

	const {disabled, type} = props;

	const onBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (props.onBlur) {
			props.onBlur(e);
		}
		if (!props.value) {
			setFocused(false);
		}
	};

	const onFocus = (e: FocusEvent<HTMLInputElement>) => {
		if (props.onFocus) {
			props.onFocus(e);
		}
		setFocused(true);
	};

	const isTextarea = type === 'textarea';
	const isPassword = type === 'password';
	const isEmail = type === 'email';

	// @ts-ignore
	const localValue = isTextarea ? ref.current?.resizableTextArea.value : ref.current?.input.value;

	const wrapperClasses = classNames(
		'ui-kit-input-wrapper',
		theme,
		{focused: isFocused},
		{withPlaceholder: placeholder},
		{password: isPassword},
		{icon: isEmail || isPassword},
		{disabled},
		{error},
	);
	const classes = classNames(
		'ui-kit-input',
		theme,
		{withPlaceholder: placeholder},
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
	);
	const passwordBtnClasses = classNames('ui-kit-input-password-btn');
	const errorClasses = classNames('ui-kit-input-error');
	const iconClasses = classNames('ui-kit-input-icon', {disabled}, {error});

	let Component = AntInput;
	if (isTextarea) {
		// @ts-ignore
		Component = AntInput.TextArea;
	}

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

	const commonProps = {className: classes, type: localType, autoSize: {}, disabled, ...props, onBlur, onFocus};

	return (
		<div>
			<div className={wrapperClasses}>
				{placeholder && (
					<label className={labelClasses} htmlFor={id.current.id}>
						{placeholder}
					</label>
				)}
				{(isPassword || isEmail) && <Icon className={iconClasses} />}
				<Component id={id.current.id} ref={ref} {...commonProps} />
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
