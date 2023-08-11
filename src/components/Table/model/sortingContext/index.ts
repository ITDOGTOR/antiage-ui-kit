import React, {useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {getSearchWithoutKeys} from '../../../../helpers';
import {UISortingContext} from './types';

export const SortingContext = React.createContext<UISortingContext>({
	sorting: [],
	setSorting: () => {},
	sortingString: '',
});

export const useSorting = ({keyName = ''} = {}) => {
	const history = useNavigate();
	const location = useLocation();
	const getSorting = () => {
		const currentSorting = new URLSearchParams(location.search).get(`${keyName}order_by`);
		if (currentSorting) {
			return currentSorting.split(',');
		}
		return [];
	};
	const setSorting = (value: string[]) => {
		const newSorting = value.join(',');
		const currentSearch = getSearchWithoutKeys({keys: [`${keyName}order_by`]});
		const newSearch = `${currentSearch || '?'}${
			newSorting ? `${currentSearch ? '&' : ''}${keyName}order_by=${newSorting}` : ''
		}`;
		history({
			search: newSearch,
		});
	};
	const localSetSorting = (value: string) => {
		const sorting = getSorting();
		const currentIndex = sorting.indexOf(value);
		if (currentIndex !== -1) {
			const newArr = [
				...sorting.slice(0, currentIndex),
				...sorting.slice(currentIndex + 1, sorting.length),
				`-${value}`,
			];
			setSorting(newArr);
			return;
		}
		if (sorting.indexOf(`-${value}`) !== -1) {
			const newArr = sorting.filter((el) => el !== `-${value}`);
			setSorting(newArr);
			return;
		}
		const newArr = [...sorting, value];
		setSorting(newArr);
	};

	return {
		sorting: getSorting(),
		sortingString: getSorting().toString(),
		setSorting: localSetSorting,
	};
};

export const useSortingContext = () => {
	const {sorting, setSorting, sortingString} = useContext(SortingContext);

	return {
		sorting,
		setSorting,
		sortingString,
	};
};
