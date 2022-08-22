import React from 'react';

import TestComponent from './TestComponent';

export default {
	title: 'TestComponent',
};

export function WithText() {
	return <TestComponent content={<h2>Made with love by Harvey</h2>} heading="I am a test component" />;
}

export function WithButtons() {
	return (
		<TestComponent
			content={
				<div>
					<button type="button" onClick={() => alert('You clicked me!')}>
						Click me
					</button>
				</div>
			}
			heading="I have a button"
		/>
	);
}
