import classNames from 'classnames';
import React, {UIEvent, useEffect, useRef, useState} from 'react';

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
	const containerRef = useRef(null);

	const [scrollingLeft, setScrollingLeft] = useState(false);
	const [scrollingRight, setScrollingRight] = useState(false);

	const wrapperClasses = classNames(
		'ui-kit-navTabs-boxShadow__wrapper',
		scrollingLeft && 'ui-kit-navTabs-boxShadow__wrapper-leftShadowVisible',
		scrollingRight && 'ui-kit-navTabs-boxShadow__wrapper-rightShadowVisible',
	);
	const containerClasses = classNames(
		'ui-kit-navTabs-container',
		`ui-kit-navTabs-container__rotate-${tabsPosition}`,
		containerClassName,
	);

	function handleScrollChange(event: UIEvent) {
		const container = event.currentTarget;

		if (container.scrollLeft > 0 !== scrollingLeft) {
			setScrollingLeft(container.scrollLeft > 0);
		}
		if (container.scrollLeft < container.scrollWidth - container.clientWidth !== scrollingRight) {
			setScrollingRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
		}
	}

	useEffect(() => {
		const container = containerRef.current || {
			scrollLeft: 0,
			scrollWidth: 0,
			clientWidth: 100,
		};

		setScrollingLeft(container.scrollLeft > 0);
		setScrollingRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
	}, []);

	return (
		<div className={wrapperClasses}>
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
