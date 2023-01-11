import React, {SVGProps} from 'react';

function Copy(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 14 16" width={14} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.152 1H5.946C4.691 1 3.561 2.004 3.561 3.323v6.78a2.36 2.36 0 0 0 2.26 2.386h5.148c1.318 0 2.322-1.068 2.322-2.386V4.265L10.152 1Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.435 3.51C2.18 3.51 1.05 4.516 1.05 5.835v6.78a2.36 2.36 0 0 0 2.26 2.385h5.148c1.318 0 2.323-1.067 2.323-2.385M9.965 1v1.82c0 .88.69 1.633 1.632 1.633h1.758"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Copy;
