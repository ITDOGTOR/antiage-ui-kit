import {Size} from '../index.types';

declare const StatusColorsOptions: ['accent', 'complement', 'warning', 'critic', 'success'];
export declare type StatusColor = (typeof StatusColorsOptions)[number];

export declare type StatusProps = {
	text?: string;
	color?: StatusColor;
	size?: Size;
	containerClassName?: string;
	textClassName?: string;
};
