import React, {SVGProps} from 'react';

function Home(props: SVGProps<SVGSVGElement>) {
	return (
		<svg fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M15.7 20.1h-2c-.9 0-1.7-.7-1.8-1.7v-3c0-.3-.2-.6-.5-.6H8.6c-.3 0-.6.2-.6.5v3.2c-.1.9-.8 1.5-1.7 1.6H4.4c-2.1 0-3.8-1.6-3.9-3.7V8.1c0-.8.4-1.6 1-2.2l6.2-5c1.3-1 3-1.1 4.4-.1l.1.1 6.1 4.9c.7.5 1.1 1.3 1.2 2.1V16.2c-.1 2.1-1.7 3.8-3.8 3.9Zm-7.2-6.7h2.8c1.1 0 1.9.8 2 1.9v3c0 .2.1.4.4.4h1.9c1.3 0 2.4-1 2.5-2.3V8.1c0-.4-.2-.8-.5-1.1l-.1-.1L11.4 2c-.5-.3-1-.5-1.5-.5-.4 0-.9.1-1.2.4l-.2.1-6 4.9c-.4.2-.6.6-.7 1V16.2c0 1.3 1 2.4 2.4 2.5h1.9c.2 0 .4-.1.4-.4v-3c.1-1 .9-1.8 2-1.9Z"
				fill="currentColor"
			/>
		</svg>
	);
}
export default Home;
