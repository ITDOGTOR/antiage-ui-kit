import classNames from 'classnames/bind';
import React from 'react';

import style from './CheckBox.module.css';
import {CheckBoxProps} from './CheckBox.types';

const cx = classNames.bind(style);

function CheckBox({className = '', theme = 'white', children, onChange, disabled = false}: CheckBoxProps) {
	return (
		<div className={cx(style.checkbox, className)} data-testid="checkbox-component">
			<label className={cx(style.switch)} htmlFor="checkbox">
				<input data-testid="checkbox" disabled={disabled} id="checkbox" type="checkbox" onChange={onChange} />
				<div className={cx(style[`slider-${theme}`], style.round)} data-testid="slider" />
			</label>
			{children}
		</div>
	);
}

export default CheckBox;
