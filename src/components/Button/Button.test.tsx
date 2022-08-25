import {render, screen} from '@testing-library/react';
import React from 'react';

import Button from './Button';
import {ButtonProps} from './Button.types';

const renderComponent = ({children, customClass, disabled, styleType}: Partial<ButtonProps>) =>
	render(
		<Button
			customClass={customClass || ''}
			disabled={disabled || false}
			htmlType="button"
			styleType={styleType || 'accent-fill'}
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

	test('Must be active', () => {
		const disabledButton = false;

		const {getByTestId} = renderComponent({disabled: disabledButton});

		const button = getByTestId('button');

		expect(button).toBeEnabled();
	});

	test('Must be active', () => {
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
