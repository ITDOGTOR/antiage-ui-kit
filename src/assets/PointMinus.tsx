import React, {SVGProps} from 'react';

function PointMinus(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={18} viewBox="0 0 18 18" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<rect fill="url(#point-minus)" height={18} rx={9} width={18} />
			<path
				d="M8.742 7.929a1.28 1.28 0 0 1 .334 0h.826c.406-.007.81.056 1.196.187.321.113.619.286.879.509a2.4 2.4 0 0 1 .562.768c.128.305.194.633.193.964.002.33-.067.656-.202.956-.14.305-.35.572-.615.776a3.245 3.245 0 0 1-1.055.51c-.49.132-.995.195-1.503.187H6.88a.872.872 0 0 1-.622-.262.9.9 0 0 1-.257-.631v-5.75a.9.9 0 0 1 .257-.631.872.872 0 0 1 .622-.262h4.043c.233 0 .457.094.621.262a.9.9 0 0 1 .258.63v.25a.9.9 0 0 1-.258.632.872.872 0 0 1-.621.262h-2.18v.643Zm0 1.875v1.071h.607a.606.606 0 0 0 .448-.17.481.481 0 0 0 .184-.366.516.516 0 0 0-.184-.375.644.644 0 0 0-.448-.16h-.607Z"
				fill="#fff"
			/>
			<defs>
				<linearGradient gradientUnits="userSpaceOnUse" id="point-minus" x1={0} x2={18} y1={0} y2={18}>
					<stop stopColor="#FF614D" />
					<stop offset={1} stopColor="#F7924A" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default PointMinus;
