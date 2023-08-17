import {SortingProviderTypes} from '../../ui/SortingProvider/SortingProvider.types';

export interface UISortingContext {
	sorting: string[];
	setSorting: (value: string) => void;
	sortingString: string;
}

export declare type UIUseSorting = Pick<SortingProviderTypes, 'keyName' | 'setHistory'>;
