import React, {SVGProps} from 'react';

function ArrowHorizontal(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={10} viewBox="0 0 6 10" width={6} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="m1 9 4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default ArrowHorizontal;
