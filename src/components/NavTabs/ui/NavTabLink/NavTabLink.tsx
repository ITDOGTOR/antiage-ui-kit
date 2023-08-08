import classNames from 'classnames';
import React from 'react';
import {NavLink} from 'react-router-dom';

import {NavTabLinkProps} from './NavTabLink.types';

function NavTabLink({link = '', disabled, tabClassName, theme, title, ...tabProps}: NavTabLinkProps) {
	const tabTextClasses = classNames('ui-kit-navTabs-tab-text');

	const singleTabClasses = classNames('ui-kit-navTabs-tab', `ui-kit-navTabs-tab__theme-${theme}`, tabClassName);
	const disabledTabClasses = classNames(disabled && `ui-kit-navTabs-tab__disabledLink`);

	return (
		<NavLink
			className={({isActive}) => {
				const activeTabClasses = classNames(isActive && `ui-kit-navTabs-tab__active__theme-${theme}`);
				return [singleTabClasses, activeTabClasses, disabledTabClasses].join(' ');
			}}
			to={link}
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
		</NavLink>
	);
}

export default NavTabLink;
