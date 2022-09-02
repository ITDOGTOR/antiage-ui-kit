import {render, screen} from '@testing-library/react';
import React from 'react';

import {CHILD} from '../../constants';
import Collapse from './Collapse';

describe('Collapse', () => {
	test('Should render without children', () => {
		render(<Collapse data-testid="Collapse">{CHILD}</Collapse>);

		expect(screen.getByText('child')).toBeInTheDocument();
	});
});
