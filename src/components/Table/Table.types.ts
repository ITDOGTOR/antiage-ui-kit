import {TableProps as TablePropsAntd} from 'antd';

import {Theme} from '../index.types';

// @ts-ignore
export declare interface TableProps extends TablePropsAntd {
	className?: string;
	theme?: Theme;
	getPaginationComponent?: (props: any) => {} | false;
}
