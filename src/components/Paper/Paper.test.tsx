import {render, screen} from '@testing-library/react';
// @ts-ignore
import React from 'react';

import Paper from './Paper';

const childString = 'children';
const childWithElements = (
	<>
		<h1>title</h1>
		<p>description</p>
		<button type="button">button</button>
	</>
);

test('Paper should render without children', () => {
	render(<Paper> </Paper>);
});

test('Paper should render with children as string', () => {
	render(<Paper>{childString}</Paper>);

	expect(screen.getByText('children')).toBeInTheDocument();
});

test('All elements must be inside Paper', () => {
	render(<Paper>{childWithElements}</Paper>);

	expect(screen.getByText('title')).toBeInTheDocument();
	expect(screen.getByText('description')).toBeInTheDocument();
	expect(screen.getByText('button')).toBeInTheDocument();
});
