import React, {SVGProps} from 'react';

function Check(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={6} viewBox="0 0 8 6" width={8} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M1 2.996 2.997 5 7 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default Check;
