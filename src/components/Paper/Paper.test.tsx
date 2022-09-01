import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME} from '../../constants';
import Paper from './Paper';

describe('Paper', () => {
	test('Should render with children', () => {
		render(<Paper>{CHILD}</Paper>);

		expect(screen.getByText(CHILD)).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const {container} = render(<Paper className={CLASS_NAME} />);

		expect(container.firstChild).toHaveClass(CLASS_NAME);
	});
});
