import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME, IS_DISABLED, THEME} from '../../constants';
import Button from './Button';

describe('Button', () => {
	test('Should render without children', () => {
		render(<Button data-testid="button">{CHILD}</Button>);

		expect(screen.getByText('child')).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const button = render(<Button className={CLASS_NAME} data-testid="button" />);
		expect(button).toMatchSnapshot();
	});

	describe('disable prop', () => {
		test('Must be inactive', () => {
			const {getByTestId} = render(<Button data-testid="button" disabled={IS_DISABLED} />);

			const button = getByTestId('button');
			expect(button).toBeDisabled();
		});

		test('Must be active', () => {
			const {getByTestId} = render(<Button data-testid="button" disabled={!IS_DISABLED} />);

			const button = getByTestId('button');
			expect(button).toBeEnabled();
		});
	});

	describe('styleType, theme props', () => {
		test('Must use ready-made class base-fill-white', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="base-fill" />);

			const button = getByTestId('button');
			expect(button).toHaveClass('base-fill-white');
		});

		test('Must use ready-made class base-fill-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="base-fill" theme="gray" />);

			const button = getByTestId('button');
			expect(button).toHaveClass('base-fill-gray');
		});

		test('Must use ready-made class base-outline-white', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="base-outline" />);

			const button = getByTestId('button');
			expect(button).toHaveClass('base-outline-white');
		});

		test('Must use ready-made class base-outline-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="base-outline" theme="gray" />);

			const button = getByTestId('button');
			expect(button).toHaveClass('base-outline-gray');
		});

		test('Must use ready-made classes accent-fill-white, accent-fill-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="accent-fill" theme={THEME} />);

			const button = getByTestId('button');
			expect(button).toHaveClass(`accent-fill-${THEME}` || `accent-fill-${THEME}`);
		});

		test('Must use ready-made classes accent-outline-white, accent-outline-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="accent-outline" theme={THEME} />);

			const button = getByTestId('button');
			expect(button).toHaveClass(`accent-outline-${THEME}` || `accent-outline-${THEME}`);
		});

		test('Must use ready-made classes complement-fill-white, complement-fill-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="complement-fill" theme={THEME} />);

			const button = getByTestId('button');
			expect(button).toHaveClass(`complement-fill-${THEME}` || `complement-fill-${THEME}`);
		});

		test('Must use ready-made classes complement-outline-white, complement-outline-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="complement-outline" theme={THEME} />);

			const button = getByTestId('button');
			expect(button).toHaveClass(`complement-outline-${THEME}` || `complement-outline-${THEME}`);
		});

		test('Must use ready-made classes critic-outline-white, critic-outline-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="critic-outline" theme={THEME} />);

			const button = getByTestId('button');
			expect(button).toHaveClass(`critic-outline-${THEME}` || `critic-outline-${THEME}`);
		});

		test('Must use ready-made classes text-white, text-gray', () => {
			const {getByTestId} = render(<Button data-testid="button" styleType="text" theme={THEME} />);

			const button = getByTestId('button');
			expect(button).toHaveClass(`text-${THEME}` || `text-${THEME}`);
		});
	});

	// TODO Write tests for button, submit, reset events

	// TODO Write tests to check for a link
});
