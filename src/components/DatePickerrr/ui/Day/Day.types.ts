import {DateAttributes} from '../index.types';

export declare interface DayProps {
	text?: string;
	type?: 'week' | 'current-month' | 'today' | 'selected';
	onClick?: (attribute: DateAttributes, value: number) => void;
}
