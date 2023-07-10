import React, {SVGProps} from 'react';

function Game(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.8 20.1h-.2c-3 0-5.5-2.4-5.6-5.4V10C.9 6.9 3.4 4.3 6.5 4.2h4.3V4c0-.7-.6-1.2-1.3-1.2h-1c-1.1 0-1.9-.9-2-1.9.1-.5.4-.8.8-.8s.7.3.7.7c0 .3.3.6.6.6h1c1.4 0 2.6 1.2 2.6 2.6v.2h2.9c1.5 0 2.9.5 4 1.6 1.1 1 1.7 2.4 1.8 3.9v4.7c.1 3.1-2.4 5.7-5.5 5.8h-4.5c-1.3-.1-2.7-.1-4.1-.1Zm4.1-1.4h4.5c2.4-.1 4.2-2 4.2-4.4V9.7c-.1-2.3-2.1-4.1-4.4-4.1H6.5c-2.4.1-4.2 2-4.2 4.4v4.6c.1 2.3 2 4.1 4.2 4.1h4.4ZM7.3 14v-1.1h-1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.6-.7h1.1v-1c0-.4.3-.7.7-.7.4 0 .7.3.7.6v1.1h1c.4 0 .7.3.7.7 0 .4-.3.7-.6.7H8.7v1c0 .4-.3.7-.8.7-.2 0-.5-.3-.6-.6Zm8.3.6c-.4 0-.7-.3-.7-.7 0-.4.3-.7.6-.7h.2c.4 0 .7.3.7.7 0 .4-.3.7-.6.7h-.2ZM14 11.2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.6-.7h.2c.4 0 .7.3.7.7 0 .4-.3.7-.6.7H14Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Game;
