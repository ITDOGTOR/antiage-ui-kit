import React, {SVGProps} from 'react';

function Bookmark(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 17 21" width={17} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m14.5 19.9-5.6-3.1-5.6 3.1c-.2.1-.5.2-.7.2-.5 0-.9-.2-1.3-.6l-.1-.1-.1-.2c-.1-.2-.2-.5-.2-.8V4.5c0-1.2.5-2.4 1.4-3.3C3.3.4 4.7 0 6 .1h6c3.2 0 5 1.6 5 4.3v14.1c0 .4-.2.9-.5 1.2-.3.2-.8.4-1.2.4-.3 0-.5-.1-.8-.2Zm-4.9-4.4 5.6 3.1h.1c.1 0 .1 0 .2-.1 0 0 .1-.1.1-.2V4.4c0-1.9-1.2-2.8-3.6-2.8H6c-2.4 0-3.6 1-3.6 3v14c0 .1.1.1.2.1h.1l5.6-3.1c.4-.3.9-.3 1.3-.1ZM5.5 7.9c-.4 0-.7-.4-.7-.8s.3-.6.6-.7h7c.4 0 .7.3.7.7 0 .3-.3.6-.6.7h-7v.1Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Bookmark;
