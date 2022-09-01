import classNames from 'classnames/bind';
import React from 'react';

import styles from './Paper.module.css';
import {PaperProps} from './Paper.types';

const cx = classNames.bind(styles);

function Paper({children, className}: PaperProps) {
	return <div className={cx(styles.paper, className)}>{children}</div>;
}

export default Paper;
