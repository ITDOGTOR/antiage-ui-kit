import React, {SVGProps} from 'react';

function Image(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 22 21" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.6 20.1c-1.5.1-3-.5-4.1-1.7C1.4 17.2.9 15.7.9 14.1V6c-.1-1.6.5-3.1 1.6-4.3C3.6.7 5.1.1 6.6.1h8.7c1.5-.1 3 .5 4.1 1.7C20.5 3 21 4.5 21 6.1v8.2c.1 1.6-.5 3.1-1.6 4.3-1.1 1.1-2.6 1.7-4.1 1.7H6.6v-.2Zm0-1.5h8.7c1.1 0 2.2-.4 3-1.2.8-.9 1.2-2 1.1-3.2v-.8c-.1-.1-.2-.2-.4-.3l-.7-.7c-.5-.5-1-.9-1.5-1.2-.8-.4-1.7-.2-2.2.6l-.1.2c0 .1-.1.1-.1.2l-.4.6c-.4.9-1.1 1.7-2 2.2-.9.5-2 .4-2.8-.2l-.4-.3-.4-.2c-.2-.1-.3-.2-.5-.3-.7-.3-1.3 0-2.1 1L4 17.1l-.3.4c.8.7 1.8 1.1 2.9 1.1ZM2.5 6v8.2c0 .7.1 1.4.4 2L4 14.8l.5-.6c1.3-1.6 2.5-2.3 4-1.6.2.1.5.2.7.4l.7.4c.7.4 1 .5 1.5.2s.9-.7 1.2-1.3l.3-.5.2-.3c.1-.2.3-.5.5-.7.9-1.4 2.7-1.8 4.2-.9.7.4 1.3.9 1.9 1.5V6c.1-1.2-.4-2.3-1.1-3.2-.8-.8-1.9-1.2-3-1.2h-9C4.1 1.6 2.5 3.3 2.5 6Zm2.7.9c0-1.4 1.2-2.6 2.6-2.6 1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.1 2.6-2.6 2.6-1.4 0-2.6-1.2-2.6-2.6Zm1.5 0c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Image;
