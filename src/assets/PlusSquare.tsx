import React, {SVGProps} from 'react';

function PlusSquare(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.6 20.1c-1.5 0-3-.5-4.1-1.6-1-1.2-1.6-2.7-1.5-4.3V6c-.1-1.6.5-3.1 1.6-4.2C3.6.6 5.1.1 6.6.1h8.7c1.5 0 3 .5 4.1 1.6 1 1.2 1.6 2.7 1.5 4.2v8.2c.1 1.6-.5 3.1-1.5 4.3-1.1 1.1-2.6 1.7-4.1 1.6H6.6v.1ZM2.3 6v8.2c0 2.7 1.7 4.5 4.2 4.5h8.7c2.6 0 4.2-1.8 4.2-4.5V6c0-2.7-1.7-4.5-4.2-4.5H6.6C4 1.5 2.3 3.3 2.3 6Zm8 7.6v-2.8H7.5c-.4 0-.7-.3-.7-.7 0-.3.3-.6.6-.7H10.2V6.7c0-.4.3-.7.7-.7.3 0 .6.3.7.6V9.4h2.7c.4 0 .7.3.7.7 0 .3-.3.6-.6.7H11.6v2.7c0 .4-.3.7-.7.7-.3 0-.6-.3-.6-.6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default PlusSquare;
