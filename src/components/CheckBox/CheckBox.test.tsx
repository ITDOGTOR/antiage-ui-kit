import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME, IS_DISABLED, THEME} from '../../constants';
import CheckBox from './CheckBox';

describe('checkbox', () => {
	test('Should render without children', () => {
		render(<CheckBox>{CHILD}</CheckBox>);

		expect(screen.getByText('child')).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const checkbox = render(<CheckBox className={CLASS_NAME} />);
		expect(checkbox).toMatchSnapshot();
	});

	test('Must be inactive', () => {
		const {getByTestId} = render(<CheckBox disabled={IS_DISABLED} />);

		const checkbox = getByTestId('checkbox');
		expect(checkbox).toBeDisabled();
	});

	test('Must be active', () => {
		const {getByTestId} = render(<CheckBox disabled={!IS_DISABLED} />);

		const checkbox = getByTestId('checkbox');
		expect(checkbox).toBeEnabled();
	});

	test('Should be displayed with a different theme', () => {
		const {getByTestId} = render(<CheckBox theme={THEME} />);

		const checkbox = getByTestId('slider');
		expect(checkbox).toHaveClass(`slider-${THEME}` || `slider-${THEME}`);
	});
});
