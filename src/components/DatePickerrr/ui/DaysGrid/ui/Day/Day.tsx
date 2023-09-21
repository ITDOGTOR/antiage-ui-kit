import './Day.css';

import classNames from 'classnames';
import React from 'react';

import {DateAttributes} from '../../../../index.types';
import {DayProps} from './Day.types';

export function Day({text, type, onClick, ...props}: DayProps) {
	const classes = classNames('ui-kit-days-grid__day', `ui-kit-days-grid__day--${type}`);

	const onChangeDay = () => {
		if (onClick) {
			onClick(DateAttributes.DAY, Number(text));
		}
	};

	return (
		<button className={classes} type="button" onClick={onChangeDay} {...props}>
			{text}
		</button>
	);
}
