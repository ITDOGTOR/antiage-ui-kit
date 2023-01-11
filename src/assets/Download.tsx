import React, {SVGProps} from 'react';

function Download(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={26} viewBox="0 0 29 26" width={29} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M14.737 17.941V1M18.831 13.847l-4.094 4.094-4.094-4.094"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
			<path
				d="M21.231 7.636h1.271c2.824 0 5.224 2.258 5.224 5.223v6.918c0 2.823-2.26 5.223-5.224 5.223H6.832c-2.824 0-5.224-2.259-5.224-5.223v-6.918c0-2.823 2.259-5.223 5.223-5.223h1.271"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
		</svg>
	);
}

export default Download;
