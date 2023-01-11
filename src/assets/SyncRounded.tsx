import React, {SVGProps} from 'react';

function SyncRounded(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={10} viewBox="0 0 10 10" width={10} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M2.81 3.714H.63V1.532" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M7.828 2.172a4 4 0 0 0-5.656 0L.629 3.714M7.19 6.286H9.37v2.181"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.172 7.828a4 4 0 0 0 5.656 0l1.543-1.542"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default SyncRounded;
