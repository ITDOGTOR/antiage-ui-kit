import React, {SVGProps} from 'react';

function TableChart(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 19 16" width={19} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m5.238 16-.93-.929 5.777-5.79 3.085 3.085 4.56-4.56.943.941-5.503 5.49-3.085-3.085L5.238 16Zm-2.726-1.017c-.445 0-.822-.154-1.13-.463a1.538 1.538 0 0 1-.463-1.13V1.593c0-.445.154-.822.463-1.13A1.538 1.538 0 0 1 2.512 0H14.31c.445 0 .822.154 1.13.463.309.308.463.685.463 1.13v3.702H2.241v8.095c0 .068.028.13.085.186a.26.26 0 0 0 .186.085v1.322Zm-.271-11.01H14.58v-2.38a.26.26 0 0 0-.085-.186.26.26 0 0 0-.186-.085H2.512a.26.26 0 0 0-.186.085.26.26 0 0 0-.085.186v2.38Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default TableChart;
