import classNames from 'classnames';
import React from 'react';

import {NavTabsProps} from './NavTabs.types';
import {NavTabButton, NavTabLink} from './ui';

function NavTabs({
	tabs = [{key: '', title: '', disabled: true}],
	activeTabKey,
	onClick = () => {},
	theme,
	tabsType = 'button',
	tabsPosition = 'top',
	containerClassName,
	tabClassName,
}: NavTabsProps) {
	const containerClasses = classNames(
		'ui-kit-navTabs-container',
		`ui-kit-navTabs-container__rotate-${tabsPosition}`,
		containerClassName,
	);

	return (
		<div className={containerClasses}>
			{tabs.map(({key, title, disabled, ...tabProps}) => {
				if (tabsType === 'button') {
					return (
						<NavTabButton
							disabled={disabled}
							isActive={key === activeTabKey}
							key={key}
							tabClassName={tabClassName}
							theme={theme}
							title={title}
							onClick={() => onClick(key)}
							{...tabProps}
						/>
					);
				}
				if (tabsType === 'link') {
					return <NavTabLink {...tabProps} />;
				}
				return null;
			})}
		</div>
	);
}

export default NavTabs;
