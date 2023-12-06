import classNames from 'classnames';
import React, {UIEvent, useEffect, useRef} from 'react';

import {updateTabsShadowClasses} from '../../helpers';
import {Size, Theme} from '../index.types';
import {FilterTabsProps} from './FilterTabs.types';

function FilterTabs({
	tabs = [{link: '', title: '', disabled: true}],
	activeTabColor = 'accent',
	onClick = () => {},
	theme = Theme.WHITE,
	activeTabLink,
	size = Size.MEDIUM,
	containerClassName,
	tabClassName,
	activeTabClassName,
}: FilterTabsProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const wrapperClasses = classNames('ui-kit-filterTabs-boxShadow__wrapper');
	const containerClasses = classNames(
		'ui-kit-filterTabs__container',
		`ui-kit-filterTabs__container--size-${size}`,
		`ui-kit-filterTabs__container--theme-${theme}`,
		containerClassName,
	);
	const defaultTabClasses = classNames(
		'ui-kit-filterTabs__tab',
		`ui-kit-filterTabs__tab--size-${size}`,
		`ui-kit-filterTabs__tab--theme-${theme}`,
		tabClassName,
	);
	const activeTabClasses = classNames(
		'ui-kit-filterTabs__tab--active',
		`ui-kit-filterTabs__tab--active--color-${activeTabColor}`,
		activeTabClassName,
	);

	const defaultTextClasses = classNames('ui-kit-filterTabs__tab__text');
	const activeTabTextClasses = classNames('ui-kit-filterTabs__tab__text--active');

	function handleScrollChange(event: UIEvent) {
		const wrapper = wrapperRef.current as HTMLDivElement | null;

		if (wrapper) {
			const {scrollLeft, scrollWidth, clientWidth} = event.currentTarget;

			updateTabsShadowClasses({
				wrapper,
				scrollLeft,
				scrollWidth,
				clientWidth,
				className: 'ui-kit-filterTabs-boxShadow__wrapper',
				isFlexDirectionReversed: false,
			});
		}
	}

	useEffect(() => {
		const wrapper = wrapperRef.current as HTMLDivElement | null;
		const container = containerRef.current as HTMLDivElement | null;

		if (wrapper && container) {
			const {scrollLeft, scrollWidth, clientWidth} = container;

			updateTabsShadowClasses({
				wrapper,
				scrollLeft,
				scrollWidth,
				clientWidth,
				className: 'ui-kit-filterTabs-boxShadow__wrapper',
				isFlexDirectionReversed: false,
			});
		}
	}, []);

	return (
		<div className={wrapperClasses} ref={wrapperRef}>
			<div className={containerClasses} ref={containerRef} onScroll={handleScrollChange}>
				{tabs.map(({link, title, ...tabProps}) => {
					const tabClasses = [defaultTabClasses, activeTabLink === link && activeTabClasses].join(' ');
					const tabTextClasses = [defaultTextClasses, activeTabLink === link && activeTabTextClasses].join(' ');
					return (
						<button className={tabClasses} key={link} type="button" onClick={onClick} {...tabProps}>
							{typeof title === 'string' ? (
								<span className={tabTextClasses} title={title}>
									{title}
								</span>
							) : (
								title
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default FilterTabs;
