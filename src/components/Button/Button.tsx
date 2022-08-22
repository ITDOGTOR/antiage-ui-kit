import className from 'classnames';
import React from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

function Button({
	label = 'Кнопка',
	onClick,
	typeButton = 'accentStrong',
	size = 'medium',
	disabled = true,
	width = 'default',
	loading = true,
}: ButtonProps) {
	const mainClassName = className(
		styles.button,
		styles[typeButton],
		styles[size],
		styles[width],
		loading && styles.loading,
	);

	return (
		<button className={mainClassName} disabled={disabled} type="button" onClick={onClick}>
			{label}
		</button>
	);
}

export default Button;
