import {SyntheticEvent, useLayoutEffect} from 'react';

import {onXScroll} from '../../lib';
import {IUseShadowControl} from './useShadowControl.types';

export const useShadowControl = ({
	columns,
	wrapperRef,
	headTrRef,
	tbodyRef,
	containerRef,
	children,
}: IUseShadowControl) => {
	useLayoutEffect(() => {
		const localOnXScroll = (e: SyntheticEvent | Event | {target: {scrollLeft: number}}) => {
			onXScroll(e, {columns, wrapperRef, headTrRef, tbodyRef, containerRef});
		};
		if (containerRef.current) {
			containerRef.current.addEventListener('scroll', localOnXScroll);

			const hasScroll = containerRef.current.scrollWidth - containerRef.current.offsetWidth > 0;
			if (hasScroll) {
				localOnXScroll({
					target: {
						scrollLeft: 0,
					},
				});
			}
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('scroll', localOnXScroll);
			}
		};
	}, [children]);
};
