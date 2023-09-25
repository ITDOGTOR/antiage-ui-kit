import {RefObject, useEffect, useRef} from 'react';

/**
 * A custom React hook that provides a ref to scroll an element into view.
 *
 * @returns A `RefObject` referencing the DOM element to scroll.
 */
export const useScrollToCurrent = (): RefObject<HTMLElement | null> => {
	const currentRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (currentRef.current) {
			currentRef.current.scrollIntoView({block: 'center'});
		}
	}, []);

	return currentRef;
};
