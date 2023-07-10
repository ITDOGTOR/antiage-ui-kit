import * as React from 'react';
import {SVGProps} from 'react';

function Letter(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={19} viewBox="0 0 22 19" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.4 18.1c-1.5 0-2.9-.6-3.9-1.7S.9 13.8 1 12.2V6c0-1.5.5-3 1.5-4.2C3.5.7 4.9.1 6.4.1h9.1C18.6.1 21 2.7 21 5.7v6.4c.1 1.5-.4 3-1.5 4.1-1 1.1-2.5 1.8-4 1.8l-9.1.1ZM2.5 6v6.3c-.2 2.2 1.5 4.1 3.7 4.3h9.4c1.1 0 2.1-.5 2.9-1.3.8-.8 1.1-1.9 1.1-3V5.9c.1-1.1-.3-2.2-1.1-3-.7-.8-1.8-1.3-2.9-1.3h-9c-2.2 0-4 1.9-4 4.1-.1.1-.1.2-.1.3Zm6.8 4.2-.1-.1L5 6.8c-.3-.2-.3-.7-.1-1.1.2-.3.6-.4 1-.2l.1.1 4.1 3.3c.5.4 1.1.4 1.6.1l.1-.1 4.1-3.3c.3-.3.8-.2 1.1.1.2.3.2.7 0 1l-.1.1-4.1 3.3c-1 .8-2.4.8-3.5.1Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Letter;
