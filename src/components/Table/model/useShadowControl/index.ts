import {SyntheticEvent, useLayoutEffect} from 'react';

import {getPinnedColumnIndexes} from '../../lib';
import {IUseShadowControl} from './types';

export const useShadowControl = ({
	columns,
	wrapperRef,
	headTrRef,
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
		const pinnedColumn = getPinnedColumnIndexes(columns);
		const onXScroll = (e: SyntheticEvent | Event | {target: {scrollLeft: number}}) => {
			const element = e.target as HTMLElement;
			const scrollValue = element.scrollLeft;

			if (wrapperRef.current) {
				wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow');
			}

			const bothColumnIsPenned = pinnedColumn.left.length || pinnedColumn.right.length;
			const allRefsAreReady = headTrRef.current && tbodyRef.current && containerRef.current;

			if (bothColumnIsPenned) {
				if (allRefsAreReady) {
					const lastHeaderChildLeft = headTrRef.current.children[pinnedColumn.left.length - 1] || elementDefaultValue;
					lastHeaderChildLeft.classList.add('ui-kit-table-leftBody');

					const firstHeaderChildRight = headTrRef.current.children[pinnedColumn.right[0]] || elementDefaultValue;
					firstHeaderChildRight.classList.add('ui-kit-table-rightBody');

					const bodyLastElements = {left: [] as Element[], right: [] as Element[]};

					Array.from(tbodyRef.current.children).forEach((tr) => {
						const child = tr.children;

						const leftElement = child[pinnedColumn.left[pinnedColumn.left.length - 1]] || elementDefaultValue;
						leftElement.classList.add('ui-kit-table-leftBody');
						bodyLastElements.left.push(leftElement);

						const rightElement = child[pinnedColumn.right[0]] || elementDefaultValue;
						rightElement.classList.add('ui-kit-table-rightBody');
						bodyLastElements.right.push(rightElement);
					});

					const isScrolling =
						scrollValue > 0 &&
						(!lastHeaderChildLeft.classList.contains('ui-kit-table-shadow') ||
							!lastHeaderChildLeft.classList.contains('ui-kit-table-shadow_right'));

					if (isScrolling) {
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

						const hasRightPinnedBlock = bodyLastElements.right.length;

						if (hasRightPinnedBlock) {
							firstHeaderChildRight.classList.add('ui-kit-table-shadow_right');
							bodyLastElements.right.forEach((el) => {
								el.classList.add('ui-kit-table-shadow_right');
							});
						}
					}

					const scrollInRightPosition =
						scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth;

					if (scrollInRightPosition) {
						firstHeaderChildRight.classList.remove('ui-kit-table-shadow_right');
						bodyLastElements.right.forEach((el) => {
							el.classList.remove('ui-kit-table-shadow_right');
						});
					}
				}
			}
			const refsAreReady = wrapperRef.current && containerRef.current;
			if (refsAreReady) {
				const noOneBlockIsPinned = !pinnedColumn.left.length && !pinnedColumn.right.length;
				if (noOneBlockIsPinned) {
					if (scrollValue === 0) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_left');
					}

					const isScrolling =
						scrollValue > 0 &&
						!wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_left') &&
						!wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_right');

					if (isScrolling) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_left');
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
					}

					const scrollInRightPosition =
						scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth;

					if (scrollInRightPosition) {
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_right');
					}
				}
				const pinnedOnlyLeftColumns = pinnedColumn.left.length && !pinnedColumn.right.length;
				if (pinnedOnlyLeftColumns) {
					if (scrollValue === 0) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
					}

					const isScrolling =
						scrollValue > 0 && !wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_right');
					if (isScrolling) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_right');
					}

					const scrollInRightPosition =
						scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth;
					if (scrollInRightPosition) {
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_right');
					}
				}

				const pinnedOnlyRightColumns = pinnedColumn.right.length && !pinnedColumn.left.length;
				if (pinnedOnlyRightColumns) {
					if (scrollValue === 0) {
						wrapperRef.current.classList.remove('ui-kit-table-wrapper_shadow_active_left');
					}

					const isScrolling =
						scrollValue > 0 && !wrapperRef.current.classList.contains('ui-kit-table-wrapper_shadow_active_left');
					if (isScrolling) {
						wrapperRef.current.classList.add('ui-kit-table-wrapper_shadow_active_left');
					}
				}
			}
		};
		if (containerRef.current) {
			containerRef.current.addEventListener('scroll', onXScroll);

			const hasScroll = containerRef.current.scrollWidth - containerRef.current.offsetWidth > 0;
			if (hasScroll) {
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
