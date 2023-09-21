import {useContext} from 'react';

import {DatePickerContext, IDatePickerContext} from './context';

export const useDatePickerContext = (): IDatePickerContext => {
	const context = useContext(DatePickerContext);

	if (!context) {
		throw new Error('useDatePickerContext must be used within a DatePickerContext.Provider');
	}

	return context as IDatePickerContext;
};
