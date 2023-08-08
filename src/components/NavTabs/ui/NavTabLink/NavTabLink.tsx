import classNames from 'classnames';
import React from 'react';

import {NavTabLinkProps} from './NavTabLink.types';

function NavTabLink({link, disabled, tabClassName, isActive, theme, title, ...tabProps}: NavTabLinkProps) {
	const tabTextClasses = classNames('ui-kit-navTabs-tab-text');

	const singleTabClasses = classNames('ui-kit-navTabs-tab', `ui-kit-navTabs-tab__theme-${theme}`, tabClassName);
	const activeTabClasses = classNames(isActive && `ui-kit-navTabs-tab__active__theme-${theme}`);
	const disabledTabClasses = classNames(disabled && `ui-kit-navTabs-tab__disabledLink`);
	return (
		<a
			className={[singleTabClasses, activeTabClasses, disabledTabClasses].join(' ')}
			href={link}
			onClick={(e) => {
				if (disabled) {
					e.preventDefault();
				}
			}}
			{...tabProps}
		>
			<span className={tabTextClasses} title={title}>
				{title}
			</span>
		</a>
	);
}

export default NavTabLink;
