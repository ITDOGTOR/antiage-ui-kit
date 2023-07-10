import React, {SVGProps} from 'react';

function Swap(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={19} viewBox="0 0 21 19" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M15.3 17.9c0-.1 0-.1 0 0l-4.2-4.2c-.3-.3-.3-.8 0-1.1.3-.3.7-.3 1-.1l.1.1 2.8 2.8V3.6c0-.4.3-.7.8-.7.4 0 .7.3.7.6v11.9l2.8-2.8c.3-.3.8-.3 1.1 0 .3.3.3.7.1 1l-.1.1-4.1 4.1c-.2.3-.6.3-1 .1ZM5.1 14.7v-12L2.3 5.6c-.3.3-.7.3-1 .1l-.1-.1c-.3-.3-.3-.7-.1-1l.1-.1L5.3.4c.1-.1.2-.1.3-.2h.2c.1 0 .2.1.3.1 0 0 .1 0 .1.1l4.1 4.1c.3.3.3.8 0 1.1-.3.3-.7.3-1 .1l.1-.1-2.8-2.8v11.8c0 .4-.3.7-.8.7-.3 0-.6-.3-.7-.6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Swap;
