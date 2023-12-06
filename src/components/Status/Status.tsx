import classNames from 'classnames';
import React from 'react';

import {Size, Theme} from '../index.types';
import {StatusProps} from './Status.types';

function Status({
	text,
	color = 'accent',
	size = Size.MEDIUM,
	containerClassName,
	textClassName,
	theme = Theme.WHITE,
}: StatusProps) {
	const containerClasses = classNames(
		'ui-kit-status',
		`ui-kit-status__size-${size}`,
		`ui-kit-status__color-${color}__theme-${theme}`,
		containerClassName,
	);

	const textClasses = classNames(
		'ui-kit-status-text',
		`ui-kit-status-text__size-${size}`,
		`ui-kit-status-text__color-${color}`,
		textClassName,
	);

	const iconClasses = classNames(
		'ui-kit-status-icon',
		`ui-kit-status-icon__size-${size}`,
		`ui-kit-status-icon__color-${color}`,
	);

	return (
		<div className={containerClasses}>
			<div className={iconClasses} />
			<span className={textClasses}>{text}</span>
		</div>
	);
}

export default Status;
