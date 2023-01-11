import React, {SVGProps} from 'react';

function Time(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={14} viewBox="0 0 14 14" width={14} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M13 7c0 3.326-2.66 6-5.968 6S1 10.326 1 7s2.66-6 5.968-6S13 3.674 13 7Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="m9.238 8.891-2.465-1.5v-3.13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default Time;
