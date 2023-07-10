import React, {SVGProps} from 'react';

function Location(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 18 21" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m8 19.8-.5-.3c-1.7-1.2-3.2-2.6-4.5-4.3l-.3-.4C1.3 13 .6 10.9.5 8.6v-.3C.6 3.8 4.4.1 9 .1h.2c4.6.2 8.2 4 8.2 8.6v.1c0 2.6-1.3 5.4-3.7 7.9-1.1 1.2-2.4 2.2-3.7 3.1h-.1c-.6.4-1.3.4-1.9 0Zm.7-18.2c-3.8.1-6.8 3.2-6.8 7V9c.1 1.8.8 3.5 1.9 4.9 1.3 1.8 3 3.4 4.9 4.6l.1.1c.1.1.2.1.2 0l.2-.1c1.3-.8 2.4-1.8 3.5-2.9C14.8 13.4 16 11 16 8.7v-.3c-.1-3.8-3.2-6.8-7-6.8h-.3Zm-3 7.1c0-1.8 1.5-3.2 3.3-3.2 1.8 0 3.2 1.5 3.2 3.3 0 1.8-1.5 3.2-3.2 3.2-1.8 0-3.3-1.5-3.3-3.3Zm1.5 0c0 1 .8 1.7 1.7 1.7.9 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Location;
