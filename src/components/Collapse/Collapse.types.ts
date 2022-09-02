import {ReactNode} from 'react';

export interface CollapseProps {
	children: ReactNode;
	header?: string;
	className?: string;
	styleType?: 'not-button-remove' | 'button-remove';
}
