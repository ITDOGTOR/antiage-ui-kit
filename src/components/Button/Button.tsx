import cn from 'classnames/bind';
import React from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

const cx = cn.bind(styles);

function Button({
	children = 'Click me!',
	onClick,
	styleType = 'base-fill',
	disabled = false,
	className = '',
	theme = 'white',
	htmlType = 'button',
}: ButtonProps) {
	const mainClassName = cn(styles.button, styles[`${styleType}-${theme}`], className);

	return (
		// eslint-disable-next-line react/button-has-type
		<button className={cx(mainClassName)} data-testid="button" disabled={disabled} type={htmlType} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
