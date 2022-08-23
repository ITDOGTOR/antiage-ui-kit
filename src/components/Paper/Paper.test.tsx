import {render, screen} from '@testing-library/react';
import React from 'react';

import Paper from './Paper';

const childString = 'children';
const customClass = 'custom';
const childWithElements = (
	<>
		<h1>title</h1>
		<p>description</p>
		<button type="button">button</button>
	</>
);

describe('Paper component', () => {
	test('Paper render without children and customClass', () => {
		const paper = render(<Paper> </Paper>);
		expect(paper).toMatchSnapshot();
	});

	test('Paper snapshot with customClass', () => {
		const paper = render(<Paper customClass={customClass}> </Paper>);
		expect(paper).toMatchSnapshot();
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
});
