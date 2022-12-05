import {InputProps as InputPropsAntd} from 'antd';
import {ReactNode} from 'react';

export declare type InputProps = {
	styleInput: 'outlined' | 'filled';
	label: ReactNode;
} & InputPropsAntd;
