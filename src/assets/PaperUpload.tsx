import React, {SVGProps} from 'react';

function PaperUpload(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={20} viewBox="0 0 18 20" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5 20c-2.5 0-4.6-2-4.6-4.5V4.6c0-1.2.5-2.3 1.4-3.2C2.7.6 3.8.1 5 .1H11.7c.2 0 .4.1.5.2l5.1 5.3c.1.1.2.3.2.5v9.2c0 2.5-2 4.6-4.5 4.6H5v.1ZM5 1.6c-1.7 0-3 1.3-3.1 3v10.7c0 .8.3 1.6.9 2.2.6.6 1.4 1 2.2 1h8c.8 0 1.6-.4 2.1-.9.6-.6.9-1.4.9-2.2V7.1h-2c-1.8 0-3.2-1.4-3.3-3.2V1.6H5Zm7.2 2.2c0 1 .8 1.8 1.8 1.8h1.2l-3-3.1v1.3ZM7.9 14.2V9.4L6.3 11c-.3.3-.7.3-1 .1l-.1-.2c-.3-.3-.3-.7-.1-1h.1L8 7c.3-.3.8-.3 1.1 0l2.8 2.8c.3.3.3.8 0 1.1-.3.3-.7.3-1 .1l-.1-.1-1.5-1.5v4.7c0 .4-.3.7-.8.7-.3.1-.6-.2-.6-.6Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default PaperUpload;
