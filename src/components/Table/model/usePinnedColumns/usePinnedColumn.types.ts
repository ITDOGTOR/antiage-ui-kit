import {ReactElement, RefObject} from 'react';

import {UIColumns} from '../../ui/Table/Table.types';

export interface IUsePinnedColumns {
	columns: UIColumns;
	tbodyRef: RefObject<HTMLTableSectionElement>;
	headTrRef: RefObject<HTMLTableRowElement>;
	containerRef: RefObject<HTMLDivElement>;
	children: ReactElement;
}
