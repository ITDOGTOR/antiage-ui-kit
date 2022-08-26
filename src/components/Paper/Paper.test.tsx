import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CHILDREN, CLASS_NAME} from '../../constants';
import Paper from './Paper';

describe('Paper', () => {
	test('Should render without children', () => {
		const paper = render(<Paper />);

		expect(paper).toMatchSnapshot();
	});

	test('Should render with className', () => {
		const paper = render(<Paper className={CLASS_NAME} />);

		expect(paper).toMatchSnapshot();
	});

	test('Should render with children as string', () => {
		render(<Paper>{CHILD}</Paper>);

		expect(screen.getByText('child')).toBeInTheDocument();
	});

	test('Should render with children as ReactNode', () => {
		render(<Paper>{CHILDREN}</Paper>);

		expect(screen.getByText('title')).toBeInTheDocument();
		expect(screen.getByText('description')).toBeInTheDocument();
		expect(screen.getByText('button')).toBeInTheDocument();
	});
});
