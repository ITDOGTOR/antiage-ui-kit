import {MouseEventHandler, ReactElement} from 'react';

import {Color, Size, Theme} from '../index.types';

type FilterTabs = Array<{
	link: string;
	title?: string | ReactElement;
	disabled?: boolean;
}>;
type ActiveFilterTabColor = Extract<Color, 'accent' | 'complement'>;

export interface FilterTabsProps {
	tabs: FilterTabs;
	activeTabLink?: string;
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	theme?: Theme;
	activeTabColor?: ActiveFilterTabColor;
	size?: Size;
	containerClassName?: string;
	tabClassName?: string;
	activeTabClassName?: string;
}
