import React, {SVGProps} from 'react';

function ArrowPointerVertical(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height="19" viewBox="0 0 12 19" width="12" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.3001 17.8001L0.500098 10.0001C0.400098 9.80007 0.400098 9.50007 0.500098 9.20007C0.600099 9.00007 0.900098 8.80007 1.1001 8.80007L5.2001 8.80007L5.2001 0.800076C5.2001 0.400076 5.5001 0.100075 5.9001 0.100075C6.3001 0.100075 6.6001 0.400076 6.6001 0.700075V0.800076L6.6001 8.80007H10.7001C11.0001 8.90007 11.2001 9.00007 11.4001 9.20007C11.5001 9.40007 11.5001 9.70007 11.4001 10.0001L6.6001 17.8001C6.4001 18.1001 6.0001 18.2001 5.6001 18.0001C5.5001 17.9001 5.4001 17.9001 5.3001 17.8001ZM6.0001 16.0001L9.4001 10.3001H2.4001L6.0001 16.0001Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default ArrowPointerVertical;
