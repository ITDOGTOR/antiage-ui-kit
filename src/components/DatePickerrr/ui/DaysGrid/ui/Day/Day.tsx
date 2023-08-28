import './Day.css';

import classNames from 'classnames';
import React from 'react';

import {DateAttributes} from '../../../index.types';
import {DayProps} from './Day.types';

export function Day({text, type, onClick}: DayProps) {
	const classes = classNames('ui-kit-days-grid__day', `ui-kit-days-grid__day--${type}`);

	const onClickHandle = () => {
		if (onClick) {
			onClick(DateAttributes.DAY, Number(text));
		}
	};

	return (
		<button className={classes} type="button" onClick={onClickHandle}>
			{text}
		</button>
	);
}
