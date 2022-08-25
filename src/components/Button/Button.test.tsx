import {render, screen} from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
	test('Should render without children', () => {
		render(
			<Button>
				<div>test</div>
			</Button>,
		);

		expect(screen.getByText('test')).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const customClass = 'class';
		const button = render(<Button customClass={customClass} />);

		expect(button).toMatchSnapshot();
	});
});
