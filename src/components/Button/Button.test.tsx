import {render} from '@testing-library/react';
import React from 'react';

import Button from './Button';
import {ButtonProps} from './Button.types';

describe('Button', () => {
	const renderComponent = ({content, customClass, disabled, styleButton, width}: Partial<ButtonProps>) =>
		render(
			<Button
				content={content || <div>Default content</div>}
				customClass={customClass || ''}
				disabled={disabled || false}
				styleButton={styleButton || 'accent-strong-fill'}
				width={width || 'default'}
				onClick={() => {
					throw new Error('Function not implemented.');
				}}
			/>,
		);

	test('Testing for content inside the button', () => {
		const headingText = 'Текст внутри кнопки';

		const {getByTestId} = renderComponent({content: headingText});

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
			'accent-strong-fill' ||
			'complement-strong-fill' ||
			'faint-weak-fill' ||
			'delete-button' ||
			'base-weak-outline' ||
			'text-link' ||
			'base-weak-fill';

		const {getByTestId} = renderComponent({styleButton: style});

		const button = getByTestId('button');

		expect(button).toHaveClass(style);
	});

	test('Testing for button width', () => {
		const widthButton = 'full' || 'default';

		const {getByTestId} = renderComponent({width: widthButton});

		const button = getByTestId('button');

		expect(button).toHaveClass(widthButton);
	});
});
