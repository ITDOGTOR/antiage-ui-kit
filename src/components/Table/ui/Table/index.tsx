/* eslint-disable no-restricted-syntax */
import './Table.css';

import classNames from 'classnames';
import React, {useRef} from 'react';

import {usePinnedColumns, useShadowControl, useSortingContext} from '../../model';
import TitleWithSorting from '../TitleWithSorting';
import {UITable} from './types';

function Table({
	children,
	header = <TitleWithSorting title="" />,
	trClassName,
	tableClassName,
	theadClassName,
	tbodyClassName,
	containerClassName,
	wrapperClassName,
	columns,
}: UITable) {
	const data = useSortingContext();
	const {sorting, setSorting} = data || {};

	const containerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const tbodyRef = useRef<HTMLTableSectionElement>(null);
	const trheadRef = useRef<HTMLTableRowElement>(null);

	usePinnedColumns({
		columns,
		tbodyRef,
		trheadRef,
		containerRef,
		children,
	});
	useShadowControl({
		children,
		trheadRef,
		containerRef,
		wrapperRef,
		tbodyRef,
		columns,
	});
	const wrapperClasses = classNames('ui-kit-table-wrapper', wrapperClassName);
	const containerClasses = classNames('ui-kit-table-container', containerClassName);
	const tableClasses = classNames('ui-kit-table-table', tableClassName);
	const theadClasses = classNames('', theadClassName);
	const trContainerClasses = classNames('ui-kit-table-tr-container', trClassName);
	const tbodyContainerClasses = classNames('ui-kit-table-tbody-container', tbodyClassName);

	return (
		<div className={wrapperClasses} ref={wrapperRef}>
			<div className={containerClasses} ref={containerRef}>
				<table className={tableClasses}>
					<thead className={theadClasses}>
						<tr className={trContainerClasses} ref={trheadRef}>
							{columns.map(({title, sortingKey}) =>
								React.cloneElement(header, {
									title,
									onClick: () => setSorting(sortingKey),
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
