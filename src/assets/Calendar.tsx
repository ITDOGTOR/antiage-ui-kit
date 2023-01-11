import React, {SVGProps} from 'react';

function Calendar(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 16 18" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M0.839996 6.91998H15.08" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M11.24 1V3.64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4.76001 1V3.64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M11.4 2.28003H4.60001C2.28001 2.28003 0.76001 3.56003 0.76001 5.96003V13.24C0.76001 15.72 2.20001 17 4.60001 17H11.4C13.72 17 15.24 15.72 15.24 13.24V5.96003C15.24 3.56003 13.72 2.28003 11.4 2.28003Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Calendar;
