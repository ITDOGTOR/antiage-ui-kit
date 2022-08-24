import {render} from '@testing-library/react';
import React from 'react';

import Button from './Button';
import {ButtonProps} from './Button.types';

describe('Button', () => {
	const renderComponent = ({children, customClass, disabled, styleButton, width}: Partial<ButtonProps>) =>
		render(
			<Button
				customClass={customClass || ''}
				disabled={disabled || false}
				htmlType="button"
				icon={undefined}
				styleButton={styleButton || 'accent-fill'}
				theme="white"
				width={width || 'default'}
				onClick={() => {
					throw new Error('Function not implemented.');
				}}
			>
				{children}
			</Button>,
		);

	test('Testing for content inside the button', () => {
		const headingText = 'Click me';

		const {getByTestId} = renderComponent({children: headingText});

		const button = getByTestId('button');

		expect(button).toHaveTextContent(headingText);
	});

	test('Testing to verify your own class', () => {
		const classButton = 'className';

		const {getByTestId} = renderComponent({customClass: classButton});

		const button = getByTestId('button');

		expect(button).toHaveClass(classButton);
	});

	test('Testing for an inactive button', () => {
		const disabledButton = true;

		const {getByTestId} = renderComponent({disabled: disabledButton});

		const button = getByTestId('button');

		expect(button).toBeDisabled();
	});

	test('Testing for an active button', () => {
		const disabledButton = false;

		const {getByTestId} = renderComponent({disabled: disabledButton});

		const button = getByTestId('button');

		expect(button).toBeEnabled();
	});

	test('Testing to check the type of button', () => {
		const style =
			'accent-fill' ||
			'complement-fill' ||
			'faint-fill' ||
			'delete-button' ||
			'base-outline' ||
			'text-link' ||
			'base-fill';

		const {getByTestId} = renderComponent({styleButton: style});

		const button = getByTestId('button');

		expect(button).toHaveClass(`${style}-white` || `${style}-dark`);
	});

	test('Testing for button width', () => {
		const widthButton = 'full' || 'default';

		const {getByTestId} = renderComponent({width: widthButton});

		const button = getByTestId('button');

		expect(button).toHaveClass(widthButton);
	});
});
