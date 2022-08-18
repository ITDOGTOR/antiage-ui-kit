import {render} from '@testing-library/react';
import React from 'react';

import TestComponent from './TestComponent';

describe('TestComponent', () => {
	test('renders the TestComponent component', () => {
		render(<TestComponent content="Hello world!" heading="ggg" />);
	});
});
