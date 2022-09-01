import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD, CLASS_NAME, IS_DISABLED} from '../../constants';
import Button from './Button';

describe('Button', () => {
	test('Should render with children', () => {
		render(<Button>{CHILD}</Button>);

		expect(screen.getByText(CHILD)).toBeInTheDocument();
	});

	test('Should render with className', () => {
		const {container} = render(<Button className={CLASS_NAME} />);

		expect(container.firstChild).toHaveClass(CLASS_NAME);
	});

	describe('Should render with a certain style', () => {
		test('base-fill', () => {
			const {container} = render(<Button styleType="base-fill" />);

			expect(container.firstChild).toHaveClass('base-fill');
		});

		test('base-outline', () => {
			const {container} = render(<Button styleType="base-outline" />);

			expect(container.firstChild).toHaveClass('base-outline');
		});

		test('accent-fill', () => {
			const {container} = render(<Button styleType="accent-fill" />);

			expect(container.firstChild).toHaveClass('accent-fill');
		});

		test('accent-outline', () => {
			const {container} = render(<Button styleType="accent-outline" />);

			expect(container.firstChild).toHaveClass('accent-outline');
		});

		test('complement-fill', () => {
			const {container} = render(<Button styleType="complement-fill" />);

			expect(container.firstChild).toHaveClass('complement-fill');
		});

		test('complement-outline', () => {
			const {container} = render(<Button styleType="complement-outline" />);

			expect(container.firstChild).toHaveClass('complement-outline');
		});

		test('critic-outline', () => {
			const {container} = render(<Button styleType="critic-outline" />);

			expect(container.firstChild).toHaveClass('critic-outline');
		});

		test('text', () => {
			const {container} = render(<Button styleType="text" />);

			expect(container.firstChild).toHaveClass('text');
		});
	});

	test('Should render with theme white', () => {
		const {container} = render(<Button />);

		expect(container.firstChild).toHaveClass('white');
	});

	test('Should render with theme gray', () => {
		const {container} = render(<Button theme="gray" />);

		expect(container.firstChild).toHaveClass('gray');
	});

	test('Should be disabled', () => {
		render(<Button disabled={IS_DISABLED} />);

		expect(screen.getByTestId('button')).toBeDisabled();
	});

	test('Should be enabled', () => {
		render(<Button />);

		expect(screen.getByTestId('button')).toBeEnabled();
	});

	test('Should handle the click event', () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick} />);
		const button = screen.getByTestId('button');

		fireEvent.click(button);
		expect(onClick).toBeCalledTimes(1);
	});

	test('Should link be rendered', () => {
		render(
			<Button isLink>
				<a href="/">{CHILD}</a>
			</Button>,
		);

		expect(screen.getByTestId('link')).toBeInTheDocument();
	});

	// TODO Write tests for button, submit, reset events
});
