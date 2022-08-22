import {render} from '@testing-library/react';
import React from 'react';

import TestComponent from './TestComponent';
import {TestComponentProps} from './TestComponent.types';

describe('TestComponent', () => {
	const renderComponent = ({heading, content}: Partial<TestComponentProps>) =>
		render(
			<TestComponent content={content || <div>Default content</div>} heading={heading || 'Default heading text'} />,
		);

	test('renders the TestComponent component', () => {
		render(<TestComponent content="Hello world!" heading="ggg" />);
	});

	test('should render heading text correctly', () => {
		const headingText = 'Some test heading';

		const {getByTestId} = renderComponent({heading: headingText});

		const testComponent = getByTestId('test-component__heading');

		expect(testComponent).toHaveTextContent(headingText);
	});
});
