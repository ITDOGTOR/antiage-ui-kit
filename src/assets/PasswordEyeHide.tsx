import * as React from 'react';
import {SVGProps} from 'react';

function SvgPasswordEyeHide(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={14} role="img" width={15} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M5.577 8.504a2.054 2.054 0 0 1-.596-1.457c0-1.126.927-2.119 2.119-2.119.53 0 1.06.199 1.456.596M9.086 7.379a1.967 1.967 0 0 1-1.655 1.655"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
			/>
			<path
				d="M3.457 10.557a8.98 8.98 0 0 1-2.582-3.51c.53-1.39 1.457-2.582 2.582-3.575.994-.794 2.252-1.258 3.51-1.258s2.516.464 3.51 1.324M11.933 4.928c.463.662.86 1.325 1.192 2.053-1.325 3.046-3.576 4.834-6.092 4.834-.596 0-1.126-.066-1.656-.265M12.265 1.75 1.802 12.212"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={10}
			/>
		</svg>
	);
}

export default SvgPasswordEyeHide;
