import 'react-phone-input-2/lib/high-res.css';

import classNames from 'classnames';
import React, {ChangeEvent, useRef, useState} from 'react';
import RPhone from 'react-phone-input-2';
// @ts-ignore
import ru from 'react-phone-input-2/lang/ru.json';

import {ArrowShow} from '../../assets';
import Input from '../Input';
import InputError from '../InputError';
import {PhoneInputProps} from './PhoneInput.types';

function PhoneInput({
	error = '',
	innerRef,
	className = '',
	placeholder = '',
	wrapperClassName = '',
	onChange,
	onCountryChange,
	...props
}: PhoneInputProps) {
	const {value = '', disabled} = props;

	const [isOpened, setOpened] = useState(false);
	const [localValue, setLocalValue] = useState('');
	const [countryInfo, setCountryInfo] = useState<{dialCode?: any; format?: string}>({format: '.. .. ..'});
	const slicedValue = (value || localValue).replace(countryInfo.dialCode, '');
	const defaultMask = countryInfo.format?.split(' ').slice(1).join(' ') || '';
	const formattedValue = slicedValue
		? slicedValue.split('').reduce((acc, cur, index) => {
				if (index === slicedValue.length - 1) {
					const result = acc.replace('.', cur);
					const symbolIndex = result.split('').lastIndexOf(cur);
					return result.slice(0, symbolIndex + 1);
				}
				return acc.replace('.', cur);
		  }, defaultMask)
		: '';
	const ref = useRef();
	const classes = classNames('ui-kit-phoneInput', className);
	const wrapperClasses = classNames('ui-kit-phoneInput-wrapper', wrapperClassName);
	const dropdownButtonClasses = classNames('ui-kit-phoneInput-dropdownButton');
	const dropdownArrowClasses = classNames('ui-kit-phoneInput-arrow', {opened: isOpened});
	const hiddenClasses = classNames('ui-kit-phoneInput-hidden');
	const buttonInputClasses = classNames('ui-kit-phoneInput-button');
	const dropdownInputClasses = classNames('ui-kit-phoneInput-dropdown');

	const handleClickOnSelector = (e: React.MouseEvent) => {
		e.preventDefault();
		// @ts-ignore
		if (ref.current?.dropdownContainerRef) {
			// @ts-ignore
			ref.current?.dropdownContainerRef.children[0].click();
			setOpened(true);
		}
	};

	const handleFormatChange = (country: {dialCode?: any; format?: string | undefined}) => {
		if (onCountryChange) {
			onCountryChange(country);
		}
	};

	const handleCodeChange = (val: any, country: {dialCode?: any; format?: string}) => {
		setCountryInfo((state) => {
			if (JSON.stringify(state) === JSON.stringify(country)) {
				return state;
			}
			const rawValue = (value || localValue).replace(countryInfo.dialCode, '') || '';
			if (onChange) {
				onChange(`${country.dialCode}${rawValue}`);
			}
			setLocalValue(`${country.dialCode}${rawValue}`);
			handleFormatChange(country);
			return country;
		});
	};

	const handleCodeChangeOnMount = (val: any, country: {dialCode: any; format: string | undefined}) => {
		if (!value) {
			handleCodeChange(val, country);
			return;
		}
		setCountryInfo(() => {
			handleFormatChange(country);
			return country;
		});
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const formattedNumber = e.target.value.replace(/[^0-9]/g, '');
		const result = `${countryInfo.dialCode}${formattedNumber}`;
		const countNumbersInPhone = countryInfo.format?.match(/[.]/gm)?.length || 0;
		if (result.length <= countNumbersInPhone) {
			if (onChange) {
				onChange(result);
			}
			setLocalValue(result);
		}
	};

	const commonProps = {
		ref,
		className: classes,
		buttonClass: buttonInputClasses,
		inputClass: hiddenClasses,
		dropdownClass: dropdownInputClasses,
		placeholder,
		localization: ru,
		onChange: handleCodeChange,
		onMount: handleCodeChangeOnMount,
		...props,
	};

	return (
		<>
			<div className={wrapperClasses}>
				<button className={dropdownButtonClasses} type="button" onClick={handleClickOnSelector}>
					<RPhone {...commonProps} />
					<span>{`+${countryInfo.dialCode}`}</span>
					<ArrowShow className={dropdownArrowClasses} />
				</button>
				<Input
					disabled={disabled}
					innerRef={innerRef}
					placeholder={countryInfo.format?.slice(1 + (countryInfo.dialCode?.length || 1)).replace(/\./gi, '_')}
					theme="gray"
					value={formattedValue}
					onChange={handleChange}
				/>
			</div>
			<InputError error={error} />
		</>
	);
}

export default PhoneInput;
