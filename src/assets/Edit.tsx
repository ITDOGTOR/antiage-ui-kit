import React, {SVGProps} from 'react';

function Edit(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 18 18" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M10.67 17h6.531M9.801 1.707a2.047 2.047 0 0 1 2.805-.276l.133.123L14.16 2.67a1.985 1.985 0 0 1 .656 2.733l-.103.153-8.485 10.82a1.484 1.484 0 0 1-1.177.583H1.776l-.737-3.183a1.536 1.536 0 0 1 .287-1.29L9.8 1.707ZM8.214 3.734l4.913 3.85"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Edit;
