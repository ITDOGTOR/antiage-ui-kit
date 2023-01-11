import React, {SVGProps} from 'react';

function Document(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={15} viewBox="0 0 14 15" width={14} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M8.962.842h-4.82a2.75 2.75 0 0 0-1.937.783 2.777 2.777 0 0 0-.836 1.922v7.797a2.793 2.793 0 0 0 .777 1.977c.508.53 1.205.837 1.938.852h5.848a2.81 2.81 0 0 0 1.922-.874c.503-.53.782-1.237.778-1.97V4.66L8.962.842Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.766.827v2.116c0 .497.195.973.544 1.325.349.351.822.55 1.316.552h1.998M8.97 10.907H4.627M8.97 8.726H4.627M7.052 6.543H4.627"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Document;
