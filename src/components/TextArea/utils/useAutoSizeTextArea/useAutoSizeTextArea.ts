/* eslint-disable no-param-reassign */
import {useEffect} from 'react';

import {UseAutoSizeTextArea} from './useAutoSizeTextArea.types';

export default function useAutosizeTextArea({textAreaRef, value, autoSize, rows: defaultRows}: UseAutoSizeTextArea) {
	const {minRows, maxRows} = typeof autoSize === 'object' ? autoSize : {minRows: defaultRows, maxRows: defaultRows};
	useEffect(() => {
		if (textAreaRef && autoSize) {
			if (typeof autoSize === 'object') {
				const {rows: previousRows} = textAreaRef;
				const lineHeight = window.getComputedStyle(textAreaRef, null).getPropertyValue('line-height');
				const paddingTop = window.getComputedStyle(textAreaRef, null).getPropertyValue('padding-top');
				const paddingBottom = window.getComputedStyle(textAreaRef, null).getPropertyValue('padding-bottom');
				textAreaRef.rows = minRows;
				const {scrollHeight} = textAreaRef;
				// eslint-disable-next-line no-bitwise
				const currentRows = ~~(
					(scrollHeight - parseInt(paddingTop, 10) - parseInt(paddingBottom, 10)) /
					parseInt(lineHeight, 10)
				);
				if (currentRows === previousRows) {
					textAreaRef.rows = currentRows;
				}
				if (currentRows >= maxRows) {
					textAreaRef.rows = maxRows;
					textAreaRef.scrollTop = textAreaRef.scrollHeight;
				} else {
					textAreaRef.rows = currentRows;
				}
			} else {
				const {scrollHeight} = textAreaRef;
				textAreaRef.style.height = `${scrollHeight}px`;
			}
		}
	}, [textAreaRef, value]);
}
