import {MouseEventHandler, ReactElement} from 'react';

import {Theme} from '../../../index.types';

export type NavTabButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
	tabClassName?: string;
	title?: string | ReactElement;
	disabled?: boolean;
	isActive?: boolean;
	theme?: Theme;
};
