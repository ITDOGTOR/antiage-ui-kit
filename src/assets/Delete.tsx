import React, {SVGProps} from 'react';

function Delete(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={17} viewBox="0 0 16 17" width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M14.126 6.28s-.432 5.781-.777 8.283c0 1.036-.949 1.899-1.984 1.899h-.086c-2.244 0-4.487.086-6.73 0a1.977 1.977 0 0 1-1.985-1.812c-.258-2.502-.776-8.283-.776-8.283M15.334 3.433H.666M12.486 3.433c-.69 0-1.294-.517-1.38-1.121l-.172-1.035C10.847.759 10.33.5 9.898.5h-3.71c-.518 0-.949.345-1.035.777l-.26 1.035c-.172.69-.69 1.121-1.38 1.121"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default Delete;
