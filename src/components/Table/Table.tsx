import {PaginationProps, Table as TableAntd} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {ArrowLeft, ArrowRight} from '../../assets';
import {TableProps} from './Table.types';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
	if (type === 'prev') {
		return (
			<button className={classNames('ui-kit-pagination-button')} tabIndex={-1} type="button">
				<ArrowLeft aria-label="left" />
			</button>
		);
	}

	if (type === 'next') {
		return (
			<button className={classNames('ui-kit-pagination-button')} tabIndex={-1} type="button">
				<ArrowRight aria-label="right" />
			</button>
		);
	}

	if (type.includes('jump')) {
		return (
			<button className={classNames('ui-kit-pagination-button')} tabIndex={-1} type="button">
				..{' '}
			</button>
		);
	}

	return originalElement;
};

function Table({theme = 'white', ...props}: TableProps) {
	return (
		<TableAntd
			pagination={{
				hideOnSinglePage: true,
				className: classNames('ui-kit-pagination', ['ui-kit-pagination', theme].join('-')),
				position: ['bottomCenter'],
				showSizeChanger: false,
				itemRender,
			}}
			showSorterTooltip={false}
			{...props}
		/>
	);
}

export default Table;
