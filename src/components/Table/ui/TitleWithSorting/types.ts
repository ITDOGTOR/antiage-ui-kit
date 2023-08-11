import {SyntheticEvent} from 'react';

export interface UITitleWithSorting {
	onClick?: (e: SyntheticEvent) => void;
	upActive?: boolean;
	downActive?: boolean;
	title: string;
	sortingKey?: string;
}
