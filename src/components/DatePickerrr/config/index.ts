import {createContext} from 'react';

import {DateInfo, ViewMode} from '../ui/index.types';

export interface IDatePickerContext {
	date: DateInfo;
	selectedDate: DateInfo;
	onChangeHandle: () => void;
	onTogglePopup: () => void;
	mode: ViewMode;
	setMode: (newMode: ViewMode) => void;
	onReset: () => void;
	lang: string;
}

export const DatePickerContext = createContext<IDatePickerContext | {}>({});
