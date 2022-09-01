/* eslint-disable react/button-has-type */
import classnames from 'classnames/bind';
import React, {cloneElement, ReactElement} from 'react';

import styles from './Button.module.css';
import {ButtonProps} from './Button.types';

const cx = classnames.bind(styles);

function Button({
	children,
	onClick,
	isLink = false,
	styleType = 'base-fill',
	disabled = false,
	className,
	theme = 'white',
	htmlType = 'button',
}: ButtonProps) {
	const defaultProps = {
		className: cx(styles.button, theme, styleType, className),
		disabled,
		type: htmlType,
	};

	if (isLink) {
		return cloneElement(children as ReactElement, {className: defaultProps.className, 'data-testid': 'link'});
	}

	if (htmlType === 'button') {
		return (
			<button {...defaultProps} data-testid="button" onClick={onClick}>
				{children}
			</button>
		);
	}

	return (
		<button {...defaultProps} data-testid="button">
			{children}
		</button>
	);
}

export default Button;
