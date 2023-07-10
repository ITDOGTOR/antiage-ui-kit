import React, {SVGProps} from 'react';

function EditSquare(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.6 20.1c-3 .1-5.5-2.2-5.7-5.3V6C.9 2.6 3.1.2 6.3.1H10.2c.5 0 .8.4.8.8s-.3.7-.6.7H6.6c-2.2-.1-4.1 1.6-4.2 3.8V14.2c0 2.6 1.5 4.3 4 4.4H15.3c2.2.1 4.1-1.6 4.2-3.8v-4.6c0-.4.3-.7.7-.7.4 0 .7.3.7.6v4.1c0 3.4-2.2 5.8-5.4 5.9H6.6Zm.3-5.3c-.4 0-.7-.3-.7-.7l.1-3.7c0-.7.3-1.4.8-2l7.3-7.3c1.2-1.2 3.2-1.2 4.4 0L20 2.3c1.2 1.2 1.2 3.1 0 4.3l-7.3 7.3c-.5.5-1.3.8-2 .8l-3.8.1Zm1.3-5.4c-.3.3-.4.6-.4.9l-.1 3h2.9c.3 0 .6-.1.9-.3l.1-.1 5.7-5.7-3.5-3.5-5.6 5.7Zm10.2-3.3.6-.6c.6-.6.6-1.6 0-2.3L17.8 2c-.6-.6-1.6-.6-2.3 0l-.6.6 3.5 3.5Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default EditSquare;
