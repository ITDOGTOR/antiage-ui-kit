import {Table as TableAntd} from 'antd';
import React from 'react';

import {Theme} from '../index.types';
import * as TableModel from './model';
import {TableProps} from './Table.types';
import {getPaginationComponentLocal} from './ui';
import * as TableUi from './ui';

function Table({theme = Theme.WHITE, getPaginationComponent = getPaginationComponentLocal, ...props}: TableProps) {
	const Pagination = getPaginationComponent({theme});
	return <TableAntd pagination={Pagination} showSorterTooltip={false} {...props} />;
}
Table.TableModel = TableModel;
Table.TableUi = TableUi;
export default Table;
