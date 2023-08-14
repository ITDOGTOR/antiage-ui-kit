import {ReactNode} from 'react';

import {Theme} from '../index.types';

type NavTab = {
	link: string;
	title?: string | ReactNode | false;
	disabled?: boolean;
};
type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
type TabsType = 'button' | 'link';

export type NavTabsProps = {
	tabs?: NavTab[];
	activeTabLink?: string;
	onClick?: ((tabKey: string) => void) | undefined;
	theme?: Theme;
	tabsPosition?: TabsPosition;
	tabsType?: TabsType;
	containerClassName?: string;
	tabClassName?: string;
};
