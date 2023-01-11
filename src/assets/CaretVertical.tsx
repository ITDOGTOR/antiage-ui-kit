import React, {SVGProps} from 'react';

function CaretVertical(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={4} viewBox="0 0 7 4" width={7} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M3.5 4 6.531.25H.47L3.5 4Z" fill="currentColor" />
		</svg>
	);
}

export default CaretVertical;
