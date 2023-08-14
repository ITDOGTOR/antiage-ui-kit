import {MouseEventHandler, ReactNode} from 'react';

import {Theme} from '../../../index.types';

export type NavTabButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
	tabClassName?: string;
	title?: string | ReactNode | false;
	disabled?: boolean;
	isActive?: boolean;
	theme?: Theme;
};
