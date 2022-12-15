import {useEffect} from 'react';

import {UseAutoSizeTextArea} from './useAutoSizeTextArea.types';

export default function useAutosizeTextArea({textAreaRef, value, enabled}: UseAutoSizeTextArea) {
	useEffect(() => {
		if (textAreaRef && enabled) {
			// eslint-disable-next-line no-param-reassign
			textAreaRef.style.height = '0px';
			const {scrollHeight} = textAreaRef;
			// eslint-disable-next-line no-param-reassign
			textAreaRef.style.height = `${scrollHeight}px`;
		}
	}, [textAreaRef, value]);
}
