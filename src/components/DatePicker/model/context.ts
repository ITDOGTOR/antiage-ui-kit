import {createContext, RefObject, useContext} from 'react';

import {DateAttributes, DateInfo, ViewMode} from '../index.types';

export interface IDatePickerContext {
	visualDate: DateInfo;
	setVisualDate: (newVisualDate: DateInfo) => void;
	selectedDate: DateInfo;
	onChangeDate: (attribute: DateAttributes, newValue: string | number) => void;
	onToggle: Function;
	lang: string;
	mode: ViewMode;
	setMode: (newMode: ViewMode) => void;
	containerRef: RefObject<HTMLInputElement | null>;
}

export const DatePickerContext = createContext<IDatePickerContext | {}>({});

export const useDatePickerContext = (): IDatePickerContext => {
	const context = useContext(DatePickerContext);

	if (!context) {
		throw new Error('useDatePickerContext must be used within a DatePickerContext.Provider');
	}

	return context as IDatePickerContext;
};
