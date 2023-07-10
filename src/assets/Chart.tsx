import React, {SVGProps} from 'react';

function Chart(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 21 21" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.6 20.1c-1.5 0-3-.5-4.1-1.6-1-1.2-1.6-2.7-1.5-4.3V6c-.1-1.6.5-3.1 1.6-4.2C3.6.6 5.1.1 6.6.1h8.7c1.5 0 3 .5 4.1 1.6 1 1.2 1.6 2.7 1.5 4.2v8.2c.1 1.6-.5 3.1-1.5 4.3-1.1 1.1-2.6 1.7-4.1 1.6H6.6v.1ZM2.3 6v8.2c0 2.7 1.7 4.5 4.2 4.5h8.7c2.6 0 4.2-1.8 4.2-4.5V6c0-2.7-1.7-4.5-4.2-4.5H6.6C4 1.5 2.3 3.3 2.3 6Zm12.3 8.9v-3.1c0-.4.3-.7.7-.7.3 0 .6.3.7.6v3.1c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.6Zm-4.3 0V5.4c0-.4.3-.7.7-.7.3 0 .6.3.7.6v9.5c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.6Zm-4.4 0V8.4c0-.4.3-.7.7-.7.3 0 .6.3.7.6v6.5c0 .4-.3.7-.7.7-.3 0-.6-.2-.7-.6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Chart;