import React, {SVGProps} from 'react';

function Plus(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={8} viewBox="0 0 8 8" width={8} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M4 1v6M1 4h6" stroke="currentColor" strokeLinecap="round" />
		</svg>
	);
}

export default Plus;
