import {ReactElement} from 'react';

import {Theme} from '../index.types';

type NavTab = {
	link: string;
	title?: string | ReactElement;
	disabled?: boolean;
};
type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
type TabsType = 'button' | 'link';

export type NavTabsProps = {
	tabs?: NavTab[];
	activeTabLink?: string;
	onClick?: ((tabLink: string) => void) | undefined;
	theme?: Theme;
	tabsPosition?: TabsPosition;
	tabsType?: TabsType;
	containerClassName?: string;
	tabClassName?: string;
};
