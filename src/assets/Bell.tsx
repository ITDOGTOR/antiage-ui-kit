import React, {SVGProps} from 'react';

function Bell(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={22} viewBox="0 0 18 22" width={18} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="m15.768 13.422-.084-.126V7.804a6.348 6.348 0 1 0-12.695 0V13.297l-.084.126L1.39 15.69v.001a1.362 1.362 0 0 0 1.132 2.113H16.15a1.363 1.363 0 0 0 1.132-2.102l-1.514-2.28ZM8.046 20.132c.377.267.828.41 1.29.412a2.24 2.24 0 0 0 1.734-.827H7.603c.127.157.276.297.443.415Z"
				stroke="currentColor"
			/>
		</svg>
	);
}

export default Bell;
