import {Theme} from '../../../index.types';

export type NavTabLinkProps = {
	link?: string;
	disabled?: boolean;
	tabClassName?: string;
	isActive?: boolean;
	theme?: Theme;
	title?: string;
};
