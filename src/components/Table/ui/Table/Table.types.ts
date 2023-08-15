import {ReactElement} from 'react';

export declare type UIColumns = Array<{
	title: string;
	sortingKey?: string;
	fixed?: 'left' | 'right';
}>;

export declare interface UITable {
	children: ReactElement;
	header: ReactElement;
	trClassName?: string;
	tbodyClassName?: string;
	wrapperClassName?: string;
	columns: UIColumns;
}
