import React, {SVGProps} from 'react';

function PaperFail(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 18 21" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.1 20c-2.5.1-4.6-1.9-4.7-4.4v-11C.5 2.1 2.5.1 4.9.1h6.8c.2 0 .4.1.5.2l5.1 5.3c.1.1.2.3.2.5v9.3c0 2.5-2 4.5-4.5 4.5l-7.9.1ZM4.9 1.6c-1.6 0-3 1.3-3 3v10.8c0 1.7 1.4 3 3.1 3h8c1.7 0 3-1.4 3-3V7.1h-2c-1.8 0-3.2-1.4-3.3-3.2V1.6H4.9Zm7.3 2.2c0 1 .8 1.8 1.8 1.8h1.2l-3-3.1v1.3Zm-2.1 9.6-1.3-1.3-1.2 1.2c-.3.3-.7.4-1.1.1-.3-.3-.3-.8 0-1.1l.1-.1L7.8 11 6.5 9.8c-.3-.3-.3-.8 0-1 .3-.3.7-.3 1-.1l.1.1L8.8 10 10 8.8c.3-.3.8-.3 1.1 0 .3.3.3.7.1 1h-.1L9.9 11l1.2 1.2c.3.3.3.8 0 1.1-.3.2-.7.3-1 .1Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default PaperFail;
