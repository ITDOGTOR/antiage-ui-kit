import React, {SVGProps} from 'react';

function TicketStar(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={19} viewBox="0 0 21 19" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M4.1 18.3c-2.3 0-4.1-1.9-4.1-4.1v-2.7c0-.4.3-.7.8-.8.8 0 1.5-.7 1.5-1.5S1.7 7.8.9 7.8H.8C.4 7.8 0 7.5 0 7V4.2C0 2 1.8.1 4.1.1h11.7c2.3 0 4.1 1.9 4.1 4.1v2.7c0 .4-.3.8-.7.8h-.1c-.8.1-1.4.8-1.3 1.6.1.8.7 1.3 1.5 1.3.4 0 .7.3.8.8v2.7c0 2.3-1.9 4.1-4.1 4.1l-11.9.1ZM1.5 4.2v2.1h.1c1.2.4 2 1.5 2.1 2.7v.2c0 1.3-.9 2.5-2.1 2.9h-.1v2c0 1.4 1.1 2.5 2.5 2.6H15.9c1.5 0 2.6-1.2 2.6-2.6v-2h-.1c-1.2-.4-2.1-1.4-2.1-2.7v-.2c0-1.3.9-2.5 2.1-2.9h.1v-2c0-1.4-1.1-2.6-2.5-2.6H4.1c-1.5-.1-2.6 1.1-2.6 2.5Zm5.9 8.1c-.2-.2-.3-.5-.3-.7v-.1l.3-1.6-1.1-1c-.4-.4-.4-1 0-1.4.1-.1.2-.2.4-.3h.1L8.4 7l.7-1.4c.2-.5.8-.7 1.3-.5.2.1.3.2.4.4l.7 1.4 1.6.2c.5.1.9.6.8 1.1 0 .2-.1.3-.2.5l-.1.1-1.1 1.1.3 1.6c.1.3 0 .6-.2.8-.2.2-.5.4-.8.4-.1 0-.2 0-.4-.1h-.1l-1.4-.7-1.4.7c-.1.1-.3.1-.4.1-.3-.1-.5-.2-.7-.4Zm2.8-2.1h.1l.8.4-.2-.9c0-.2 0-.4.1-.6l.1-.1.6-.6-.9-.1c-.1.1-.3 0-.4-.2l-.1-.1-.4-.8-.3.8c-.2.2-.4.4-.6.4l-.9.1.6.7c.2.1.2.3.2.6v.1l-.2.9.8-.4c.3-.2.5-.2.7-.2Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default TicketStar;