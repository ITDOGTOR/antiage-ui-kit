import {Button as ButtonAntd} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {Theme} from '../index.types';
import {ButtonProps} from './Button.types';

function Button({className, theme = Theme.WHITE, color, gradient, children, type, ...props}: ButtonProps) {
	const classes = classNames('ui-kit-button', `ui-kit-button-${type}`, theme, color, {gradient}, className);

	return (
		<ButtonAntd className={classes} type={type} {...props}>
			{children}
		</ButtonAntd>
	);
}

export default Button;
