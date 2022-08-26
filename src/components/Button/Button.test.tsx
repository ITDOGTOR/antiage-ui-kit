import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME} from '../../constants';
import Button from './Button';
import {ButtonProps} from './Button.types';

const renderComponent = ({children, className, disabled, styleType}: Partial<ButtonProps>) =>
	render(
		<Button
			className={className || ''}
			disabled={disabled || false}
			htmlType="button"
			styleType={styleType || 'base-fill'}
			theme="white"
			onClick={() => {}}
		>
			{children}
		</Button>,
	);

describe('Button', () => {
	test('Should render without children', () => {
		render(<Button>{CHILD}</Button>);

		expect(screen.getByText('child')).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const button = render(<Button className={CLASS_NAME} />);

		expect(button).toMatchSnapshot();
	});

	test('Must be inactive', () => {
		const disabledButton = true;

		const {getByTestId} = renderComponent({disabled: disabledButton});

		const button = getByTestId('button');

		expect(button).toBeDisabled();
	});

	test('Must be active', () => {
		const disabledButton = false;

		const {getByTestId} = renderComponent({disabled: disabledButton});

		const button = getByTestId('button');

		expect(button).toBeEnabled();
	});

	test('A ready-made class must be used', () => {
		const style =
			'base-fill' ||
			'base-outline' ||
			'accent-fill' ||
			'accent-outline' ||
			'complement-fill' ||
			'complement-outline' ||
			'critic-outline' ||
			'text';

		const {getByTestId} = renderComponent({styleType: style});

		const button = getByTestId('button');
		expect(button).toHaveClass(`${style}-white` || `${style}-gray`);
	});

	test('There should be a click on the button', () => {
		const click = () => {};

		const {getByTestId} = renderComponent({onClick: click});

		const button = getByTestId('button');

		fireEvent.click(button);
	});
});
