import {ReactNode} from 'react';

export declare interface DatePickerProviderProps {
	value: Date | string;
	lang?: string;
	onChange: (newDate: string) => void;
	applyMask?: (newDate: string) => string;
	children: ReactNode;
}
