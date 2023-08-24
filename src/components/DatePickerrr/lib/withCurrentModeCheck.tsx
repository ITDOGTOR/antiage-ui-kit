import React, {ComponentType} from 'react';

import {useDatePickerContext} from './useDatePickerContext';

export const withCurrentModeCheck = (Component: ComponentType<any>, targetMode: string) =>
	function CurrentModeCheck(props: any) {
		const {mode} = useDatePickerContext();

		if (mode !== targetMode) {
			return null;
		}

		return <Component {...props} />;
	};
