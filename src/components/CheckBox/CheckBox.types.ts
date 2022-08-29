import {ReactNode} from 'react';

export interface CheckBoxProps {
	className?: string;
	theme?: 'white' | 'gray';
	children?: ReactNode;
	onChange?: () => void;
	disabled?: boolean;
}
