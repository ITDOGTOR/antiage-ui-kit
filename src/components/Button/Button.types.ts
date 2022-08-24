import {ReactNode} from 'react';

export interface ButtonProps {
	children: ReactNode;
	theme: 'white' | 'dark';
	onClick: () => void;
	styleButton:
		| 'accent-fill'
		| 'complement-fill'
		| 'faint-fill'
		| 'delete-button'
		| 'base-outline'
		| 'text-link'
		| 'base-fill';
	disabled: boolean;
	width: 'full' | 'default';
	customClass: string;
	htmlType: 'button' | 'submit';
	icon: ReactNode;
}
