import './MonthsAndYearsLists.css';

import classNames from 'classnames';
import React, {MouseEvent, useEffect} from 'react';

import {ChevronHorizontal} from '../../../../assets';
import {DateAttributes, ViewMode} from '../../index.types';
import {getMonthName, getMonthsList, getToday, getYearsList, useScrollToCurrent, withCurrentModeCheck} from '../../lib';
import {useDatePickerContext} from '../../model';

export const MonthsAndYearsLists = withCurrentModeCheck(() => {
	const {visualDate, onChangeDate, setMode, lang, containerRef} = useDatePickerContext();

	const activeMonthRef = useScrollToCurrent();
	const activeYearsRef = useScrollToCurrent();

	const today = getToday();

	useEffect(() => {
		containerRef?.current?.focus();
	}, []);

	const onBack = () => {
		setMode(ViewMode.MAIN);
		containerRef?.current?.focus();
	};

	const onChangeMonth = (evt: MouseEvent<HTMLButtonElement>) => {
		const indexMonth = evt.currentTarget.name;

		onChangeDate(DateAttributes.MONTH, Number(indexMonth));
	};

	const onChangeYear = (evt: MouseEvent<HTMLButtonElement>) => {
		const year = evt.currentTarget.name;

		onChangeDate(DateAttributes.YEAR, Number(year));
	};

	return (
		<>
			<div className={classNames('ui-kit-toggle-panel')}>
				<button
					aria-label="go-back"
					className={classNames('ui-kit-toggle-panel__nav', 'ui-kit-toggle-panel__nav--prev')}
					type="button"
					onClick={onBack}
				>
					<ChevronHorizontal />
				</button>

				<button
					disabled
					className={classNames('ui-kit-toggle-panel__nav', 'ui-kit-toggle-panel__nav--main')}
					type="button"
				>
					<span className={classNames('ui-kit-toggle-panel__month')}>{getMonthName(visualDate.month, lang)}</span>
					<span>{visualDate.year}</span>
				</button>

				<button
					disabled
					className={classNames('ui-kit-toggle-panel__nav', 'ui-kit-toggle-panel__nav--next')}
					type="button"
				>
					{' '}
				</button>
			</div>

			<div className={classNames('ui-kit-months-and-years-lists')}>
				<ul className={classNames('ui-kit-months-and-years-lists__list')}>
					{getMonthsList(lang).map((month, index) => (
						<li key={month}>
							<button
								className={classNames('ui-kit-months-and-years-lists__item', {
									'ui-kit-months-and-years-lists__item--today': today.month === index,
									'ui-kit-months-and-years-lists__item--selected': visualDate.month === index,
								})}
								name={index.toString()}
								// @ts-ignore
								ref={visualDate.month === index ? activeMonthRef : null}
								type="button"
								onClick={onChangeMonth}
							>
								{month}
							</button>
						</li>
					))}
				</ul>

				<ul className={classNames('ui-kit-months-and-years-lists__list')}>
					{getYearsList().map((year) => (
						<li key={year}>
							<button
								className={classNames('ui-kit-months-and-years-lists__item', {
									'ui-kit-months-and-years-lists__item--today': today.year === year,
									'ui-kit-months-and-years-lists__item--selected': visualDate.year === year,
								})}
								name={year.toString()}
								// @ts-ignore
								ref={visualDate.year === year ? activeYearsRef : null}
								type="button"
								onClick={onChangeYear}
							>
								{year}
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}, ViewMode.MONTHS_AND_YEARS_LISTS);
