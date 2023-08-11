import {ReactElement} from 'react';

export type UIColumns = Array<{
	title: string;
	sortingKey: string;
	fixed?: 'left' | 'right';
}>;

export interface UITable {
	children: ReactElement;
	header: ReactElement;
	trClassName?: string;
	tableClassName?: string;
	theadClassName?: string;
	tbodyClassName?: string;
	containerClassName?: string;
	wrapperClassName?: string;
	columns: UIColumns;
}
