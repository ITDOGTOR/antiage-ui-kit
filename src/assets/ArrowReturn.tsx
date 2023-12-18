import React, {SVGProps} from 'react';

function ArrowReturn(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 18 21" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5 9 1 5l4-4"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
				strokeWidth={1.5}
			/>
			<path
				d="M7 18.75a.75.75 0 0 0 0 1.5v-1.5Zm-6-13h10v-1.5H1v1.5ZM16.25 11v2.5h1.5V11h-1.5ZM11 18.75H7v1.5h4v-1.5Zm5.25-5.25c0 2.9-2.35 5.25-5.25 5.25v1.5a6.75 6.75 0 0 0 6.75-6.75h-1.5ZM11 5.75c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 11 4.25v1.5Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default ArrowReturn;
