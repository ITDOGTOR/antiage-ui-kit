import React, {SVGProps} from 'react';

function Send(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 16 16" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m9.295 7.945-6.247.022-1.402-5.89A.91.91 0 0 1 2.322.973a.98.98 0 0 1 .66.088l11.07 6.143a.91.91 0 0 1 .352 1.243.956.956 0 0 1-.363.363L2.883 14.852a.91.91 0 0 1-1.237-.357.933.933 0 0 1-.083-.655L3 8.006"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Send;
