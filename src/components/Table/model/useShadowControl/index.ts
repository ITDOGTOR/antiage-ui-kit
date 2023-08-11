import {SyntheticEvent, useLayoutEffect} from 'react';

import {IUseShadowControl} from './types';

export const useShadowControl = ({
	columns,
	wrapperRef,
	trheadRef,
	tbodyRef,
	containerRef,
	children,
}: IUseShadowControl) => {
	useLayoutEffect(() => {
		const elementDefaultValue = {
			classList: {
				add: () => {},
				contains: () => {},
				remove: () => {},
			},
		};
		const pinnedColumn = columns.reduce(
			(acc, cur, i) => {
				if (cur.fixed === 'left') {
					acc.left.push(i);
				}
				if (cur.fixed === 'right') {
					acc.right.push(i);
				}
				return acc;
			},
			{left: [] as number[], right: [] as number[]},
		);
		const onXScroll = (e: SyntheticEvent | Event | {target: {scrollLeft: number}}) => {
			const element = e.target as HTMLElement;
			const scrollValue = element.scrollLeft;

			if (wrapperRef.current) {
				wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow');
			}

			if (pinnedColumn.left.length || pinnedColumn.right.length) {
				if (trheadRef.current && tbodyRef.current && containerRef.current) {
					const lastHeaderChildLeft = trheadRef.current.children[pinnedColumn.left.length - 1] || elementDefaultValue;
					lastHeaderChildLeft.classList.add('ui-kit-table-leftBody');
					const firstHeaderChildRight = trheadRef.current.children[pinnedColumn.right[0]] || elementDefaultValue;
					firstHeaderChildRight.classList.add('ui-kit-table-rightBody');

					const bodyLastElements = {left: [] as Element[], right: [] as Element[]};

					Array.from(tbodyRef.current.children).forEach((trch) => {
						const child = trch.children;
						const leftElement = child[pinnedColumn.left[pinnedColumn.left.length - 1]] || elementDefaultValue;
						leftElement.classList.add('ui-kit-table-leftBody');
						bodyLastElements.left.push(leftElement);
						const rightElement = child[pinnedColumn.right[0]] || elementDefaultValue;
						rightElement.classList.add('ui-kit-table-rightBody');
						bodyLastElements.right.push(rightElement);
					});
					if (
						scrollValue > 0 &&
						(!lastHeaderChildLeft.classList.contains('ui-kit-table-shadow') ||
							!lastHeaderChildLeft.classList.contains('ui-kit-table-shadow_right'))
					) {
						lastHeaderChildLeft.classList.add('ui-kit-table-shadow');
						firstHeaderChildRight.classList.add('ui-kit-table-shadow_right');
						bodyLastElements.left.forEach((el) => {
							el.classList.add('ui-kit-table-shadow');
						});
						bodyLastElements.right.forEach((el) => {
							el.classList.add('ui-kit-table-shadow_right');
						});
					}
					if (scrollValue === 0) {
						lastHeaderChildLeft.classList.remove('ui-kit-table-shadow');

						bodyLastElements.left.forEach((el) => {
							el.classList.remove('ui-kit-table-shadow');
						});
					}
					if (scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth) {
						firstHeaderChildRight.classList.remove('ui-kit-table-shadow_right');
						bodyLastElements.right.forEach((el) => {
							el.classList.remove('ui-kit-table-shadow_right');
						});
					}
					if (scrollValue === 0 && bodyLastElements.right.length) {
						firstHeaderChildRight.classList.add('ui-kit-table-shadow_right');
						bodyLastElements.right.forEach((el) => {
							el.classList.add('ui-kit-table-shadow_right');
						});
					}
				}
			}
			if (wrapperRef.current && containerRef.current) {
				if (!pinnedColumn.left.length && !pinnedColumn.right.length) {
					if (scrollValue === 0) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_left');
					}
					if (
						scrollValue > 0 &&
						!wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_left') &&
						!wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_right')
					) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_left');
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
					}
					if (scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth) {
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_right');
					}
				}
				if (pinnedColumn.left.length && !pinnedColumn.right.length) {
					if (scrollValue === 0) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
					}
					if (scrollValue > 0 && !wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_right')) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
					}
					if (scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth) {
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_right');
					}
				}
				if (pinnedColumn.right.length && !pinnedColumn.left.length) {
					if (scrollValue === 0) {
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_left');
					}
					if (scrollValue > 0 && !wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_left')) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_left');
					}
				}
			}
		};
		if (containerRef.current) {
			containerRef.current.addEventListener('scroll', onXScroll);
			if (containerRef.current.scrollWidth - containerRef.current.offsetWidth > 0) {
				onXScroll({
					target: {
						scrollLeft: 0,
					},
				});
			}
		}
		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('scroll', onXScroll);
			}
		};
	}, [children]);
};
