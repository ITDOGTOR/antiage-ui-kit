import React, {SVGProps} from 'react';

function Phone(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={20} viewBox="0 0 13 20" width={13} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.786 1H2.214C1.268 1 .5 1.806.5 2.8v14.4c0 .994.768 1.8 1.714 1.8h8.572c.947 0 1.714-.806 1.714-1.8V2.8c0-.994-.768-1.8-1.714-1.8Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M6.5 15.4h.008" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
		</svg>
	);
}

export default Phone;
