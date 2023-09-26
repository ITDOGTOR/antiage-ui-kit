import classNames from 'classnames';
import React from 'react';
import {Link as LinkRouterDom} from 'react-router-dom';

import {Theme} from '../index.types';
import {LinkProps} from './Link.types';

function Link({
	className,
	theme = Theme.WHITE,
	gradient,
	color,
	danger,
	type = 'default',
	withoutRouterDom,
	children,
	...props
}: LinkProps) {
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

	if (withoutRouterDom) {
		return (
			<a className={classes} {...props}>
				{children}
			</a>
		);
	}

	return (
		<LinkRouterDom className={classes} {...props}>
			{children}
		</LinkRouterDom>
	);
}

export default Link;
