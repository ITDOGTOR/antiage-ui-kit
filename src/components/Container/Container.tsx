import classNames from 'classnames';
import React from 'react';

import {ContainerProps} from './Container.types';

function Container({children, className, theme = 'white', resetStyle = false, innerRef, ...props}: ContainerProps) {
	const classes = classNames('ui-kit-container', `ui-kit-container-${theme}`, className);

	return (
		<div {...props} className={resetStyle ? classNames(className) : classes} ref={innerRef}>
			{children}
		</div>
	);
}

export default Container;
