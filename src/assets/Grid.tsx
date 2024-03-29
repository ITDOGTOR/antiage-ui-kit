import React, {SVGProps} from 'react';

function Grid(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={14} viewBox="0 0 17 14" width={17} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M2.195 13.316a1.47 1.47 0 0 1-1.08-.442 1.47 1.47 0 0 1-.442-1.08V2.207c0-.426.147-.786.442-1.08a1.47 1.47 0 0 1 1.08-.442h12.956c.425 0 .785.147 1.08.442.294.294.442.654.442 1.08v9.587c0 .425-.147.785-.442 1.08a1.47 1.47 0 0 1-1.08.442H2.195ZM1.936 6.37h3.652V1.948H2.195a.252.252 0 0 0-.186.073.252.252 0 0 0-.073.186v4.162Zm4.915 0h3.644V1.948H6.85v4.42Zm4.907 0h3.652V2.207a.252.252 0 0 0-.073-.186.252.252 0 0 0-.186-.073h-3.393v4.42Zm-6.17 5.684V7.632H1.936v4.162c0 .075.024.137.073.186.048.049.11.073.186.073h3.393Zm1.263 0h3.644V7.632H6.85v4.421Zm4.907 0h3.393a.252.252 0 0 0 .186-.073.252.252 0 0 0 .073-.186V7.632h-3.652v4.421Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Grid;
