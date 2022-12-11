import * as React from 'react';
import {SVGProps} from 'react';

function SvgLightMessage(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} role="img" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m13.742 5.543-3.498 2.832c-.75.5-1.666.5-2.332 0l-3.58-2.832"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
			/>
			<path
				d="M5.08.88h7.829c1.166 0 2.248.5 2.998 1.332.75.833 1.166 1.916 1.082 3.081v5.413c.084 1.166-.333 2.25-1.082 3.082a4.032 4.032 0 0 1-2.998 1.332H5.08C2.666 15.12 1 13.122 1 10.707V5.293C1 2.878 2.666.88 5.08.88Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
			/>
		</svg>
	);
}

export default SvgLightMessage;
