import '../../ui-kit.css';

// @ts-ignore
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
			values: [{name: 'main', value: '#f2f5fa'}],
		},
	},
};

export function Empty(args) {
	return <Paper>{args}</Paper>;
}

Empty.args = {
	children: '',
};

export function WithTitle() {
	return (
		<Paper>
			<h1>This Paper component</h1>
		</Paper>
	);
}

export function FewItems() {
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
