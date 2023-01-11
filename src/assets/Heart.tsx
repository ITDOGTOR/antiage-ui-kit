import React, {SVGProps} from 'react';

function Heart(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 22 21" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.738 19.782c-2.309-1.364-4.407-3.043-6.296-4.932-1.364-1.364-2.413-2.938-3.043-4.826-1.154-3.568.21-7.555 3.883-8.71C7.275.686 9.374 1 11.052 2.26 12.732 1 14.83.685 16.718 1.315c3.673 1.154 5.037 5.246 3.883 8.709a12.999 12.999 0 0 1-3.043 4.826c-1.889 1.889-3.987 3.463-6.296 4.932l-.21.105-.314-.105Z"
				data-svg="1"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
			<path
				d="M14.934 5.302c1.154.315 1.889 1.364 1.993 2.518"
				data-svg="2"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
		</svg>
	);
}

export default Heart;
