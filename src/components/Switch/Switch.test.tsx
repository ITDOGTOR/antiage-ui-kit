import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME, IS_DISABLED} from '../../constants';
import Switch from './Switch';

describe('Switch', () => {
	test('Should render with children', () => {
		render(<Switch>{CHILD}</Switch>);

		expect(screen.getByText(CHILD)).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const {container} = render(<Switch className={CLASS_NAME} />);

		expect(container.firstChild).toHaveClass(CLASS_NAME);
	});

	test('Should render with theme white', () => {
		const {container} = render(<Switch />);

		expect(container.firstChild).toHaveClass('white');
	});

	test('Should render with theme gray', () => {
		const {container} = render(<Switch theme="gray" />);

		expect(container.firstChild).toHaveClass('gray');
	});

	test('Should be active', async () => {
		render(<Switch />);
		const switchToggle = await screen.getByTestId('switch-input');

		fireEvent.click(switchToggle);
		expect(switchToggle).toBeChecked();
	});

	test('Should be inactive', () => {
		render(<Switch />);
		const switchToggle = screen.getByTestId('switch-input');

		fireEvent.change(switchToggle);
		expect(switchToggle).not.toBeChecked();
	});

	test('Should be initially active', () => {
		render(<Switch defaultChecked />);

		expect(screen.getByTestId('switch-input')).toBeChecked();
	});

	test('Should be disabled', () => {
		render(<Switch disabled={IS_DISABLED} />);

		expect(screen.getByTestId('switch-input')).toBeDisabled();
	});

	test('Should be enabled', () => {
		render(<Switch />);

		expect(screen.getByTestId('switch-input')).toBeEnabled();
	});

	test('Should fire on state change', () => {
		const onChange = jest.fn();
		render(<Switch onChange={onChange} />);
		const switchToggle = screen.getByTestId('switch-input');

		fireEvent.click(switchToggle);
		expect(onChange).toBeCalledTimes(1);
	});

	test('Should state change when clicking on children', () => {
		render(<Switch />);
		const switchLabel = screen.getByTestId('switch-label');

		fireEvent.click(switchLabel);
		expect(screen.getByTestId('switch-input')).toBeChecked();

		fireEvent.click(switchLabel);
		expect(screen.getByTestId('switch-input')).not.toBeChecked();
	});
});
