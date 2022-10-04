import classNames from 'classnames';
import React from 'react';

import {ContainerProps} from './Container.types';

function Container({children, className}: ContainerProps) {
	return <div className={classNames('ui-kit-container', className)}>{children}</div>;
}

export default Container;
