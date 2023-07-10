import React, {SVGProps} from 'react';

function ArrowPointerHorizontal(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height="12" viewBox="0 0 19 12" width="19" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M18.6 6.70024L10.8 11.5002C10.6 11.6002 10.3 11.6002 10 11.5002C9.8 11.4002 9.6 11.1002 9.6 10.9002V6.80024H1.6C1.2 6.80024 0.900002 6.50024 0.900002 6.10024C0.900002 5.70024 1.2 5.40024 1.5 5.40024H1.6H9.6V1.30024C9.6 1.00024 9.7 0.800244 10 0.700244C10.3 0.600244 10.6 0.600244 10.8 0.700244L18.6 5.50024C18.9 5.70024 19 6.10024 18.8 6.50024C18.8 6.60024 18.7 6.60024 18.6 6.70024ZM16.8 6.10024L11.2 2.60024V9.60024L16.8 6.10024Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default ArrowPointerHorizontal;
