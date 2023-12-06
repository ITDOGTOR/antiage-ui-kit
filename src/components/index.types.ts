export enum Theme {
	WHITE = 'white',
	GRAY = 'gray',
}
export enum Size {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}
declare const Colors: ['base', 'accent', 'complement', 'warning', 'success'];
export declare type Color = (typeof Colors)[number];
