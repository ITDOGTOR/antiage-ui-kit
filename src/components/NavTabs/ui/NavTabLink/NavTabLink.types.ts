import {ReactElement} from 'react';

import {Theme} from '../../../index.types';

export type NavTabLinkProps = {
	link?: string;
	disabled?: boolean;
	isActiveLink?: boolean;
	tabClassName?: string;
	isActive?: boolean;
	theme?: Theme;
	title?: string | ReactElement;
};
