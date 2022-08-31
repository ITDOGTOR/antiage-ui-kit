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
		const switchComponent = render(<Switch data-testid="Switch" disabled={IS_DISABLED} onChange={() => {}} />);

		expect(switchComponent).toMatchSnapshot();
	});

	test('Must be active', () => {
		const switchComponent = render(<Switch data-testid="Switch" disabled={!IS_DISABLED} onChange={() => {}} />);

		expect(switchComponent).toMatchSnapshot();
	});

	test('Should be displayed with a different theme', () => {
		const switchComponent = render(<Switch data-testid="Switch" theme={THEME} onChange={() => {}} />);

		expect(switchComponent).toMatchSnapshot();
	});
});
