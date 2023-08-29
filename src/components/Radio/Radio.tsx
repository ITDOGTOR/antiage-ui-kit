import classNames from 'classnames';
import React from 'react';

import {RadioProps} from './Radio.types';

function Radio({
	id,
	name,
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
}: RadioProps) {
	const wrapperClasses = classNames('ui-kit-radio__wrapper', wrapperClassName);
	const containerClasses = classNames('ui-kit-radio', containerClassName);
	const inputClasses = classNames('ui-kit-radio-fakeInput', `ui-kit-radio-fakeInput__theme-${theme}`, className);
	const inputIconClasses = classNames('ui-kit-radio-fakeInput-icon', `ui-kit-radio-fakeInput-icon__theme-${theme}`);
	const labelClasses = classNames('ui-kit-radio-label', labelClassName);

	return (
		<div className={wrapperClasses} data-disabled={disabled}>
			<input
				className="ui-kit-radio-input__hidden"
				defaultChecked={defaultChecked}
				disabled={disabled}
				id={id}
				name={name}
				type="radio"
				value={value}
				onChange={onChange}
				onClick={onClick}
				{...props}
			/>
			<label className={containerClasses} htmlFor={id}>
				<div className={inputClasses}>
					<span className={inputIconClasses} />
				</div>
				<span className={labelClasses}>{label}</span>
			</label>
		</div>
	);
}

export default Radio;
