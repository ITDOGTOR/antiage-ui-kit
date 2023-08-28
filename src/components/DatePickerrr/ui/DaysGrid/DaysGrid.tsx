import './DaysGrid.css';

import classNames from 'classnames';
import React from 'react';

import {getDays, getToday, getWeekDaysList, useDatePickerContext, withCurrentModeCheck} from '../../lib';
import {ViewMode} from '../index.types';
import {DayTypes} from './DaysGrid.types';
import {Day} from './ui';

export const DaysGrid = withCurrentModeCheck(() => {
	const {
		date: {year, monthNum, day},
		selectedDate,
		onChangeHandle,
		lang,
	} = useDatePickerContext();

	const {nextMonthFirstDays, currentMonthDays, prevMonthLastDays} = getDays(year, monthNum);
	const today = getToday();

	return (
		<div className={classNames('ui-kit-days-grid')}>
			{getWeekDaysList(lang).map((weekDay) => (
				<Day key={weekDay} text={weekDay} type={DayTypes.WEEK} />
			))}

			{prevMonthLastDays.map((prevMonthDay) => (
				<Day key={`prev-${prevMonthDay}`} text={prevMonthDay} type={DayTypes.OTHER_MONTH} />
			))}

			{currentMonthDays.map((currentMonthDay, i) => {
				let type = 'current-month';
				if (selectedDate.day === i + 1 && selectedDate.year === year && selectedDate.monthNum === monthNum) {
					type = 'selected';
				} else if (day !== i + 1 && today.day === i + 1 && today.year === year && today.monthNum === monthNum) {
					type = 'today';
				}
				return <Day key={`current-${currentMonthDay}`} text={currentMonthDay} type={type} onClick={onChangeHandle} />;
			})}

			{nextMonthFirstDays.map((nextMonthDay) => (
				<Day key={`next-${nextMonthDay}`} text={nextMonthDay} type={DayTypes.OTHER_MONTH} />
			))}
		</div>
	);
}, ViewMode.MAIN);
