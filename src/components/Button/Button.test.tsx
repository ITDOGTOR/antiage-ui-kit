import {render} from '@testing-library/react';
import React from 'react';

import Button from './Button';
import {ButtonProps} from './Button.types';

describe('Button', () => {
	const renderComponent = ({heading, content}: Partial<ButtonProps>) =>
		render(<Button content={content || <div>Default content</div>} heading={heading || 'Default heading text'} />);

	test('renders the Button component', () => {
		render(<Button content="Hello world!" heading="ggg" />);
	});

	test('should render heading text correctly', () => {
		const headingText = 'Some test heading';

		const {getByTestId} = renderComponent({heading: headingText});

		const button = getByTestId('test-component__heading');

		expect(button).toHaveTextContent(headingText);
	});
});
