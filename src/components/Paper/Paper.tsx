import classNames from 'classnames/bind';
import React from 'react';

import style from './Paper.module.css';
import {PaperProps} from './Paper.types';

const cx = classNames.bind(style);

function Paper({children, className = ''}: PaperProps) {
	return <div className={cx('paper', className)}>{children && children}</div>;
}

export default Paper;
