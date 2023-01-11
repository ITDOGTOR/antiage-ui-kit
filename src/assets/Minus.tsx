import React, {SVGProps} from 'react';

function Minus(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={2} viewBox="0 0 8 2" width={8} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M1 1h6" stroke="currentColor" strokeLinecap="round" />
		</svg>
	);
}

export default Minus;
