import {ReactNode} from 'react';

export interface ButtonProps {
	children?: ReactNode;
	theme?: 'white' | 'gray';
	isLink?: boolean;
	onClick?: () => void;
	styleType?:
		| 'base-fill'
		| 'base-outline'
		| 'accent-fill'
		| 'accent-outline'
		| 'complement-fill'
		| 'complement-outline'
		| 'critic-outline'
		| 'text';
	disabled?: boolean;
	className?: string;
	htmlType?: 'button' | 'submit' | 'reset';
}
