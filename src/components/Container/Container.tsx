import classNames from 'classnames/bind';
import React from 'react';

import styles from './Container.module.css';
import {ContainerProps} from './Container.types';

const cx = classNames.bind(styles);

function Container({children, className}: ContainerProps) {
	return <div className={cx(styles.container, className)}>{children}</div>;
}

export default Container;
