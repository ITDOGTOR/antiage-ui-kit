import React, {ComponentType} from 'react';

import {useDatePickerContext} from '../../model';

/**
 * A Higher Order Component (HOC) that conditionally renders a component based on the current mode.
 * It checks if the current mode matches the target mode and renders the component accordingly.
 *
 * @param Component - The component to be conditionally rendered.
 * @param targetMode - The mode to compare with the current mode.
 *
 * @returns A new component that conditionally renders the provided Component based on the mode.
 */
export const withCurrentModeCheck = (Component: ComponentType<any>, targetMode: string) =>
	function CurrentModeCheck(props: any) {
		const {mode} = useDatePickerContext();

		if (mode !== targetMode) {
			return null;
		}

		return <Component {...props} />;
	};
