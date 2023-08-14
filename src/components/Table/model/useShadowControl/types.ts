import {ReactElement, RefObject} from 'react';

import {UIColumns} from '../../ui/Table/types';

export interface IUseShadowControl {
	columns: UIColumns;
	wrapperRef: RefObject<HTMLDivElement>;
	headTrRef: RefObject<HTMLTableRowElement>;
	tbodyRef: RefObject<HTMLTableSectionElement>;
	containerRef: RefObject<HTMLDivElement>;
	children: ReactElement;
}
