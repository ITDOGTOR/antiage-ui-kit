import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {useLocation} from 'react-router-dom';
import {WithRouter} from 'utils/__mocks__/renderWrappers/WithRouter';

import {useSorting} from './index';

describe('test useSorting hook, which give a chance sorting table titles', () => {
	test('test sorting with two keys', async () => {
		function MockComponent() {
			const {sortingString, setSorting} = useSorting();
			const {search} = useLocation();
			return (
				<div>
					<button data-testid="button1" type="button" onClick={() => setSorting('key1')}>
						set
					</button>
					<button data-testid="button2" type="button" onClick={() => setSorting('key2')}>
						set
					</button>
					<p data-testid="sortingString">{sortingString}</p>
					<p data-testid="locationSearch">{search}</p>
				</div>
			);
		}
		const user = userEvent.setup();
		const {getByTestId} = render(
			<WithRouter>
				<MockComponent />
			</WithRouter>,
		);

		const setButton1 = getByTestId('button1');
		const setButton2 = getByTestId('button2');
		const sortingString = getByTestId('sortingString');
		const locationSearch = getByTestId('locationSearch');

		await user.click(setButton1);
		await user.click(setButton2);
		expect(sortingString.textContent).toBe('key1,key2');
		expect(locationSearch.textContent).toBe('?order_by=key1,key2');

		await user.click(setButton1);
		await user.click(setButton2);
		expect(sortingString.textContent).toBe('-key1,-key2');
		expect(locationSearch.textContent).toBe('?order_by=-key1,-key2');

		await user.click(setButton1);
		expect(sortingString.textContent).toBe('-key2');
		expect(locationSearch.textContent).toBe('?order_by=-key2');

		await user.click(setButton2);
		expect(sortingString.textContent).toBe('');
		expect(locationSearch.textContent).toBe('?');
	});

	test('test sorting with two keys, with keyName', async () => {
		function MockComponent() {
			const {sortingString, setSorting} = useSorting({keyName: 'keyName'});
			const {search} = useLocation();
			return (
				<div>
					<button data-testid="button1" type="button" onClick={() => setSorting('key1')}>
						set
					</button>
					<button data-testid="button2" type="button" onClick={() => setSorting('key2')}>
						set
					</button>
					<p data-testid="sortingString">{sortingString}</p>
					<p data-testid="locationSearch">{search}</p>
				</div>
			);
		}
		const user = userEvent.setup();
		const {getByTestId} = render(
			<WithRouter>
				<MockComponent />
			</WithRouter>,
		);

		const setButton1 = getByTestId('button1');
		const setButton2 = getByTestId('button2');
		const sortingString = getByTestId('sortingString');
		const locationSearch = getByTestId('locationSearch');

		await user.click(setButton1);
		await user.click(setButton2);
		expect(sortingString.textContent).toBe('key1,key2');
		expect(locationSearch.textContent).toBe('?keyNameorder_by=key1,key2');

		await user.click(setButton1);
		await user.click(setButton2);
		expect(sortingString.textContent).toBe('-key1,-key2');
		expect(locationSearch.textContent).toBe('?keyNameorder_by=-key1,-key2');

		await user.click(setButton1);
		expect(sortingString.textContent).toBe('-key2');
		expect(locationSearch.textContent).toBe('?keyNameorder_by=-key2');

		await user.click(setButton2);
		expect(sortingString.textContent).toBe('');
		expect(locationSearch.textContent).toBe('?');
	});

	test('test sorting with empty key', async () => {
		function MockComponent() {
			const {sortingString, setSorting} = useSorting({keyName: 'keyName'});
			const {search} = useLocation();
			return (
				<div>
					<button data-testid="button1" type="button" onClick={() => setSorting(null)}>
						set
					</button>
					<p data-testid="sortingString">{sortingString}</p>
					<p data-testid="locationSearch">{search}</p>
				</div>
			);
		}
		const user = userEvent.setup();
		const {getByTestId} = render(
			<WithRouter>
				<MockComponent />
			</WithRouter>,
		);

		const setButton1 = getByTestId('button1');
		const sortingString = getByTestId('sortingString');
		const locationSearch = getByTestId('locationSearch');

		await user.click(setButton1);
		expect(sortingString.textContent).toBe('');
		expect(locationSearch.textContent).toBe('');
	});
});
