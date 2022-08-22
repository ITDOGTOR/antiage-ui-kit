import classNames from 'classnames/bind';
import React from 'react';

import style from './Paper.module.css';
import {PaperTypes} from './Paper.types';

const cx = classNames.bind(style);

function Paper({children}: PaperTypes) {
	return <div className={cx('paper')}>{children}</div>;
}

export default Paper;
