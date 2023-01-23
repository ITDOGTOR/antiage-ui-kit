import {ReactNode} from 'react';

import {Theme} from '../index.types';

export interface ContainerProps {
	children?: ReactNode;
	className?: string;
	theme?: Theme;
}
