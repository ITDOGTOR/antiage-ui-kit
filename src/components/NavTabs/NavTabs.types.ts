import {Theme} from '../index.types';

declare const TabsPositions: ['top', 'right', 'bottom', 'left'];

declare type NavTab = {
	key: string;
	title?: string;
	disabled?: boolean;
};
declare type TabsPosition = (typeof TabsPositions)[number];

export declare type NavTabsProps = {
	tabs?: NavTab[];
	activeTabKey?: string;
	onClick?: ((tabKey: string) => void) | undefined;
	theme?: Theme;
	tabsPosition?: TabsPosition;
	containerClassName?: string;
	tabClassName?: string;
};
