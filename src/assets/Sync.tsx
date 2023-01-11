import React, {SVGProps} from 'react';

function Sync(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={10} viewBox="0 0 10 10" width={10} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M1 2.5h8M3.133.5 1 2.5l2.133 2M9 7.5H1M6.867 9.5l2.134-2-2.134-2"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Sync;
