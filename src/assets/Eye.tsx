import React, {SVGProps} from 'react';

function Eye(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={14} viewBox="0 0 16 14" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.3838 7c0 1.2865-1.0595 2.4216-2.4216 2.4216C6.6 9.4216 5.6162 8.2865 5.6162 7c0-1.2865 1.0595-2.4216 2.4216-2.4216 1.3622 0 2.346 1.0594 2.346 2.4216Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.9622 12.5244c2.8756 0 5.5243-2.0433 7.0378-5.5244-1.5135-3.481-4.0865-5.5243-7.0378-5.5243C5.0865 1.4757 2.5135 3.519 1 7c1.5135 3.4054 4.0865 5.5244 6.9622 5.5244Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Eye;
