import {useLayoutEffect} from 'react';

import {getPinnedColumnIndexes, setStylesToPinedColumn} from '../../lib';
import {IUsePinnedColumns} from './types';

export const usePinnedColumns = ({columns, tbodyRef, headTrRef, containerRef, children}: IUsePinnedColumns) => {
	useLayoutEffect(() => {
		const pinnedColumn = getPinnedColumnIndexes(columns);
		const pinnedFunction = () => {
			if (pinnedColumn.left.length || pinnedColumn.right.length) {
				if (tbodyRef.current) {
					Array.from(tbodyRef.current.children).forEach((tr) => {
						setStylesToPinedColumn({parent: tr.children, pinnedColumn});
					});
				}
				if (headTrRef.current) {
					setStylesToPinedColumn({parent: headTrRef.current.children, pinnedColumn});
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
