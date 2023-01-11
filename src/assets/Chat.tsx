import React, {SVGProps} from 'react';

function Chat(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={22} viewBox="0 0 22 22" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M11 .887c-5.543 0-10 4.456-10 10 0 2.826 1.196 5.434 3.043 7.282l-2.826 2.718H11c5.544 0 10-4.457 10-10 0-5.544-4.456-10-10-10Z"
				data-svg="1"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
			<path
				d="M6.109 12.191c-.761 0-1.305-.543-1.305-1.304s.544-1.305 1.305-1.305c.76 0 1.304.544 1.304 1.305 0 .76-.543 1.304-1.304 1.304ZM11 12.191c-.761 0-1.304-.543-1.304-1.304S10.239 9.582 11 9.582c.76 0 1.304.544 1.304 1.305 0 .76-.543 1.304-1.304 1.304ZM15.89 12.191c-.76 0-1.304-.543-1.304-1.304s.543-1.305 1.304-1.305c.76 0 1.304.544 1.304 1.305 0 .76-.652 1.304-1.304 1.304Z"
				data-svg="2"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Chat;
