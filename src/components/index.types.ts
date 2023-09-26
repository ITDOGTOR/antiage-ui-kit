export enum Theme {
	WHITE = 'white',
	GRAY = 'gray',
}

declare const Colors: ['base', 'accent', 'complement', 'warning', 'success'];
export declare type Color = (typeof Colors)[number];

declare const Sizes: ['small', 'medium', 'large'];
export declare type Size = (typeof Sizes)[number];
