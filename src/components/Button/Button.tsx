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
	className = '',
	theme = 'white',
	htmlType = 'button',
	...props
}: ButtonProps) {
	const defaultProps = {
		className: cx('button', `${styleType}-${theme}`, className),
		disabled,
		type: htmlType,
	};

	if (isLink) {
		return cloneElement(children as ReactElement, {className: defaultProps.className});
	}

	if (htmlType === 'button') {
		return (
			<button {...defaultProps} onClick={onClick} {...props}>
				{children}
			</button>
		);
	}

	return (
		<button {...defaultProps} {...props}>
			{children}
		</button>
	);
}

export default Button;
