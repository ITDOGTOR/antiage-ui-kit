import classNames from 'classnames';
import React from 'react';

import {Check} from '../../assets';
import {CheckboxProps} from './Checkbox.types';

function Checkbox({
	id,
	checked,
	onChange,
	onClick,
	theme,
	disabled,
	defaultChecked,
	text,
	containerClassName,
	className,
	textClassName,
	...props
}: CheckboxProps) {
	const wrapperClasses = classNames('ui-kit-checkbox__wrapper', disabled && 'ui-kit-checkbox__wrapper-disabled');
	const containerClasses = classNames('ui-kit-checkbox', containerClassName);
	const inputClasses = classNames('ui-kit-checkbox-fakeInput', `ui-kit-checkbox-fakeInput__theme-${theme}`, className);
	const inputIconClasses = classNames(
		'ui-kit-checkbox-fakeInput-icon',
		`ui-kit-checkbox-fakeInput-icon__theme-${theme}`,
		className,
	);
	const textClasses = classNames('ui-kit-checkbox-text', textClassName);
	return (
		<div className={wrapperClasses}>
			<input
				checked={checked}
				className="ui-kit-checkbox-input__hidden"
				defaultChecked={defaultChecked}
				disabled={disabled}
				id={id}
				type="checkbox"
				onChange={onChange}
				onClick={onClick}
				{...props}
			/>
			<label className={containerClasses} htmlFor={id}>
				<div className={inputClasses}>
					<Check className={inputIconClasses} />
				</div>
				<span className={textClasses}>{text}</span>
			</label>
		</div>
	);
}

export default Checkbox;
