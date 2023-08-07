import classNames from 'classnames';
import React from 'react';

import {NavTabButtonProps} from './NavTabButton.types';

function NavTabButton({
	onClick = () => {},
	tabClassName,
	isActive,
	theme,
	disabled,
	title,
	...tabProps
}: NavTabButtonProps) {
	const tabTextClasses = classNames('ui-kit-navTabs-tab-text');
	const singleTabClasses = classNames('ui-kit-navTabs-tab', `ui-kit-navTabs-tab__theme-${theme}`, tabClassName);
	const activeTabClasses = classNames(isActive && `ui-kit-navTabs-tab__active__theme-${theme}`);

	return (
		<button
			className={[singleTabClasses, activeTabClasses].join(' ')}
			disabled={disabled}
			type="button"
			onClick={onClick}
			{...tabProps}
		>
			<span className={tabTextClasses} title={title}>
				{title}
			</span>
		</button>
	);
}

export default NavTabButton;
