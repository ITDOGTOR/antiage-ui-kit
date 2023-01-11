import * as React from 'react';
import {SVGProps} from 'react';

function Letter(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 18 16" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m13.7416 5.5433-3.4977 2.8315c-.7495.4996-1.6656.4996-2.3318 0l-3.581-2.8315"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.0807.8797h7.8281a4.0316 4.0316 0 0 1 2.9981 1.3324c.7495.8328 1.1659 1.9154 1.0826 3.0813v5.4131c.0833 1.1659-.3331 2.2486-1.0826 3.0814a4.0319 4.0319 0 0 1-2.9981 1.3324H5.0807C2.6656 15.1203 1 13.1216 1 10.7065v-5.413C1 2.8783 2.6656.8796 5.0807.8796Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Letter;
