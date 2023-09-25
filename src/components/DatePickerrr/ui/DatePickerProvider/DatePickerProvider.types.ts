import {ReactNode} from 'react';

export declare interface DatePickerProviderProps {
	field: ReactNode;
	value: string | Date;
	onChange: Function;
	lang?: string;
	applyDateMaskInput?: Function;
	onClosePopup?: Function;
	children?: ReactNode;
}
