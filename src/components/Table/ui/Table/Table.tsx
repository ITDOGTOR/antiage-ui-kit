import './Table.css';

import classNames from 'classnames';
import React, {useRef} from 'react';

import {usePinnedColumns, useShadowControl, useSortingContext} from '../../model';
import Title from '../TitleWithSorting/Title';
import {UITable} from './Table.types';

function Table({
	children,
	header = <Title title="" />,
	trClassName,
	tbodyClassName,
	wrapperClassName,
	columns,
}: UITable) {
	const data = useSortingContext();
	const {sorting, setSorting} = data || {};

	const containerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const tbodyRef = useRef<HTMLTableSectionElement>(null);
	const headTrRef = useRef<HTMLTableRowElement>(null);

	usePinnedColumns({
		columns,
		tbodyRef,
		headTrRef,
		containerRef,
		children,
	});
	useShadowControl({
		children,
		headTrRef,
		containerRef,
		wrapperRef,
		tbodyRef,
		columns,
	});
	const wrapperClasses = classNames('ui-kit-table__wrapper', wrapperClassName);
	const containerClasses = classNames('ui-kit-table__container');
	const tableClasses = classNames('ui-kit-table__table');
	const trContainerClasses = classNames('ui-kit-table__tr-container', trClassName);
	const tbodyContainerClasses = classNames('ui-kit-table__tbody', tbodyClassName);

	return (
		<div className={wrapperClasses} ref={wrapperRef}>
			<div className={containerClasses} ref={containerRef}>
				<table className={tableClasses}>
					<thead>
						<tr className={trContainerClasses} ref={headTrRef}>
							{columns.map(({title, sortingKey = ''}) =>
								React.cloneElement(header, {
									title,
									onClick: () => {
										if (sortingKey) {
											setSorting(sortingKey);
										}
									},
									downActive: sorting.includes(`-${sortingKey}`),
									upActive: sorting.includes(sortingKey),
									sortingKey,
								}),
							)}
						</tr>
					</thead>
					<tbody className={tbodyContainerClasses} ref={tbodyRef}>
						{children}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Table;
