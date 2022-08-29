import {render, screen} from '@testing-library/react';
import React from 'react';

import {CLASS_NAME} from '../../constants';
import Select from './Select';
import {OptionType} from './Select.types';

const options: OptionType[] = [{label: 'label', keyIndex: 0}];
const twoValuesOptions: OptionType[] = [{label: 'label', keyIndex: 0, currency: 'currency', amount: 1000}];
const placeholder = 'placeholder';

describe('Select', () => {
	test('Should render with options', () => {
		render(<Select options={options} />);
		expect(screen.getByText('label')).toBeInTheDocument();
	});

	test('Placeholder should render by default', () => {
		render(<Select options={options} placeholder={placeholder} />);
		expect(screen.getByText(placeholder)).toBeInTheDocument();
	});

	test('Should render amount and currency by default', () => {
		render(<Select options={twoValuesOptions} />);
		expect(screen.getByText('currency')).toBeInTheDocument();
		expect(screen.getByText(1000)).toBeInTheDocument();
	});

	test('Should add className "filled" to "selectContainer"', () => {
		const {getByTestId} = render(<Select options={twoValuesOptions} variant="filled" />);

		const selectContainer = getByTestId('selectContainer');
		expect(selectContainer).toHaveClass('filled');
	});

	test('Should add className "outlined" to "selectContainer"', () => {
		const {getByTestId} = render(<Select options={twoValuesOptions} variant="outlined" />);

		const selectContainer = getByTestId('selectContainer');
		expect(selectContainer).toHaveClass('outlined');
	});

	test('Should add className "classname" to "main-container"', () => {
		const {getByTestId} = render(<Select className={CLASS_NAME} options={twoValuesOptions} />);

		const selectContainer = getByTestId('main-container');
		expect(selectContainer).toHaveClass(CLASS_NAME);
	});

	test('Should add className "disabled"', () => {
		const {getByTestId} = render(<Select disabled options={twoValuesOptions} placeholder={placeholder} />);

		const mainContainer = getByTestId('main-container');
		const selectPlaceholder = getByTestId('select-placeholder');

		expect(mainContainer).toHaveClass('disabled');
		expect(selectPlaceholder).toHaveClass('disabled');
	});

	test('Should add className "disabled" to "select-label"', () => {
		const {getByTestId} = render(<Select disabled options={twoValuesOptions} />);

		const selectLabel = getByTestId('select-label');

		expect(selectLabel).toHaveClass('disabled');
	});
});
