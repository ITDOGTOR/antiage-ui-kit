import {SwitchProps as SwitchPropsAntd} from 'antd';
import {ReactNode} from 'react';

import {Theme} from '../index.types';

export declare type SwitchProps = {
	className?: string;
	classNameContainer?: string;
	status?: boolean;
	theme?: Theme;
	label?: ReactNode;
} & SwitchPropsAntd;
