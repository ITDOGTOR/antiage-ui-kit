import classNames from 'classnames';
import React from 'react';
import {NavLink} from 'react-router-dom';

import {NavTabLinkProps} from './NavTabLink.types';

function NavTabLink({link = '', disabled, tabClassName, theme, title, ...tabProps}: NavTabLinkProps) {
	const tabTextClasses = classNames('ui-kit-navTabs__tab__text');
	const singleTabClasses = classNames('ui-kit-navTabs__tab', `ui-kit-navTabs__tab--theme-${theme}`, tabClassName);
	const disabledTabClasses = classNames(disabled && `ui-kit-navTabs__tab--disabledLink`);

	return (
		<NavLink
			className={({isActive}) => {
				const activeTabClasses = classNames(isActive && `ui-kit-navTabs__tab--active--theme-${theme}`);
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
			{typeof title === 'string' ? (
				<span className={tabTextClasses} title={title}>
					{title}
				</span>
			) : (
				title
			)}
		</NavLink>
	);
}

export default NavTabLink;
