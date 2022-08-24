import {ReactNode} from 'react';

export interface ButtonProps {
	children?: ReactNode;
	icon?: ReactNode;
	theme?: 'white' | 'dark';
	onClick?: () => void;
	styleType?:
		| 'accent-fill'
		| 'accent-outline'
		| 'complement-fill'
		| 'complement-outline'
		| 'critic-outline'
		| 'base-outline'
		| 'text'
		| 'base-fill';
	disabled?: boolean;
	width?: 'full' | 'default';
	customClass?: string;
	htmlType?: 'button' | 'submit';
	label?: string;
}
