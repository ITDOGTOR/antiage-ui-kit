import classNames from 'classnames';
import React from 'react';

import {ContainerProps} from './Container.types';

function Container({children, className, theme = 'white', ...props}: ContainerProps) {
	const classes = classNames('ui-kit-container', `ui-kit-container-${theme}`, className);

	return (
		<div {...props} className={classes}>
			{children}
		</div>
	);
}

export default Container;
