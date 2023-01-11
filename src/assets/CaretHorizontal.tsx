import React, {SVGProps} from 'react';

function CaretHorizontal(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={7} viewBox="0 0 4 7" width={4} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M4 3.5.25 6.531V.47L4 3.5Z" fill="currentColor" />
		</svg>
	);
}

export default CaretHorizontal;
