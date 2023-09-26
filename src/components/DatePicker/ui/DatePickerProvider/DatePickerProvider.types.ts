import {ReactNode} from 'react';

import {DatePickerGeneralProps} from '../../index.types';

export declare type DatePickerProviderProps = {
	field: ReactNode;
	children?: ReactNode;
} & DatePickerGeneralProps;
