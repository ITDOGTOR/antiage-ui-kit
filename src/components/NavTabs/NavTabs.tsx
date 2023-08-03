import classNames from 'classnames';
import React from 'react';

import {NavTabsProps} from './NavTabs.types';

function NavTabs({
	tabs = [{key: '', title: '', disabled: true}],
	activeTabKey,
	onClick = () => {},
	theme,
	tabsPosition = 'top',
	containerClassName,
	tabClassName,
}: NavTabsProps) {
	const containerClasses = classNames(
		'ui-kit-navTabs-container',
		`ui-kit-navTabs-container__rotate-${tabsPosition}`,
		containerClassName,
	);
	const singleTabClasses = classNames('ui-kit-navTabs-tab', `ui-kit-navTabs-tab__theme-${theme}`, tabClassName);
	const tabTextClasses = classNames('ui-kit-navTabs-tab-text');

	return (
		<div className={containerClasses}>
			{tabs.map(({key, title, disabled}) => {
				const activeTabClasses = classNames(key === activeTabKey && `ui-kit-navTabs-tab__active__theme-${theme}`);
				return (
					<button
						className={[singleTabClasses, activeTabClasses].join(' ')}
						disabled={disabled}
						key={key}
						type="button"
						onClick={() => onClick(key)}
					>
						<span className={tabTextClasses} title={title}>
							{title}
						</span>
					</button>
				);
			})}
		</div>
	);
}

export default NavTabs;
