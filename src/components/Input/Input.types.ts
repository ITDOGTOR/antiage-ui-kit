import {InputProps as InputPropsAntd} from 'antd';

import {Theme} from '../index.types';

export declare type InputProps = {
	className?: string;
	theme?: Theme;
	placeholder?: string;
	error?: string;
} & InputPropsAntd;
