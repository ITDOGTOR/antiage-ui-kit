import {useLayoutEffect} from 'react';

import {setStylesToPinedColumn} from '../../lib';
import {IUsePinnedColumns} from './types';

export const usePinnedColumns = ({columns, tbodyRef, trheadRef, containerRef, children}: IUsePinnedColumns) => {
	useLayoutEffect(() => {
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
		const pinnedFunction = () => {
			if (pinnedColumn.left.length || pinnedColumn.right.length) {
				if (tbodyRef.current) {
					Array.from(tbodyRef.current.children).forEach((trch) => {
						setStylesToPinedColumn({parent: trch.children, pinnedColumn});
					});
				}
				if (trheadRef.current) {
					setStylesToPinedColumn({parent: trheadRef.current.children, pinnedColumn});
				}
			}
		};
		const resizeObserver = new ResizeObserver(() => {
			pinnedFunction();
		});
		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}
		return () => {
			resizeObserver.disconnect();
		};
	}, [children]);
};
