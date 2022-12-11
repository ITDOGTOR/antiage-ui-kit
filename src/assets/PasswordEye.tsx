import * as React from 'react';
import {SVGProps} from 'react';

function SvgPasswordEye(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={13} role="img" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.384 6.524c0 1.287-1.06 2.422-2.422 2.422S5.616 7.81 5.616 6.524c0-1.286 1.06-2.421 2.422-2.421s2.346 1.06 2.346 2.421Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
			/>
			<path
				d="M7.962 12.049c2.876 0 5.524-2.044 7.038-5.525C13.486 3.044 10.914 1 7.962 1 5.086 1 2.514 3.043 1 6.524 2.514 9.93 5.086 12.05 7.962 12.05Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
			/>
		</svg>
	);
}

export default SvgPasswordEye;
