import classNames from 'classnames';
import React from 'react';

import {Check} from '../../assets';
import {CheckboxProps} from './Checkbox.types';

function Checkbox({
	id,
	value,
	onChange,
	onClick,
	theme,
	disabled,
	defaultChecked,
	label,
	wrapperClassName,
	containerClassName,
	className,
	labelClassName,
	...props
}: CheckboxProps) {
	const wrapperClasses = classNames(
		'ui-kit-checkbox__wrapper',
		disabled && 'ui-kit-checkbox__wrapper-disabled',
		wrapperClassName,
	);
	const containerClasses = classNames('ui-kit-checkbox', containerClassName);
	const inputClasses = classNames('ui-kit-checkbox-fakeInput', `ui-kit-checkbox-fakeInput__theme-${theme}`, className);
	const inputIconClasses = classNames(
		'ui-kit-checkbox-fakeInput-icon',
		`ui-kit-checkbox-fakeInput-icon__theme-${theme}`,
	);
	const labelClasses = classNames('ui-kit-checkbox-label', labelClassName);
	return (
		<div className={wrapperClasses}>
			<input
				className="ui-kit-checkbox-input__hidden"
				defaultChecked={defaultChecked}
				disabled={disabled}
				id={id}
				type="checkbox"
				value={value}
				onChange={onChange}
				onClick={onClick}
				{...props}
			/>
			<label className={containerClasses} htmlFor={id}>
				<div className={inputClasses}>
					<Check className={inputIconClasses} />
				</div>
				<span className={labelClasses}>{label}</span>
			</label>
		</div>
	);
}

export default Checkbox;
