import classNames from 'classnames/bind';
import React from 'react';

import style from './DropdownSelect.module.css';
import {DropdownSelectProps} from './DropdownSelect.types';

const cx = classNames.bind(style);

function DropdownSelect({label, amount, placeholder, disabled, icon, currency, rotate, hide}: DropdownSelectProps) {
	return (
		<>
			{label === placeholder ? (
				<span className={cx('select-placeholder', disabled)}>{placeholder}</span>
			) : (
				<span className={cx('select-label', disabled)}>{amount || label}</span>
			)}

			{currency && <span className={cx('select-currency')}>{currency}</span>}

			{icon ? (
				<span className={cx('select-icon', hide)}>{icon}</span>
			) : (
				<span className={cx('select-icon__default', rotate, hide)} />
			)}
		</>
	);
}

export default DropdownSelect;
