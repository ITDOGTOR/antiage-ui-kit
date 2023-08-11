import {ReactElement, RefObject} from 'react';

import {UIColumns} from '../../ui/Table/types';

export interface IUsePinnedColumns {
	columns: UIColumns;
	tbodyRef: RefObject<HTMLTableSectionElement>;
	trheadRef: RefObject<HTMLTableRowElement>;
	containerRef: RefObject<HTMLDivElement>;
	children: ReactElement;
}
