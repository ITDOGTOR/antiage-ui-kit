import React, {useContext} from 'react';

import {getSearchWithoutKeys} from '../../../../helpers';
import {UISortingContext, UIUseSorting} from './sortingContext.types';

export const SortingContext = React.createContext<UISortingContext>({
	sorting: [],
	setSorting: () => {},
	sortingString: '',
});

export const useSorting = ({keyName = '', setHistory}: UIUseSorting = {}) => {
	const getSorting = () => {
		const currentSorting = new URLSearchParams(window.location.search).get(`${keyName}order_by`);
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
		if (setHistory) {
			setHistory({
				search: newSearch,
			});
		}
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
