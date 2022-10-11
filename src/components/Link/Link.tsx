import classNames from 'classnames';
import React from 'react';
import {Link as LinkRouterDom} from 'react-router-dom';

import {LinkProps} from './Link.types';

function Link({className, theme = 'white', gradient, color, danger, type = 'default', children, ...props}: LinkProps) {
	const classes = classNames(
		`ant-btn-${type}`,
		{'ant-btn-dangerous': danger},
		'ui-kit-button',
		`ui-kit-button-${type}`,
		theme,
		color,
		{gradient},
		className,
	);

	return (
		<LinkRouterDom className={classes} {...props}>
			{children}
		</LinkRouterDom>
	);
}

export default Link;
