import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME, IS_DISABLED, THEME} from '../../constants';
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

	test('Must be inactive', () => {
		const {getByTestId} = render(<Switch disabled={IS_DISABLED} onChange={() => {}} />);

		const switchComponent = getByTestId('Switch');
		expect(switchComponent).toBeDisabled();
	});

	test('Must be active', () => {
		const {getByTestId} = render(<Switch disabled={!IS_DISABLED} onChange={() => {}} />);

		const switchComponent = getByTestId('Switch');
		expect(switchComponent).toBeEnabled();
	});

	test('Should be displayed with a different theme', () => {
		const {getByTestId} = render(<Switch theme={THEME} onChange={() => {}} />);

		const switchComponent = getByTestId('slider');
		expect(switchComponent).toHaveClass(`slider-${THEME}` || `slider-${THEME}`);
	});
});
