import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, {ChangeEvent, useMemo, useState} from 'react';

import {Search} from '../../assets';
import {SearchInputProps} from './SearchInput.types';

function SearchInput({
	value,
	onChange,
	onDebounce,
	debounceTimer = 0,
	placeholder,
	disabled,
	containerClassName,
	inputClassName,
	theme,
	inputSize,
	...inputProps
}: SearchInputProps) {
	const [localValue, setLocalValue] = useState('');

	const debouncedOnChange = useMemo(() => {
		if (onDebounce) {
			return debounce(onDebounce, debounceTimer);
		}
		return undefined;
	}, [onDebounce, debounceTimer]);

	const containerClasses = classNames(
		'ui-kit-search-input-container',
		disabled && `ui-kit-search-input-container-disabled`,
		`ui-kit-search-input-container__size-${inputSize}`,
		`ui-kit-search-input-container__theme-${theme}`,
		containerClassName,
	);
	const iconClasses = classNames('ui-kit-search-input-icon', `ui-kit-search-input-icon__size-${inputSize}`);
	const inputClasses = classNames('ui-kit-search-input', `ui-kit-search-input__size-${inputSize}`, inputClassName);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		if (onChange) {
			onChange(event);
		}
		if (debouncedOnChange) {
			debouncedOnChange(event.target.value);
		}
		setLocalValue(event.target.value);
	}

	return (
		<div className={containerClasses}>
			<Search className={iconClasses} />
			<input
				className={inputClasses}
				disabled={disabled}
				placeholder={placeholder}
				type="search"
				value={value || localValue}
				onChange={handleChange}
				{...inputProps}
			/>
		</div>
	);
}

export default SearchInput;
