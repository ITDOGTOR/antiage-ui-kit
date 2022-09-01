import classNames from 'classnames/bind';
import React, {ChangeEvent, useState} from 'react';

import styles from './Switch.module.css';
import {SwitchProps} from './Switch.types';

const cx = classNames.bind(styles);

function Switch({
	className,
	theme = 'white',
	children,
	onChange,
	disabled = false,
	defaultChecked = false,
}: SwitchProps) {
	const [inputChecked, setInputChecked] = useState<boolean>(defaultChecked || false);

	const onChangeChecked = (evt: ChangeEvent) => {
		setInputChecked((evt.target as HTMLInputElement).checked);
		onChange?.((evt.target as HTMLInputElement).checked);
	};

	return (
		<label className={cx(styles.switch, theme, className)}>
			<input
				checked={inputChecked}
				className={cx(styles.input)}
				data-testid="switch-input"
				disabled={disabled}
				type="checkbox"
				onChange={onChangeChecked}
			/>

			<span className={cx(styles.switchHandle)} data-testid="switch-label">
				<span className={cx(styles.circle)} />
			</span>

			{children && <span className={cx(styles.label)}>{children}</span>}
		</label>
	);
}

export default Switch;
