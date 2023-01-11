import React, {SVGProps} from 'react';

function Upload(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={23} viewBox="0 0 22 23" width={22} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M6.105 8.828h-.947a3.886 3.886 0 0 0-3.895 3.895v5.053c0 2.105 1.79 3.894 3.895 3.894h11.684a3.886 3.886 0 0 0 3.895-3.894v-5.158a3.886 3.886 0 0 0-3.895-3.895h-.947M11.053 1.67v12.632M8 4.723l3.052-3.053 3.053 3.053"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			/>
		</svg>
	);
}

export default Upload;
