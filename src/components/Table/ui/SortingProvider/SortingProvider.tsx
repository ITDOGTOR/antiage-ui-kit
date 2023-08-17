import React from 'react';

import {SortingContext, useSorting} from '../../model';
import {SortingProviderTypes} from './SortingProvider.types';

function SortingProvider({children, keyName, setHistory}: SortingProviderTypes) {
	const data = useSorting({keyName, setHistory});
	return <SortingContext.Provider value={data}>{children}</SortingContext.Provider>;
}

export default SortingProvider;
