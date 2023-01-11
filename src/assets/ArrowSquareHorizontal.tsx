import React, {SVGProps} from 'react';

function ArrowSquareHorizontal(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={17} viewBox="0 0 18 17" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M17 12.262V4.738C17 2.143 15.184.5 12.503.5H5.497C2.903.5 1 2.143 1 4.738v7.524C1 14.857 2.816 16.5 5.497 16.5h7.092c2.595 0 4.411-1.643 4.411-4.238ZM12.589 8.457H5.497"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="m9.303 5.258 3.286 3.286-3.286 3.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default ArrowSquareHorizontal;
