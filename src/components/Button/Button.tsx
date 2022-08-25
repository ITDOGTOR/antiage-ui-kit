import className from 'classnames/bind';
import React from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

const cx = className.bind(styles);

function Button({
	children = 'Click me!',
	onClick,
	styleType = 'accent-fill',
	disabled = false,
	customClass = '',
	theme = 'white',
	htmlType = 'button',
}: ButtonProps) {
	const mainClassName = className(styles.button, styles[`${styleType}-${theme}`], customClass);

	return (
		// eslint-disable-next-line react/button-has-type
		<button className={cx(mainClassName)} disabled={disabled} type={htmlType} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
