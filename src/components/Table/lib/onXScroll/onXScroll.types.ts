import {RefObject} from 'react';

import {UIColumns} from '../../ui/Table/Table.types';

export declare interface IOnXScroll {
	columns: UIColumns;
	wrapperRef: RefObject<HTMLDivElement>;
	headTrRef: RefObject<HTMLTableRowElement>;
	tbodyRef: RefObject<HTMLTableSectionElement>;
	containerRef: RefObject<HTMLDivElement>;
}
