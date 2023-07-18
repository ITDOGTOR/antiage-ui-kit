import * as React from 'react';

import {Theme} from '../index.types';

export interface CheckboxProps {
	id: string;
	checked?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	onClick?: React.MouseEventHandler<HTMLElement> | undefined;
	theme?: Theme;
	disabled?: boolean;
	defaultChecked?: boolean;
	text?: string;
	className?: string;
	textClassName?: string;
	containerClassName?: string;
}
