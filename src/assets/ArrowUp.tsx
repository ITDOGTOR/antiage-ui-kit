import React, {SVGProps} from 'react';

function ArrowUp(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={6} role="img" viewBox="0 0 10 6" width={10} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5 1 4.646.646a.5.5 0 0 1 .708 0L5 1Zm3.646 4.354-4-4 .708-.708 4 4-.708.708Zm-3.292-4-4 4-.708-.708 4-4 .708.708Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default ArrowUp;
