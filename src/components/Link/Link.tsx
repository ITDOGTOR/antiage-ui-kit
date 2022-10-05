import classNames from 'classnames';
import React from 'react';
import {Link as LinkRouterDom} from 'react-router-dom';

import {LinkProps} from './Link.types';

function Link({className, theme = 'white', gradient, color, danger, type = 'default', children, ...props}: LinkProps) {
	const classes = classNames(
		`ant-btn-${type}`,
		'ui-kit-button',
		theme,
		color,
		{'ant-btn-dangerous': danger, gradient},
		className,
	);

	return (
		<LinkRouterDom className={classes} {...props}>
			{children}
		</LinkRouterDom>
	);
}

export default Link;
