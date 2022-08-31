import classNames from 'classnames/bind';
import React, {useEffect, useState} from 'react';

import style from './DropdownController.module.css';
import {DropdownControllerProps, Index, Key} from './DropdownController.types';

const findByIndex = (index: number) => (item: any, i: number) => index === i;

const cx = classNames.bind(style);

function DropdownController({
	dropdownRender,
	menuRender,
	options,
	placeholder,
	className,
	disabled = false,
	onSelect,
	styleType = 'filled',
}: DropdownControllerProps) {
	const [showOptions, setShowOptions] = useState(false);
	const [selected, setSelected] = useState(options[Index.FIRST_ELEMENT]);
	const [hover, setHover] = useState<number | null>(null);
	const [currentIndex, setCurrentIndex] = useState(Index.FIRST_ELEMENT);

	const toggleShowOptions = () => {
		if (!disabled) {
			setShowOptions(!showOptions);
			setHover(null);
		}
	};

	const onHideOptions = () => {
		setShowOptions(false);
	};

	const onShowOptions = () => {
		if (!disabled) setShowOptions(true);
	};

	const onSelectOption = (index: number) => {
		const option = options.find(findByIndex(index));
		if (option) setSelected(option);
		if (onSelect && option) onSelect(option);
		onHideOptions();
	};

	const onOptionMouseEnter = (index: number) => {
		const option = options.find(findByIndex(index));
		if (option) setHover(option.keyIndex);
	};

	useEffect(() => {
		if (!placeholder && onSelect) onSelect(selected);
		if (placeholder) setSelected({keyIndex: null, label: placeholder});
	}, []);

	useEffect(() => {
		if (showOptions) setHover(options[currentIndex].keyIndex);
	}, [currentIndex]);

	const onKeyPressHandle = (e: React.KeyboardEvent) => {
		const keyFunc = {
			[Key.ENTER]: () => {
				if (showOptions) setSelected(options[currentIndex]);
				if (onSelect && showOptions) onSelect(options[currentIndex]);
				toggleShowOptions();
			},
			[Key.ARROW_UP]: () => {
				setCurrentIndex(currentIndex === Index.FIRST_ELEMENT ? options.length - 1 : (prev) => prev - 1);
			},
			[Key.ARROW_DOWN]: () => {
				if (!showOptions) onShowOptions();
				setCurrentIndex(currentIndex === options.length - 1 ? Index.FIRST_ELEMENT : (prev) => prev + 1);
			},
			[Key.ESCAPE]: () => {
				onHideOptions();
			},
			[Key.OTHER]: () => null,
		};
		return (keyFunc[e.key as Key] || keyFunc[Key.OTHER])();
	};

	const selectContainer = cx(style.selectContainer, style[styleType]);
	return (
		<div
			className={cx('main-container', {disabled}, className)}
			tabIndex={0}
			onBlur={onHideOptions}
			onKeyDown={onKeyPressHandle}
		>
			<div className={selectContainer} onClick={toggleShowOptions}>
				{menuRender &&
					menuRender({
						currency: selected.currency,
						amount: selected.amount,
						label: selected.label,
						placeholder,
						disabled: disabled ? cx('disabled') : '',
						toggleShowOptions,
						rotate: showOptions ? cx('rotate') : '',
						hide: disabled ? cx('hide') : '',
					})}
			</div>

			<div className={cx('options-container')}>
				{showOptions &&
					options.map(({label, currency, keyIndex}, index) => {
						return (
							<React.Fragment key={keyIndex}>
								{dropdownRender &&
									dropdownRender({
										keyIndex,
										animatedIn: cx('animatedIn'),
										selected: index === selected.keyIndex ? cx('selected') : '',
										hover: hover === keyIndex ? cx('hover') : '',
										label,
										onOptionMouseEnter,
										onSelectOption,
										currency,
									})}
							</React.Fragment>
						);
					})}
			</div>
		</div>
	);
}

export default DropdownController;
