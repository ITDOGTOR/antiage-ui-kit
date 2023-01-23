import {LegacyRef, ReactNode} from 'react';

import {Theme} from '../index.types';

export interface ContainerProps {
	children?: ReactNode;
	className?: string;
	theme?: Theme;
	innerRef?: LegacyRef<any>;
}
