import className from 'classnames';
import React from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

const cx = className.bind(styles);

function Button({content, onClick, styleButton, disabled = true, width = 'default', customClass}: ButtonProps) {
	const mainClassName = className(styles.button, styles[styleButton], styles[width], customClass);
	return (
		<button className={cx(mainClassName)} data-testid="button" disabled={disabled} type="button" onClick={onClick}>
			{content}
		</button>
	);
}

export default Button;
