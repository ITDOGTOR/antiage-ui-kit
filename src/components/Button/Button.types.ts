import {ButtonProps as ButtonPropsAntd} from 'antd';

import {Color, Theme} from '../index.types';

export declare type ButtonProps = {
	className?: string;
	gradient?: boolean;
	theme?: Theme;
	color?: Color;
} & ButtonPropsAntd;
