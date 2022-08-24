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

describe('Paper', () => {
	test('Render without children and customClass', () => {
		const paper = render(<Paper> </Paper>);
		expect(paper).toMatchSnapshot();
	});

	test('Snapshot with customClass', () => {
		const paper = render(<Paper customClass={customClass}> </Paper>);
		expect(paper).toMatchSnapshot();
	});

	test('Should render with children as string', () => {
		render(<Paper>{childString}</Paper>);

		expect(screen.getByText('children')).toBeInTheDocument();
	});

	test('Contain all elements', () => {
		render(<Paper>{childWithElements}</Paper>);

		expect(screen.getByText('title')).toBeInTheDocument();
		expect(screen.getByText('description')).toBeInTheDocument();
		expect(screen.getByText('button')).toBeInTheDocument();
	});
});
