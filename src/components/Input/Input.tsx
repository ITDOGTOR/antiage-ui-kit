import classNames from 'classnames';
import React, {ChangeEvent, Suspense, useMemo, useState} from 'react';

import {Eye, EyeClosed, Letter, Lock} from '../../assets';
import {InputProps} from './Input.types';
import {InputErrorTooltip} from './ui';

function Input({
	iconName = '',
	CustomIconComponent = undefined,
	theme = 'white',
	inputSize = 'medium',
	disabled,
	type,
	error = '',
	label = '',
	placeholder = '',
	value = '',
	className = '',
	wrapperClassName = '',
	inputWrapperClassName = '',
	labelClassName = '',
	placeholderClassName = '',
	iconClassName = '',
	innerRef,
	onChange,
	...props
}: InputProps) {
	const [localValue, setLocalValue] = useState(value);
	const [localType, setLocalType] = useState(type);
	const [isIconImportError, setIsIconImportError] = useState(false);

	const LocalInputIcon = useMemo(() => {
		const importPromise = import(`../../assets/${iconName}`)
			.then((importedModule) => {
				setIsIconImportError(false);
				return importedModule;
			})
			.catch((e) => {
				console.error(e);
				setIsIconImportError(true);
				return e;
			});

		return React.lazy(() => importPromise);
	}, [iconName]);

	const isPassword = type === 'password';
	const isEmail = type === 'email';
	const isIcon = isPassword || isEmail || (!!iconName && !isIconImportError) || CustomIconComponent;

	function togglePasswordVisible() {
		setLocalType((prev) => (prev === 'password' ? 'text' : 'password'));
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (onChange) {
			onChange(e);
		}
		setLocalValue(e.target.value);
	}

	const inputWrapperClasses = classNames(
		'ui-kit-input__wrapper',
		{'ui-kit-input__wrapper--active': inputSize === 'large' && !!localValue},
		`ui-kit-input__wrapper--size-${inputSize}`,
		`ui-kit-input__wrapper--theme-${theme}`,
		{'ui-kit-input__wrapper--disabled': disabled},
		{'ui-kit-input__wrapper--passwordIcon': isPassword},
		{'ui-kit-input__wrapper--icon': isIcon},
		{'ui-kit-input__wrapper--error': !!error},
		inputWrapperClassName,
	);

	const labelClasses = classNames(
		'ui-kit-input__label',
		{'ui-kit-input__label--invisible': !label || inputSize !== 'large' || !localValue},
		{'ui-kit-input__label--error': error},
		{'ui-kit-input__label--disabled': disabled},
		labelClassName,
	);

	const placeholderClasses = classNames(
		'ui-kit-input__placeholder',
		`ui-kit-input__placeholder--size-${inputSize}`,
		{'ui-kit-input__placeholder--icon': isIcon},
		{'ui-kit-input__placeholder--invisible': !!localValue || !placeholder},
		placeholderClassName,
	);

	const inputClasses = classNames(
		'ui-kit-input',
		`ui-kit-input--size-${inputSize}`,
		{'ui-kit-input--icon': isIcon},
		className,
	);

	const iconClasses = classNames(
		'ui-kit-input__icon',
		{'ui-kit-input__icon--error': error},
		{'ui-kit-input__icon--disabled': disabled},
		iconClassName,
	);

	const togglePasswordIconClasses = classNames('ui-kit-input__icon__togglePasswordIcon', {
		'ui-kit-input__icon__togglePasswordIcon--error': error,
	});

	return (
		<div className={classNames(wrapperClassName)}>
			<label className={inputWrapperClasses}>
				<span className={labelClasses}>{label}</span>
				<span className={placeholderClasses}>{placeholder}</span>
				{!!iconName && !isIconImportError && (
					<Suspense fallback={<span>...</span>}>
						<LocalInputIcon className={iconClasses} />
					</Suspense>
				)}
				{!!CustomIconComponent && <CustomIconComponent className={iconClasses} />}
				{isEmail && <Letter className={iconClasses} />}
				{isPassword && <Lock className={iconClasses} />}
				<input
					className={inputClasses}
					disabled={disabled}
					ref={innerRef}
					type={localType}
					value={localValue}
					onChange={handleChange}
					{...props}
				/>
				{isPassword && (
					<button
						className={togglePasswordIconClasses}
						disabled={disabled}
						type="button"
						onClick={togglePasswordVisible}
					>
						{localType === type ? <EyeClosed aria-label="hide-password" /> : <Eye aria-label="show-password" />}
					</button>
				)}
				<InputErrorTooltip errorText={error} />
			</label>
		</div>
	);
}

export default Input;
