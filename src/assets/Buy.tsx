import React, {SVGProps} from 'react';

function Buy(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 17 16" width={17} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.022 13.763a.61.61 0 0 1 .619.619.61.61 0 0 1-.619.618.61.61 0 0 1-.619-.618c0-.31.31-.62.62-.62ZM13.685 13.763a.61.61 0 0 1 .619.619.61.61 0 0 1-.619.618c-.387 0-.619-.232-.619-.618.078-.31.31-.62.62-.62Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="m1.387 1 1.624.31.774 8.894c.077.697.696 1.315 1.392 1.315h8.43c.697 0 1.316-.541 1.393-1.16l.696-5.105c.078-.541-.31-1.083-.85-1.16H3.242"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
			<path d="M10.204 6.8h2.166" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default Buy;
