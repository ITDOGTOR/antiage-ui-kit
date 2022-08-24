import className from 'classnames';
import React from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

const cx = className.bind(styles);

function Button({
	children = 'Click me!',
	onClick,
	styleButton = 'accent-fill',
	disabled = false,
	width = 'default',
	customClass = '',
	theme = 'white',
	icon,
	htmlType = 'button',
}: ButtonProps) {
	const mainClassName = className(styles.button, styles[`${styleButton}-${theme}`], styles[width], customClass);

	return (
		<button
			className={cx(mainClassName)}
			data-testid="button"
			disabled={disabled}
			type={htmlType === 'button' ? 'button' : 'submit'}
			onClick={onClick}
		>
			{icon} {children}
		</button>
	);
}

export default Button;
