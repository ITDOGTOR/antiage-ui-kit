import classNames from 'classnames';
import React from 'react';

import {UITitleWithSorting} from './types';

function TitleWithSorting({onClick, upActive, downActive, title, sortingKey}: UITitleWithSorting) {
	const titleClasses = classNames('ui-kit-table-title', {'ui-kit-table-title_hover': sortingKey});
	const iconsClasses = classNames('ui-kit-table-title-icons');
	const triangleUpClasses = classNames('ui-kit-table-title-icons-triangle-up', {
		'ui-kit-table-title-icons-triangle-up_active': upActive,
	});
	const triangleDownClasses = classNames('ui-kit-table-title-icons-triangle-down', {
		'ui-kit-table-title-icons-triangle-down_active': downActive,
	});
	return (
		<th>
			<button className={titleClasses} type="button" onClick={onClick}>
				{title}
				{sortingKey ? (
					<div className={iconsClasses}>
						<div className={triangleUpClasses} />
						<div className={triangleDownClasses} />
					</div>
				) : null}
			</button>
		</th>
	);
}

export default TitleWithSorting;
