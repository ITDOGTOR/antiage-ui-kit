import classNames from 'classnames';
import React from 'react';

import {StatusProps} from './Status.types';

function Status({
	text,
	color = 'accent',
	size = 'medium',
	containerClassName,
	textClassName,
	theme = 'white',
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