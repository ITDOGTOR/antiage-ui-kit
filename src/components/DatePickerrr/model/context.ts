import {createContext} from 'react';

import {DateAttributes, DateInfo, ViewMode} from '../index.types';

export interface IDatePickerContext {
	visualDate: DateInfo;
	setVisualDate: (newVisualDate: DateInfo) => void;
	selectedDate: DateInfo;
	onChangeDate: (attribute: DateAttributes, newValue: string | number) => void;
	lang: string;
	mode: ViewMode;
	setMode: (newMode: ViewMode) => void;
}

export const DatePickerContext = createContext<IDatePickerContext | {}>({});
