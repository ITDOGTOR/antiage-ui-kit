import {Button as ButtonAntd} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {ButtonProps} from './Button.types';

function Button({className, theme = 'white', color, children, ...props}: ButtonProps) {
	const classes = classNames('ui-kit-button', {
		[theme]: theme,
		[color as string]: color,
		[className as string]: className,
	});

	return (
		<ButtonAntd className={classes} {...props}>
			{children}
		</ButtonAntd>
	);
}

export default Button;
