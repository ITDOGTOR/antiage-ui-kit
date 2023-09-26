import classNames from 'classnames';
import React, {UIEvent, useEffect, useRef} from 'react';

import {updateTabsShadowClasses} from '../../helpers';
import {getIsFlexDirectionReversed} from './lib';
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
	const wrapperRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const wrapperClasses = classNames(
		'ui-kit-navTabs-boxShadow__wrapper',
		`ui-kit-navTabs-boxShadow__wrapper--rotate-${tabsPosition}`,
	);

	const containerClasses = classNames('ui-kit-navTabs__container', containerClassName);

	function handleScrollChange(event: UIEvent) {
		const wrapper = wrapperRef.current as HTMLDivElement | null;

		if (wrapper) {
			const {scrollLeft, scrollWidth, clientWidth} = event.currentTarget;
			const {isFlexDirectionReversed} = getIsFlexDirectionReversed({wrapper});

			updateTabsShadowClasses({
				wrapper,
				scrollLeft,
				scrollWidth,
				clientWidth,
				className: 'ui-kit-navTabs-boxShadow__wrapper',
				isFlexDirectionReversed,
			});
		}
	}

	useEffect(() => {
		const wrapper = wrapperRef.current as HTMLDivElement | null;
		const container = containerRef.current as HTMLDivElement | null;

		if (wrapper && container) {
			const {scrollLeft, scrollWidth, clientWidth} = container;
			const {isFlexDirectionReversed} = getIsFlexDirectionReversed({wrapper});

			updateTabsShadowClasses({
				wrapper,
				scrollLeft,
				scrollWidth,
				clientWidth,
				className: 'ui-kit-navTabs-boxShadow__wrapper',
				isFlexDirectionReversed,
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
								isActiveButton={link === activeTabLink}
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
								isActiveLink={link === activeTabLink}
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
