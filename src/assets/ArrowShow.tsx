import * as React from 'react';
import {SVGProps} from 'react';

function SvgArrowShow(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={6} viewBox="0 0 10 6" width={10} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
export default SvgArrowShow;
