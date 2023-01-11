import React, {SVGProps} from 'react';

function Female(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 14 18" width={14} xmlns="http://www.w3.org/2000/svg" {...props}>
			<circle cx={7} cy={6.506} r={5.506} stroke="currentColor" />
			<path d="M7 12.411V17M5.165 14.766h3.67" stroke="currentColor" strokeLinecap="round" />
		</svg>
	);
}

export default Female;
