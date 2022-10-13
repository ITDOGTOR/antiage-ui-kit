import classNames from 'classnames';
import React from 'react';

import {ContainerProps} from './Container.types';

function Container({children, className, theme = 'white', radius = 'default'}: ContainerProps) {
	const classes = classNames('ui-kit-container', `ui-kit-container-${theme}`, `ui-kit-container-${radius}`, className);

	return <div className={classes}>{children}</div>;
}

export default Container;
