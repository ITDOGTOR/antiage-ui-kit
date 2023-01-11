import React, {SVGProps} from 'react';

function Search(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 19 18" width={19} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M7.684 14.354a6.684 6.684 0 1 0 0-13.368 6.684 6.684 0 0 0 0 13.367Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.6}
			/>
			<path
				d="M4.148 7.67a3.536 3.536 0 0 1 3.536-3.536"
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				strokeWidth={0.6}
			/>
			<path
				d="M12.643 12.143 17 16.5"
				stroke="currentColor"
				strokeLinecap="square"
				strokeLinejoin="round"
				strokeWidth={1.6}
			/>
		</svg>
	);
}

export default Search;
