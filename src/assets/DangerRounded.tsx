import React, {SVGProps} from 'react';

function DangerRounded(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M.9 10.1c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-9.9-4.5-10-10Zm1.6 0c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5-8.5 3.8-8.5 8.5Zm7.7 3.8c0-.4.3-.7.6-.7h.1c.4 0 .7.3.7.8 0 .4-.3.7-.6.7h-.1c-.4-.1-.7-.4-.7-.8Zm0-3.1V6.3c0-.4.3-.7.8-.7.4 0 .7.3.7.6v4.5c0 .4-.3.7-.8.7-.3.1-.6-.2-.7-.6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default DangerRounded;
