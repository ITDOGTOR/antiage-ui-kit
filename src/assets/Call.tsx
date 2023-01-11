import React, {SVGProps} from 'react';

function Call(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M1.322 2.769c.295-.442 1.545-1.84 2.428-1.766.295.073.515.147.736.368.736.735 1.324 1.545 1.84 2.428.147.882-.884 1.324-.516 2.207a7.11 7.11 0 0 0 4.12 4.12c.883.294 1.398-.736 2.208-.515.883.515 1.692 1.103 2.428 1.84.22.22.367.44.367.735 0 .956-1.471 2.28-1.765 2.428-.662.515-1.545.515-2.649 0-3.016-1.251-7.872-6.033-9.123-9.197C.881 4.314.881 3.431 1.322 2.77Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Call;
