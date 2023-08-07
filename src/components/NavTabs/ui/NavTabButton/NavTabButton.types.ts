import {MouseEventHandler} from 'react';

import {Theme} from '../../../index.types';

export declare type NavTabButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
	tabClassName?: string;
	title?: string;
	disabled?: boolean;
	isActive?: boolean;
	theme?: Theme;
};
