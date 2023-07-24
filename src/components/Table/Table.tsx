import {Table as TableAntd} from 'antd';
import React from 'react';

import {TableProps} from './Table.types';
import {getPaginationComponentLocal} from "./ui";



function Table({theme = 'white', getPaginationComponent = getPaginationComponentLocal, ...props}: TableProps) {
	const Pagination = getPaginationComponent({ theme });
	return (
		<TableAntd
			pagination={Pagination}
			showSorterTooltip={false}
			{...props}
		/>
	);
}

export default Table;
