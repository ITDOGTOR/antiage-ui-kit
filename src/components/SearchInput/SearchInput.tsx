import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, {useMemo, useState} from 'react';

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
	size,
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
		`ui-kit-search-input-container__size-${size}`,
		`ui-kit-search-input-container__theme-${theme}`,
		containerClassName,
	);
	const iconClasses = classNames('ui-kit-search-input-icon', `ui-kit-search-input-icon__size-${size}`);
	const inputClasses = classNames('ui-kit-search-input', `ui-kit-search-input__size-${size}`, inputClassName);

	function handleChange(inputValue: string) {
		if (onChange) {
			onChange(inputValue);
		}
		if (debouncedOnChange) {
			debouncedOnChange(inputValue);
		}
		setLocalValue(inputValue);
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
				onChange={(e) => handleChange(e.target.value)}
				{...inputProps}
			/>
		</div>
	);
}

export default SearchInput;
