import classNames from 'classnames';
import React from 'react';

import {StatusProps} from './Status.types';

function Status({text, color = 'accent', size = 'medium', containerClassName, textClassName}: StatusProps) {
	const containerClasses = classNames(
		'ui-kit-status',
		`ui-kit-status__size-${size}`,
		`ui-kit-status__color-${color}`,
		containerClassName,
	);

	const textClasses = classNames('ui-kit-status-text', `ui-kit-status-text__size-${size}`, textClassName);

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
