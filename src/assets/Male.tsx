import React, {SVGProps} from 'react';

function Male(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 17 18" width={17} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M12.068 5.432a6.776 6.776 0 1 0-9.583 9.583 6.776 6.776 0 0 0 9.583-9.583Zm0 0L16.26 1.24M11.708 1h3.945c.468 0 .847.38.847.847v3.945"
				stroke="currentColor"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export default Male;
