/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames/bind';
import React, {useState} from 'react';

import styles from './Collapse.module.css';
import {CollapseProps} from './Collapse.types';

const cx = classnames.bind(styles);

function Collapse({children, header, className = '', styleType = 'not-button-remove'}: CollapseProps) {
	const [active, setActive] = useState(false);
	const onClick = () => {
		setActive(!active);
	};

	return (
		<div className={cx(className, 'collapse')}>
			<div className={cx(`header`, styleType)} role="button" tabIndex={0} onClick={onClick}>
				<div className={cx('header-text')}>{header}</div>
			</div>
			<div className={cx(active ? 'active' : 'not-active', 'content')}>
				<div className={cx(active ? 'content-active' : 'content-not-active')}>
					<div className={cx('content-text')}>{children}</div>
				</div>
			</div>
		</div>
	);
}

export default Collapse;
