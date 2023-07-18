import * as React from 'react';

import {Theme} from '../index.types';

export interface RadioProps {
	name: string;
	id: string;
	value?: any;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	onClick?: React.MouseEventHandler<HTMLElement> | undefined;
	theme?: Theme;
	disabled?: boolean;
	defaultChecked?: boolean;
	label?: string;
	className?: string;
	labelClassName?: string;
	containerClassName?: string;
}
