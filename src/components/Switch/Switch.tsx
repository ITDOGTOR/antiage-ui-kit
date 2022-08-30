import classNames from 'classnames/bind';
import React, {useState} from 'react';

import styles from './Switch.module.css';
import {SwitchProps} from './Switch.types';

const cx = classNames.bind(styles);

function Switch({className = '', theme = 'white', children, onChange, disabled = false}: SwitchProps) {
	const [checked, setChecked] = useState(false);
	const [shadowBox, setShadowBox] = useState('');
	const onClick = () => {
		setChecked(!checked);
		setShadowBox('shadow-box');
		setTimeout(() => {
			setShadowBox('not-shadow-box');
		}, 200);
	};

	return (
		<div className={cx('component', className)} data-testid="Switch-component">
			<label className={cx('switch', shadowBox)} htmlFor="Switch">
				<input
					checked={checked}
					className={cx('checkbox')}
					data-testid="Switch"
					disabled={disabled}
					id="Switch"
					type="checkbox"
					onChange={onChange}
					onClick={onClick}
				/>
				<span className={cx(`slider-${theme}`, 'round')} data-testid="slider" />
			</label>
			<button className={cx('label')} disabled={disabled} type="button" onClick={onClick}>
				{children}
			</button>
		</div>
	);
}

export default Switch;
