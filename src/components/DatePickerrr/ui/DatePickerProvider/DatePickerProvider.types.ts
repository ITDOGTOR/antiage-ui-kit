import {ReactNode} from 'react';

export declare interface DatePickerProviderProps {
	value: Date | string;
	lang?: string;
	onChange: (newDate: string) => void;
	applyDateMaskInput: Function;
	children: ReactNode;
}
