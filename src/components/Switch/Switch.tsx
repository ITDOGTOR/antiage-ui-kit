import classNames from 'classnames/bind';
import React from 'react';

import styles from './Switch.module.css';
import {SwitchProps} from './Switch.types';

const cx = classNames.bind(styles);

function Switch({className = '', theme = 'white', children, onChange, disabled = false}: SwitchProps) {
	return (
		<label className={cx('switch', className)} htmlFor="Switch">
			<input className={cx('switch-handle')} disabled={disabled} id="Switch" type="checkbox" onChange={onChange} />
			<span className={cx(`slider-${theme}`, 'round')} />
			<span className={cx(disabled ? 'label-disabled' : 'label')}>{children}</span>
		</label>
	);
}

export default Switch;
