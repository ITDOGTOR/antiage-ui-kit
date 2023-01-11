import React, {SVGProps} from 'react';

function LinkAttachment(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={14} viewBox="0 0 15 14" width={15} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m6.175 4.177 2.822-2.822c1.13-1.13 2.936-1.13 3.952 0 1.129 1.129 1.129 2.935 0 3.951l-2.71 2.823M8.546 9.822l-2.823 2.823c-1.129 1.13-2.935 1.13-3.951 0-1.13-1.129-1.13-2.935 0-3.952l2.822-2.822M4.594 9.823l5.645-5.646"
				stroke="currentColor"
			/>
		</svg>
	);
}

export default LinkAttachment;
