import React, {ReactElement} from 'react';

import {SortingContext, useSorting} from '../../model';

function SortingProvider({children, keyName}: {children: ReactElement; keyName: string}) {
	const data = useSorting({keyName});
	return <SortingContext.Provider value={data}>{children}</SortingContext.Provider>;
}

export default SortingProvider;
