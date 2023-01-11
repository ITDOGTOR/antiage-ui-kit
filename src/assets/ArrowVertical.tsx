import React, {SVGProps} from 'react';

function ArrowVertical(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 11 16" width={11} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m5.5 14.5 4-4.16m-4 4.16-4-4.16m4 4.16v-13"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={1.5}
			/>
		</svg>
	);
}

export default ArrowVertical;
