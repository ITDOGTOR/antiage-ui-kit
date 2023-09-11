import {DateAttributes} from '../../../index.types';
import {DayTypes} from '../../DaysGrid.types';

export declare interface DayProps {
	text?: string | number;
	type?: DayTypes;
	onClick?: (attribute: DateAttributes, value: number) => void;
	disabled?: boolean;
}
