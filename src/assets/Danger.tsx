import React, {SVGProps} from 'react';

function Danger(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={19} viewBox="0 0 21 19" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M3.7 18.3h-.1c-.2 0-.5-.1-.7-.1l-.2-.1c-1.4-.6-2.1-2.2-1.6-3.6l.1-.2L8.5 1.6C9.3.2 11-.3 12.3.5c.4.2.8.6 1 .9l.1.2 7.3 12.8c.4 1 .2 2.1-.5 2.9-.5.6-1.1.9-1.9 1H3.7Zm14.5-1.5c.7 0 1.3-.7 1.3-1.4V15.1L12.1 2.3c-.4-.6-1.2-.9-1.8-.5-.2.1-.3.2-.4.4l-.1.1-7.3 12.6c-.3.7 0 1.5.7 1.7.1 0 .2.1.3.1h.2l14.5.1Zm-8-3.4c0-.4.3-.8.8-.8.4 0 .7.3.8.7 0 .4-.3.8-.8.8s-.8-.3-.8-.7Zm0-2.8V7.4c0-.4.3-.7.8-.7.4 0 .7.3.7.6v3.2c0 .4-.3.7-.8.7-.3 0-.6-.2-.7-.6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Danger;
