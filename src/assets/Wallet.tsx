import React, {SVGProps} from 'react';

function Wallet(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={16} viewBox="0 0 18 16" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M17 10.178h-3.35a2.252 2.252 0 0 1-2.261-2.262c0-1.256 1.005-2.261 2.177-2.261h3.35M13.986 7.833h-.252"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.358.63h7.203a4.326 4.326 0 0 1 4.355 4.355v6.03a4.326 4.326 0 0 1-4.355 4.355H5.358a4.326 4.326 0 0 1-4.355-4.355v-6.03C.919 2.64 2.929.629 5.358.629ZM4.771 4.398h4.523"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Wallet;
