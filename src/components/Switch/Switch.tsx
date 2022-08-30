import classNames from 'classnames/bind';
import React from 'react';

import styles from './Switch.module.css';
import {SwitchProps} from './Switch.types';

const cx = classNames.bind(styles);

function Switch({className = '', theme = 'white', children, onChange, disabled = false}: SwitchProps) {
	return (
		<div className={cx('component', className)} data-testid="Switch-component">
			<label className={cx('switch')} htmlFor="Switch">
				<input
					className={cx('checkbox')}
					data-testid="Switch"
					disabled={disabled}
					id="Switch"
					type="checkbox"
					onChange={onChange}
				/>
				<span className={cx(`slider-${theme}`, 'round')} data-testid="slider" />
			</label>
			{children}
		</div>
	);
}

export default Switch;
