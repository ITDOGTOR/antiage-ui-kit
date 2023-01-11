import React, {SVGProps} from 'react';

function Tune(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={15} viewBox="0 0 18 15" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.996 11.725H1.428M17 11.763a2.545 2.545 0 0 1-2.539 2.547 2.545 2.545 0 0 1-2.539-2.547 2.545 2.545 0 0 1 2.539-2.548c1.4 0 2.539 1.142 2.539 2.548ZM6.406 3.154h9.568M1.066 3.154a2.545 2.545 0 0 0 2.539 2.548c1.4 0 2.539-1.142 2.539-2.548 0-1.405-1.226-2.46-2.627-2.46-1.4-.087-2.451 1.055-2.451 2.46Zm0 0c-.088 0-.088 0 0 0Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Tune;
