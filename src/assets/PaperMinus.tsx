import React, {SVGProps} from 'react';

function PaperMinus(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 18 21" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5 20c-2.5.1-4.5-1.9-4.6-4.3V4.6c0-1.2.5-2.3 1.4-3.2C2.7.6 3.8.1 5 .1H11.7c.2 0 .4.1.5.2l5.1 5.3c.1.1.2.3.2.5v9.3c0 2.5-2 4.5-4.5 4.5L5 20ZM5 1.6c-1.7 0-3 1.3-3.1 3v10.8c0 1.6 1.2 3 2.9 3H13c.8 0 1.5-.3 2.1-.9.6-.6.9-1.3.9-2.1V7.1h-2c-1.8 0-3.2-1.4-3.3-3.2V1.6H5Zm7.2 2.2c0 1 .8 1.8 1.8 1.8h1.2l-3-3.1v1.3Zm-5.9 8.8c-.4 0-.8-.3-.8-.7 0-.4.3-.8.7-.8h5c.4 0 .7.3.7.8 0 .4-.3.7-.6.7h-5Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default PaperMinus;
