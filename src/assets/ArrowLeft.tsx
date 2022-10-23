import React, {SVGProps} from 'react';

function ArrowLeft(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={10} role="img" viewBox="0 0 6 10" width={6} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m1 5-.354.354a.5.5 0 0 1 0-.708L1 5Zm4.354-3.646-4 4-.708-.708 4-4 .708.708Zm-4 3.292 4 4-.708.708-4-4 .708-.708Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default ArrowLeft;
