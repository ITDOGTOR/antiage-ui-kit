import React, {useRef, useState} from 'react';

import {ViewMode} from '../../../index.types';

export declare interface PopupControl {
	onToggle: (evt: React.MouseEvent<HTMLElement>) => void;
	onBlur: (evt: React.FocusEvent) => void;
	onDelayClose: () => void;
	isPopupShouldClose: boolean;
	isRenderPopupTop: boolean;
	isRenderPopupRight: boolean;
	isOpen: boolean;
}

/**
 * A custom hook for managing popup behavior, including opening, closing, and positioning.
 *
 * @param setMode - A function to set the mode of the popup (e.g., ViewMode.MAIN).
 * @param onClosePopup - A callback function to execute when the popup is closed.
 * @returns An object with functions and states for controlling the popup:
 * - `onBlur` - A function to handle blur events and close the popup.
 * - `onToggle` - A function to toggle the popup open and closed.
 * - `isPopupShouldClose` - A boolean indicating if the popup should close.
 * - `onDelayClose` - A function to delay closing the popup.
 * - `isRenderPopupTop` - A boolean indicating if the popup should be rendered at the top.
 * - `isRenderPopupRight` - A boolean indicating if the popup should be rendered at the right.
 * - `isOpen` - A boolean indicating if the popup is currently open.
 */
export const usePopupControl = (setMode: (mode: ViewMode) => void, onClosePopup?: Function): PopupControl => {
	const timeoutAlreadyStarted = useRef(false);
	const isRenderPopupTop = useRef(false);
	const isRenderPopupRight = useRef(false);

	const [isOpen, setIsOpen] = useState(false);
	const [isPopupShouldClose, setIsPopupShouldClose] = useState(false);

	const getPopupPosition = (element: HTMLElement) => {
		const clientWidth = window.innerWidth;
		const clientHeight = window.innerHeight;
		const mainRect = element.getBoundingClientRect();
		const bottomSpace = clientHeight - mainRect.bottom;
		const leftSpace = clientWidth - mainRect.left;

		if (clientWidth > 600) {
			if (bottomSpace < 260) {
				isRenderPopupTop.current = true;
			}

			if (leftSpace < 366) {
				isRenderPopupRight.current = true;
			}

			return;
		}

		if (bottomSpace < 260) {
			isRenderPopupTop.current = true;
		}

		if (leftSpace < 300) {
			isRenderPopupRight.current = true;
		}
	};

	const onClose = (id: NodeJS.Timeout | null) => {
		if (id) {
			clearTimeout(id);
			timeoutAlreadyStarted.current = false;
		}

		setIsPopupShouldClose(false);
		setIsOpen(false);
		setMode(ViewMode.MAIN);

		if (onClosePopup) {
			onClosePopup();
		}

		isRenderPopupTop.current = false;
		isRenderPopupRight.current = false;
	};

	const onDelayClose = () => {
		if (timeoutAlreadyStarted.current) {
			return;
		}

		timeoutAlreadyStarted.current = true;
		setIsPopupShouldClose(true);

		const id = setTimeout(() => {
			onClose(id);
		}, 180);
	};

	const onToggle = (evt: React.MouseEvent<HTMLElement>) => {
		if (isOpen) {
			onDelayClose();
		} else {
			getPopupPosition(evt.currentTarget);
			setIsOpen(true);
		}
	};

	const onBlur = ({currentTarget, relatedTarget}: React.FocusEvent) => {
		if (!currentTarget.contains(relatedTarget as Node) && isOpen) {
			onDelayClose();
		}
	};

	return {
		onBlur,
		onToggle,
		isPopupShouldClose,
		onDelayClose,
		isRenderPopupTop: isRenderPopupTop.current,
		isRenderPopupRight: isRenderPopupRight.current,
		isOpen,
	};
};
