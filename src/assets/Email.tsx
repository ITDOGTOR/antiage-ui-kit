import React, {SVGProps} from 'react';

function Email(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={20} viewBox="0 0 19 20" width={19} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M9.5 13.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.1 6.4v4.5a2.7 2.7 0 0 0 5.4 0V10a9 9 0 1 0-3.528 7.145"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Email;
