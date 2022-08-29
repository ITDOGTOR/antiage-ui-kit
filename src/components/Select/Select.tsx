import classNames from 'classnames/bind';
import React, {useEffect, useState} from 'react';

import style from './Select.module.css';
import {Index, Key, SelectProps} from './Select.types';

const cx = classNames.bind(style);

const findByIndex = (index: number) => (item: any, i: number) => index === i;

function Select({
	options,
	disabled = false,
	onSelect,
	className = '',
	variant = 'filled',
	placeholder,
	icon,
}: SelectProps) {
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
		setShowOptions(false);
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

	const selectContainer = cx(style.selectContainer, style[variant]);

	return (
		<div
			className={cx('main-container', {disabled}, className)}
			data-testid="main-container"
			tabIndex={0}
			onBlur={onHideOptions}
			onKeyDown={onKeyPressHandle}
		>
			<div className={selectContainer} data-testid="selectContainer" onClick={toggleShowOptions}>
				{selected.label === placeholder && (
					<span className={cx('select-placeholder', {disabled})} data-testid="select-placeholder">
						{placeholder}
					</span>
				)}
				{selected.label !== placeholder && (
					<span className={cx('select-label', {disabled})} data-testid="select-label">
						{selected.amount || selected.label}
					</span>
				)}

				{selected.currency && <span className={cx('select-currency')}>{selected.currency}</span>}
				{!icon && (
					<span
						className={cx('select-icon__default', {hide: disabled, rotate: showOptions})}
						onClick={toggleShowOptions}
					/>
				)}
				{icon && (
					<span className={cx('select-icon', {hide: disabled})} onClick={toggleShowOptions}>
						{icon}
					</span>
				)}
			</div>

			<div className={cx('options-container')}>
				{showOptions &&
					options.map(({label, currency, keyIndex}, index) => (
						<div
							className={cx('option', {selected: index === selected.keyIndex, hover: hover === keyIndex})}
							data-testid="option"
							key={keyIndex}
							onClick={() => onSelectOption(index)}
							onMouseEnter={() => onOptionMouseEnter(index)}
						>
							<span className={cx('option-label', {selected: index === selected.keyIndex})}>{label}</span>
							<span className={cx('option-currency')}>{currency}</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Select;
