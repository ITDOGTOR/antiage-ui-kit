import * as React from 'react';
import {SVGProps} from 'react';

function EyeClosed(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={12} viewBox="0 0 14 12" width={14} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.5766 7.504c-.3973-.3973-.596-.927-.596-1.4568 0-1.1257.9271-2.119 2.119-2.119.5297 0 1.0595.1987 1.4568.596m.5298 1.8543c-.1325.8609-.7946 1.523-1.6555 1.6555"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.4575 9.5574C2.3318 8.6304 1.4047 7.3722.875 6.0479c.5297-1.3906 1.4568-2.5825 2.5825-3.5758.9932-.7946 2.2514-1.2581 3.5095-1.2581 1.2581 0 2.5163.4635 3.5095 1.3243m1.4562 1.3899c.4635.6622.8608 1.3244 1.1919 2.0528-1.3244 3.046-3.5758 4.8338-6.092 4.8338-.596 0-1.1257-.0662-1.6555-.2648m6.8877-9.8L1.8024 11.2123"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default EyeClosed;
