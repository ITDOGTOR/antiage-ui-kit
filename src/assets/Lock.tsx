import React, {SVGProps} from 'react';

function Lock(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 16 18" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M12.002 6.8V4.942a3.862 3.862 0 0 0-1.204-2.788A4.199 4.199 0 0 0 7.893 1c-1.09 0-2.135.415-2.906 1.154a3.862 3.862 0 0 0-1.203 2.788v1.875"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.335 17h-6.92A3.49 3.49 0 0 1 2 16.04a3.21 3.21 0 0 1-1-2.316v-3.708c0-.87.36-1.702 1-2.317a3.49 3.49 0 0 1 2.415-.96H11.3a3.49 3.49 0 0 1 2.415.96c.64.615 1 1.448 1 2.317v3.708a3.2 3.2 0 0 1-.985 2.307 3.479 3.479 0 0 1-2.394.97ZM7.893 10.915v1.919"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Lock;
