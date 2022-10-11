import {Button as ButtonAntd} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {ButtonProps} from './Button.types';

function Button({className, theme = 'white', color, gradient, children, type, ...props}: ButtonProps) {
	const classes = classNames('ui-kit-button', `ui-kit-button-${type}`, theme, color, {gradient}, className);

	return (
		<ButtonAntd className={classes} type={type} {...props}>
			{children}
		</ButtonAntd>
	);
}

export default Button;
