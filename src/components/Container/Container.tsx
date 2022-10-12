import classNames from 'classnames';
import React from 'react';

import {ContainerProps} from './Container.types';

function Container({children, className, theme = 'white', radius = 'default'}: ContainerProps) {
	return <div className={classNames('ui-kit-container', theme, radius, className)}>{children}</div>;
}

export default Container;
