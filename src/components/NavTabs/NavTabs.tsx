import classNames from 'classnames';
import React, {UIEvent, useEffect, useRef} from 'react';

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
	const wrapperRef = useRef(null);
	const containerRef = useRef(null);

	const containerClasses = classNames(
		'ui-kit-navTabs-container',
		`ui-kit-navTabs-container__rotate-${tabsPosition}`,
		containerClassName,
	);

	function handleScrollChange(event: UIEvent) {
		const wrapper = wrapperRef.current as HTMLElement | null;

		if (wrapper) {
			if (event.currentTarget.scrollLeft > 0) {
				wrapper.classList.add('ui-kit-navTabs-boxShadow__wrapper-leftShadowVisible');
			} else {
				wrapper.classList.remove('ui-kit-navTabs-boxShadow__wrapper-leftShadowVisible');
			}

			if (event.currentTarget.scrollLeft < event.currentTarget.scrollWidth - event.currentTarget.clientWidth) {
				wrapper.classList.add('ui-kit-navTabs-boxShadow__wrapper-rightShadowVisible');
			} else {
				wrapper.classList.remove('ui-kit-navTabs-boxShadow__wrapper-rightShadowVisible');
			}
		}
	}

	useEffect(() => {
		const wrapper = wrapperRef.current as HTMLElement | null;
		const container = containerRef.current as HTMLElement | null;

		if (wrapper && container) {
			if (container.scrollLeft > 0) {
				wrapper.classList.add('ui-kit-navTabs-boxShadow__wrapper-leftShadowVisible');
			}

			if (container.scrollLeft < container.scrollWidth - container.clientWidth) {
				wrapper.classList.add('ui-kit-navTabs-boxShadow__wrapper-rightShadowVisible');
			}
		}
	}, []);

	return (
		<div className={classNames('ui-kit-navTabs-boxShadow__wrapper')} ref={wrapperRef}>
			<div className={containerClasses} ref={containerRef} onScroll={handleScrollChange}>
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
						return (
							<NavTabLink
								disabled={disabled}
								key={key}
								link={key}
								tabClassName={tabClassName}
								theme={theme}
								title={title}
								{...tabProps}
							/>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
}

export default NavTabs;
