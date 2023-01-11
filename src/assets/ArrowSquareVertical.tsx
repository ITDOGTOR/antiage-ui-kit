import React, {SVGProps} from 'react';

function ArrowSquareVertical(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={17} viewBox="0 0 18 17" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.238 16.5h7.524c2.595 0 4.238-1.816 4.238-4.497V4.997C17 2.403 15.357.5 12.762.5H5.238C2.643.5 1 2.316 1 4.997v7.092C1 14.684 2.643 16.5 5.238 16.5ZM9.043 12.089V4.997"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="m12.242 8.803-3.286 3.286-3.2-3.286"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default ArrowSquareVertical;
