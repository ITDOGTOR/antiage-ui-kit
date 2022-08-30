import {ReactNode} from 'react';

export interface SwitchProps {
	className?: string;
	theme?: 'white' | 'gray';
	children?: ReactNode;
	onChange: () => void;
	disabled?: boolean;
}
