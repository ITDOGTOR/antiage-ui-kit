import React from 'react';

import Paper from './Paper';

export default {
	title: 'Paper',
	component: Paper,
	description: 'this component',
	argTypes: {
		children: {
			description: 'React.ReactNode',
		},
	},
	parameters: {
		docs: {
			page: null,
		},
		backgrounds: {
			default: 'main',
			values: [{name: 'main', value: '#f2f5fa'}],
		},
	},
};

export function Empty() {
	return <Paper> </Paper>;
}

export function WithChildren() {
	return (
		<Paper>
			<h1>This is Paper component</h1>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur commodi cupiditate dignissimos
				ducimus fuga fugiat itaque minima minus necessitatibus nesciunt non placeat repudiandae soluta tempore, unde vel
				voluptas.
			</p>

			<button type="button">Click</button>
		</Paper>
	);
}
