import {ButtonProps as ButtonPropsAntd} from 'antd';

declare const ButtonThemes: ['white', 'gray'];
declare type ButtonTheme = typeof ButtonThemes[number];
declare const ButtonColors: ['base', 'accent', 'complement', 'warning', 'success'];
declare type ButtonColor = typeof ButtonColors[number];

export declare type ButtonProps = {
	className?: string;
	gradient?: boolean;
	theme?: ButtonTheme;
	color?: ButtonColor;
} & ButtonPropsAntd;
