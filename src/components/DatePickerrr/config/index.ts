import {createContext} from 'react';

export interface IDatePickerContext {
	date: Date;
	selectedDate: Date | null;
	onChangeHandle: (date: Date) => void;
	onTogglePopup: () => void;
	mode: string;
	setMode: (newMode: string) => void;
	onReset: () => void;
	lang: string;
}

export const DatePickerContext = createContext<IDatePickerContext | {}>({});
