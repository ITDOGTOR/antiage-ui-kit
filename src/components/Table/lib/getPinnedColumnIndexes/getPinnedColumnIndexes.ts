import {UIColumns} from '../../ui/Table/Table.types';

export const getPinnedColumnIndexes = (columns: UIColumns) =>
	columns.reduce(
		(acc, cur, i) => {
			if (cur.fixed === 'left') {
				acc.left.push(i);
			}
			if (cur.fixed === 'right') {
				acc.right.push(i);
			}
			return acc;
		},
		{left: [] as number[], right: [] as number[]},
	);
