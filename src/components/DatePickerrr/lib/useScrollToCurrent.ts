import {RefObject, useEffect, useRef} from 'react';

export const useScrollToCurrent = (): RefObject<HTMLElement | null> => {
	const currentRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (currentRef.current) {
			currentRef.current.scrollIntoView({block: 'center'});
		}
	}, []);

	return currentRef;
};
