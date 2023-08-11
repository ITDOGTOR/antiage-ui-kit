import {Theme} from '../index.types';

declare const TabsPositions: ['top', 'right', 'bottom', 'left'];
declare const TabsTypes: ['button', 'link'];

declare type NavTab = {
	link: string;
	title?: string;
	disabled?: boolean;
};
declare type TabsPosition = (typeof TabsPositions)[number];
declare type TabsType = (typeof TabsTypes)[number];

export declare type NavTabsProps = {
	tabs?: NavTab[];
	activeTabLink?: string;
	onClick?: ((tabKey: string) => void) | undefined;
	theme?: Theme;
	tabsPosition?: TabsPosition;
	tabsType?: TabsType;
	containerClassName?: string;
	tabClassName?: string;
};
