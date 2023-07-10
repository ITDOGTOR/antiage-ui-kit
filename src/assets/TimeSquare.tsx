import React, {SVGProps} from 'react';

function TimeSquare(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 22 21" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.6 20.1c-1.5 0-3-.5-4.1-1.7C1.4 17.2.9 15.7.9 14.1V6c-.1-1.6.5-3.1 1.6-4.3C3.6.7 5.1.1 6.6.1h8.7c1.5 0 3 .5 4.1 1.7C20.5 3 21 4.5 21 6.1v8.2c.1 1.6-.5 3.1-1.6 4.3-1.1 1.1-2.6 1.7-4.1 1.7H6.6v-.2ZM2.5 6v8.2c-.1 1.2.4 2.3 1.1 3.2.8.8 1.9 1.2 3 1.2h8.7c2.5 0 4.2-1.7 4.2-4.4V6c.1-1.2-.4-2.3-1.1-3.2-.8-.8-1.9-1.2-3-1.2H6.6C4.1 1.6 2.5 3.3 2.5 6Zm11.6 6.8-3.5-2.1c-.2-.1-.3-.3-.4-.5V5.7c0-.4.3-.7.8-.7.4 0 .7.3.7.6v4l3 1.8c.3.2.5.6.3.9v.1c-.2.4-.6.6-.9.4Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default TimeSquare;
