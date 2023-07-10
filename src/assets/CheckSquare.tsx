import React, {SVGProps} from 'react';

function CheckSquare(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 22 21" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.6 20.1c-1.5 0-3-.5-4.1-1.7C1.4 17.2.9 15.7.9 14.1V6c-.1-1.6.5-3.1 1.6-4.3C3.6.7 5.1.1 6.6.1h8.7c1.5 0 3 .5 4.1 1.7C20.5 3 21 4.5 21 6.1v8.2c.1 1.6-.5 3.1-1.6 4.3-1.1 1.1-2.6 1.7-4.1 1.7H6.6v-.2ZM2.5 6v8.2c0 2.7 1.6 4.4 4.2 4.4h8.7c2.5 0 4.2-1.7 4.2-4.4V6c.1-1.2-.4-2.3-1.1-3.2-.8-.8-1.9-1.2-3-1.2H6.6C4.1 1.6 2.5 3.3 2.5 6Zm6.8 7.1-2.5-2.4c-.3-.3-.3-.8 0-1.1.3-.3.7-.3 1-.1l.1.1 1.8 1.8 4.2-4.2c.3-.3.8-.3 1.1 0 .3.3.3.7.1 1l-.1.1-4.7 4.7c-.3.3-.7.3-1 .1Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default CheckSquare;
