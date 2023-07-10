import React, {SVGProps} from 'react';

function Video(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 21 16" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M4.3 16c-1.2 0-2.3-.4-3.1-1.2-.8-.8-1.2-1.9-1.2-3v-7c0-1.1.4-2.2 1.2-3C2 1 3.1.6 4.3.6h6.3c1.2 0 2.3.4 3.1 1.2.7.7 1.1 1.6 1.2 2.6l2.7-1.1c.9-.4 2 .1 2.4 1 .1.2.1.4.1.5v6.8c0 1-.8 1.8-1.8 1.8-.2 0-.4 0-.6-.1h-.1L15 12.2c-.1 1-.5 1.9-1.2 2.6-.8.8-2 1.2-3.1 1.2H4.3ZM1.5 4.8v7c-.1 1.4 1 2.6 2.4 2.7h6.7c1.4.1 2.7-.9 2.8-2.3V4.8c.1-1.4-1-2.6-2.4-2.7H4.3C2.8 2 1.6 3 1.5 4.4c-.1.1-.1.3 0 .4ZM18 11.9c.2.1.3 0 .4-.2V5c0-.2-.1-.3-.3-.3H18L14.8 6v4.6l3.2 1.3Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Video;
