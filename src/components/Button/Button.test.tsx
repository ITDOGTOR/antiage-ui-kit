import {render, screen} from '@testing-library/react';
import React from 'react';

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
			onClick={() => {
				throw new Error('Function not implemented.');
			}}
		>
			{children}
		</Button>,
	);

describe('Button', () => {
	test('Should render without children', () => {
		render(<Button>test</Button>);

		expect(screen.getByText('test')).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const className = 'class';
		const button = render(<Button className={className} />);

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
});
