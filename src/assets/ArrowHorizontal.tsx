import React, {SVGProps} from 'react';

function ArrowHorizontal(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={10} viewBox="0 0 16 10" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M14 5 9.84 1M14 5 9.84 9M14 5H1" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} />
		</svg>
	);
}

export default ArrowHorizontal;
