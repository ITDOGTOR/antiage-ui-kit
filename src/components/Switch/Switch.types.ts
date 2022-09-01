import {ReactNode} from 'react';

export interface SwitchProps {
	className?: string;
	theme?: 'white' | 'gray';
	children?: ReactNode;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	defaultChecked?: boolean;
}
