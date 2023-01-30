import React, {SVGProps} from 'react';

function Bag(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={23} viewBox="0 0 19 23" width={19} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M13.293 8.941V5.428c0-1.175-.421-2.3-1.171-3.131C11.372 1.467 10.354 1 9.293 1c-1.06 0-2.078.466-2.828 1.297-.75.83-1.172 1.956-1.172 3.13V9"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.543 17.233.828 6.5h16.93l-.715 10.733a3.5 3.5 0 0 1-3.492 3.267H5.035a3.5 3.5 0 0 1-3.492-3.267Z"
				stroke="currentColor"
			/>
		</svg>
	);
}

export default Bag;
