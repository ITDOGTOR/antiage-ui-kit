import React, {SVGProps} from 'react';

function Refresh(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={15} viewBox="0 0 16 15" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M1.915 10.96A7 7 0 1 0 1 7.49" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
			<path d="M5.445 10.778h-3.72v3.72" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
		</svg>
	);
}

export default Refresh;
