import {ReactNode, Ref} from 'react';

import {Theme} from '../index.types';

export interface ContainerProps {
	children?: ReactNode;
	className?: string;
	theme?: Theme;
	resetStyle?: boolean;
	innerRef?: Ref<HTMLDivElement>;
}
