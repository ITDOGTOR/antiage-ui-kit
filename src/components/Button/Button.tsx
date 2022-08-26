import classnames from 'classnames/bind';
import React from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

const cx = classnames.bind(styles);

function Button({
	children,
	onClick,
	styleType = 'base-fill',
	disabled = false,
	className = '',
	theme = 'white',
	htmlType = 'button',
}: ButtonProps) {
	return (
		<button
			className={cx(styles.button, styles[`${styleType}-${theme}`], className)}
			data-testid="button"
			disabled={disabled}
			// eslint-disable-next-line react/button-has-type
			type={htmlType}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
