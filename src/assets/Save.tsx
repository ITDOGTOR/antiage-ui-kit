import React, {SVGProps} from 'react';

function Save(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
			<g stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}>
				<path
					d="M13.889 1h-8.54C3.273 1 1.404 2.661 1.404 4.842V15.95c0 2.18 1.66 4.049 3.841 4.049H15.238c2.18-.104 3.842-1.869 3.842-4.05V6.4L13.889 1Z"
					strokeLinecap="round"
					strokeMiterlimit={10}
				/>
				<path
					d="M13.577 1v3.01c0 1.454 1.142 2.7 2.7 2.7h2.907M12.804 15.873h-4.75"
					strokeLinecap="round"
					strokeMiterlimit={10}
				/>
				<rect height={7.917} rx={1} width={11.083} x={4.887} y={12.083} />
			</g>
		</svg>
	);
}
export default Save;
