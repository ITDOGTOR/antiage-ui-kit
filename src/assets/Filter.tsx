import React, {SVGProps} from 'react';

function Filter(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={20} viewBox="0 0 21 20" width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M13.4 15.9c0-2.1 1.6-3.8 3.7-3.8s3.8 1.6 3.8 3.7-1.6 3.8-3.7 3.8-3.8-1.7-3.8-3.7Zm1.8 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm-13.4.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9H9c.5 0 .9.4.9.9s-.4.9-.9.9H1.8ZM.9 4.3C1 2.3 2.6.6 4.7.6c2.1 0 3.7 1.6 3.8 3.7C8.5 6.4 6.8 8 4.7 8 2.6 8 1 6.4.9 4.3Zm1.8 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Zm10.1.9c-.5 0-.9-.4-.9-.8 0-.5.4-.9.8-.9H20c.5 0 .9.4.9.8 0 .5-.4.9-.8.9h-7.3Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Filter;
