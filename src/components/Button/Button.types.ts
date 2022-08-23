import {ReactNode} from 'react';

export interface ButtonProps {
	content: ReactNode;
	onClick: () => void;
	styleButton:
		| 'accent-strong-fill'
		| 'complement-strong-fill'
		| 'faint-weak-fill'
		| 'delete-button'
		| 'base-weak-outline'
		| 'text-link'
		| 'base-weak-fill';
	disabled: boolean;
	width: 'full' | 'default';
	customClass: string;
}
