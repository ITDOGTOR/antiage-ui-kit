import React, {SVGProps} from 'react';

function Filter2(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={23} viewBox="0 0 23 23" width={23} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M9.2 22.1c-.4 0-.8-.3-.8-.8v-8L1.5 5.7c-.3-.4-.6-.9-.6-1.4V2.4C.9 1.1 1.9.1 3.2.1h17.5C22 .1 23 1.2 23 2.4v1.7c0 .6-.2 1.2-.7 1.6l-7.4 7.5v5.7c0 .3-.1.5-.3.6l-.1.1-4.9 2.3c-.2.2-.3.2-.4.2Zm-6-20.5c-.4 0-.8.4-.7.8v1.7c0 .2.1.4.2.5l7.1 7.8c.1.1.2.3.2.5v7.2l3.4-1.6V13c0-.2 0-.3.1-.4l.1-.1 7.7-7.8c.1-.2.2-.4.2-.6V2.4c0-.4-.3-.8-.7-.8H3.2Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Filter2;
