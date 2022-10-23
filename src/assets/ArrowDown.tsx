import React, {SVGProps} from 'react';

function ArrowDown(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={6} role="img" viewBox="0 0 10 6" width={10} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m5 5 .354.354a.5.5 0 0 1-.708 0L5 5ZM1.354.646l4 4-.708.708-4-4 .708-.708Zm3.292 4 4-4 .708.708-4 4-.708-.708Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default ArrowDown;
