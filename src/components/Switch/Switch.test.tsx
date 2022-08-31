import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME, IS_DISABLED} from '../../constants';
import Switch from './Switch';

describe('Switch', () => {
	test('Should render without children', () => {
		render(<Switch onChange={() => {}}>{CHILD}</Switch>);

		expect(screen.getByText('child')).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const switchComponent = render(<Switch className={CLASS_NAME} onChange={() => {}} />);
		expect(switchComponent).toMatchSnapshot();
	});

	describe('disable prop', () => {
		test('Must be inactive', () => {
			const {getByTestId} = render(<Switch disabled={IS_DISABLED} onChange={() => {}} />);

			const switchComponent = getByTestId('switch-input');
			expect(switchComponent).toBeDisabled();
		});

		test('Must be active', () => {
			const {getByTestId} = render(<Switch disabled={!IS_DISABLED} onChange={() => {}} />);

			const switchComponent = getByTestId('switch-input');
			expect(switchComponent).toBeEnabled();
		});
	});

	test('Should be displayed with a different theme', () => {
		const {getByTestId} = render(<Switch theme="white" onChange={() => {}} />);

		const switchComponent = getByTestId('switch-span');
		expect(switchComponent).toHaveClass('slider-white round');
	});

	test('Should be displayed with a different theme', () => {
		const {getByTestId} = render(<Switch theme="gray" onChange={() => {}} />);

		const switchComponent = getByTestId('switch-span');
		expect(switchComponent).toHaveClass('slider-gray round');
	});
});
