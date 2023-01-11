import React, {SVGProps} from 'react';

function Cross(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={10} viewBox="0 0 10 10" width={10} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="m1 1 8 8M9 1 1 9" stroke="currentColor" strokeLinecap="round" />
		</svg>
	);
}

export default Cross;
