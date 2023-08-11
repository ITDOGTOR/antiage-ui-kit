import classNames from 'classnames';
import React, {UIEvent, useEffect, useRef} from 'react';

import {updateShadowClasses} from './lib';
import {NavTabsProps} from './NavTabs.types';
import {NavTabButton, NavTabLink} from './ui';

function NavTabs({
	tabs = [{link: '', title: '', disabled: true}],
	activeTabLink,
	onClick = () => {},
	theme,
	tabsType = 'button',
	tabsPosition = 'top',
	containerClassName,
	tabClassName,
}: NavTabsProps) {
	const wrapperRef = useRef(null);
	const containerRef = useRef(null);

	const wrapperClasses = classNames(
		'ui-kit-navTabs-boxShadow__wrapper',
		`ui-kit-navTabs-boxShadow__wrapper--rotate-${tabsPosition}`,
	);

	const containerClasses = classNames('ui-kit-navTabs__container', containerClassName);

	function handleScrollChange(event: UIEvent) {
		const wrapper = wrapperRef.current as HTMLElement | null;

		if (wrapper) {
			const {scrollLeft, scrollWidth, clientWidth} = event.currentTarget;

			updateShadowClasses({
				wrapper,
				scrollLeft,
				scrollWidth,
				clientWidth,
			});
		}
	}

	useEffect(() => {
		const wrapper = wrapperRef.current as HTMLElement | null;
		const container = containerRef.current as HTMLElement | null;

		if (wrapper && container) {
			const {scrollLeft, scrollWidth, clientWidth} = container;

			updateShadowClasses({
				wrapper,
				scrollLeft,
				scrollWidth,
				clientWidth,
			});
		}
	}, [tabsPosition]);

	return (
		<div className={wrapperClasses} ref={wrapperRef}>
			<div className={containerClasses} ref={containerRef} onScroll={handleScrollChange}>
				{tabs.map(({link, title, disabled, ...tabProps}) => {
					if (tabsType === 'button') {
						return (
							<NavTabButton
								disabled={disabled}
								isActive={link === activeTabLink}
								key={link}
								tabClassName={tabClassName}
								theme={theme}
								title={title}
								onClick={() => onClick(link)}
								{...tabProps}
							/>
						);
					}
					if (tabsType === 'link') {
						return (
							<NavTabLink
								disabled={disabled}
								key={link}
								link={link}
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
