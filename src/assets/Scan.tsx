import React, {SVGProps} from 'react';

function Scan(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={26} viewBox="0 0 32 26" width={32} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M30.705 14.179H1.295M28.07 8.353V5.578C28.07 3.081 25.987 1 23.49 1h-2.22M3.93 8.353V5.578C3.93 3.081 6.013 1 8.51 1h2.358M28.07 14.179v6.243c0 2.497-2.082 4.578-4.579 4.578h-2.22M3.93 14.179v6.243C3.93 22.919 6.013 25 8.51 25h2.358"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
			/>
		</svg>
	);
}

export default Scan;
