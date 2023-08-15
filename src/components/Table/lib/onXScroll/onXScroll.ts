import {SyntheticEvent} from 'react';

import {getPinnedColumnIndexes} from '../getPinnedColumnIndexes/getPinnedColumnIndexes';
import {IOnXScroll} from './onXScroll.types';

export const onXScroll = (
	e: SyntheticEvent | Event | {target: {scrollLeft: number}},
	{columns, wrapperRef, headTrRef, tbodyRef, containerRef}: IOnXScroll,
) => {
	const elementDefaultValue = {
		classList: {
			add: () => {},
			contains: () => {},
			remove: () => {},
		},
	};
	const pinnedColumn = getPinnedColumnIndexes(columns);
	const element = e.target as HTMLElement;
	const scrollValue = element.scrollLeft;

	if (wrapperRef.current) {
		wrapperRef.current.classList.add('ui-kit-table__wrapper_shadow');
	}

	const bothColumnIsPenned = pinnedColumn.left.length || pinnedColumn.right.length;
	const allRefsAreReady = headTrRef.current && tbodyRef.current && containerRef.current;

	if (bothColumnIsPenned) {
		if (allRefsAreReady) {
			const lastHeaderChildLeft = headTrRef.current.children[pinnedColumn.left.length - 1] || elementDefaultValue;
			lastHeaderChildLeft.classList.add('ui-kit-table__leftBody');

			const firstHeaderChildRight = headTrRef.current.children[pinnedColumn.right[0]] || elementDefaultValue;
			firstHeaderChildRight.classList.add('ui-kit-table__rightBody');

			const bodyLastElements = {left: [] as Element[], right: [] as Element[]};

			Array.from(tbodyRef.current.children).forEach((tr) => {
				const child = tr.children;

				const leftElement = child[pinnedColumn.left[pinnedColumn.left.length - 1]] || elementDefaultValue;
				leftElement.classList.add('ui-kit-table__leftBody');
				bodyLastElements.left.push(leftElement);

				const rightElement = child[pinnedColumn.right[0]] || elementDefaultValue;
				rightElement.classList.add('ui-kit-table__rightBody');
				bodyLastElements.right.push(rightElement);
			});

			const isScrolling =
				scrollValue > 0 &&
				(!lastHeaderChildLeft.classList.contains('ui-kit-table__shadow') ||
					!lastHeaderChildLeft.classList.contains('ui-kit-table__shadow--right'));

			if (isScrolling) {
				lastHeaderChildLeft.classList.add('ui-kit-table__shadow');
				firstHeaderChildRight.classList.add('ui-kit-table__shadow--right');
				bodyLastElements.left.forEach((el) => {
					el.classList.add('ui-kit-table__shadow');
				});
				bodyLastElements.right.forEach((el) => {
					el.classList.add('ui-kit-table__shadow--right');
				});
			}

			if (scrollValue === 0) {
				lastHeaderChildLeft.classList.remove('ui-kit-table__shadow');

				bodyLastElements.left.forEach((el) => {
					el.classList.remove('ui-kit-table__shadow');
				});

				const hasRightPinnedBlock = bodyLastElements.right.length;

				if (hasRightPinnedBlock) {
					firstHeaderChildRight.classList.add('ui-kit-table__shadow--right');
					bodyLastElements.right.forEach((el) => {
						el.classList.add('ui-kit-table__shadow--right');
					});
				}
			}

			const scrollInRightPosition = scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth;

			if (scrollInRightPosition) {
				firstHeaderChildRight.classList.remove('ui-kit-table__shadow--right');
				bodyLastElements.right.forEach((el) => {
					el.classList.remove('ui-kit-table__shadow--right');
				});
			}
		}
	}
	const refsAreReady = wrapperRef.current && containerRef.current;
	if (refsAreReady) {
		const noOneBlockIsPinned = !pinnedColumn.left.length && !pinnedColumn.right.length;
		if (noOneBlockIsPinned) {
			if (scrollValue === 0) {
				wrapperRef.current.classList.add('ui-kit-table__wrapper_shadow--active-right');
				wrapperRef.current.classList.remove('ui-kit-table_wrapper_shadow--active-left');
			}

			const isScrolling =
				scrollValue > 0 &&
				!wrapperRef.current.classList.contains('ui-kit-table_wrapper_shadow--active-left') &&
				!wrapperRef.current.classList.contains('ui-kit-table__wrapper_shadow--active-right');

			if (isScrolling) {
				wrapperRef.current.classList.add('ui-kit-table_wrapper_shadow--active-left');
				wrapperRef.current.classList.add('ui-kit-table__wrapper_shadow--active-right');
			}

			const scrollInRightPosition = scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth;

			if (scrollInRightPosition) {
				wrapperRef.current.classList.remove('ui-kit-table__wrapper_shadow--active-right');
			}
		}
		const pinnedOnlyLeftColumns = pinnedColumn.left.length && !pinnedColumn.right.length;
		if (pinnedOnlyLeftColumns) {
			if (scrollValue === 0) {
				wrapperRef.current.classList.add('ui-kit-table__wrapper_shadow--active-right');
			}

			const isScrolling =
				scrollValue > 0 && !wrapperRef.current.classList.contains('ui-kit-table__wrapper_shadow--active-right');
			if (isScrolling) {
				wrapperRef.current.classList.add('ui-kit-table__wrapper_shadow--active-right');
			}

			const scrollInRightPosition = scrollValue === containerRef.current.scrollWidth - containerRef.current.offsetWidth;
			if (scrollInRightPosition) {
				wrapperRef.current.classList.remove('ui-kit-table__wrapper_shadow--active-right');
			}
		}

		const pinnedOnlyRightColumns = pinnedColumn.right.length && !pinnedColumn.left.length;
		if (pinnedOnlyRightColumns) {
			if (scrollValue === 0) {
				wrapperRef.current.classList.remove('ui-kit-table_wrapper_shadow--active-left');
			}

			const isScrolling =
				scrollValue > 0 && !wrapperRef.current.classList.contains('ui-kit-table_wrapper_shadow--active-left');
			if (isScrolling) {
				wrapperRef.current.classList.add('ui-kit-table_wrapper_shadow--active-left');
			}
		}
	}
};
