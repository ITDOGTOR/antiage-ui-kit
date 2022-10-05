import {Button as ButtonAntd} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {ButtonProps} from './Button.types';

function Button({className, theme, color, gradient, children, ...props}: ButtonProps) {
	const classes = classNames('ui-kit-button', theme, color, {gradient}, className);

	return (
		<ButtonAntd className={classes} {...props}>
			{children}
		</ButtonAntd>
	);
}

export default Button;
