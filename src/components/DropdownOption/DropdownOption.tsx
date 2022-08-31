import classNames from 'classnames/bind';
import React from 'react';

import style from './DropdownOption.module.css';
import {DropdownOptionProps} from './DropdownOption.types';

const cx = classNames.bind(style);

function DropdownOption({
	onOptionMouseEnter,
	keyIndex,
	onSelectOption,
	selected,
	label,
	hover,
	currency,
	animatedIn,
}: DropdownOptionProps) {
	return (
		<div
			className={cx('option', animatedIn, selected, hover)}
			key={keyIndex}
			onClick={() => onSelectOption && onSelectOption(keyIndex as number)}
			onMouseEnter={() => onOptionMouseEnter && onOptionMouseEnter(keyIndex as number)}
		>
			<span className={cx('option-label', selected)}>{label}</span>
			<span className={cx('option-currency')}>{currency}</span>
		</div>
	);
}

export default DropdownOption;
