import {LinkProps as LinkPropsRouterDom} from 'react-router-dom';

import {Color, Theme} from '../index.types';

declare const LinkTypes: ['default', 'primary', 'text'];
declare type LinkType = typeof LinkTypes[number];

export declare type LinkProps = {
	className?: string;
	gradient?: boolean;
	danger?: boolean;
	withoutRouterDom?: boolean;
	type?: LinkType;
	theme?: Theme;
	color?: Color;
} & LinkPropsRouterDom;
