import './DaysGrid.css';

import classNames from 'classnames';
import React from 'react';

import {ViewMode} from '../../index.types';
import {getDays, getToday, getWeekDaysList, withCurrentModeCheck} from '../../lib';
import {useDatePickerContext} from '../../model';
import {DayTypes} from './DaysGrid.types';
import {Day} from './ui';

export const DaysGrid = withCurrentModeCheck(() => {
	const {visualDate, selectedDate, onChangeDate, lang} = useDatePickerContext();

	const {nextMonthFirstDays, currentMonthDays, prevMonthLastDays} = getDays(visualDate.year, visualDate.month);
	const today = getToday();

	return (
		<div className={classNames('ui-kit-days-grid')}>
			{getWeekDaysList(lang).map((weekDay) => (
				<Day disabled key={weekDay} text={weekDay} type={DayTypes.WEEK} />
			))}

			{prevMonthLastDays.map((prevMonthDay) => (
				<Day disabled key={`prev-${prevMonthDay}`} text={prevMonthDay} type={DayTypes.OTHER_MONTH} />
			))}

			{currentMonthDays.map((currentMonthDay) => {
				let dayType = DayTypes.CURRENT_MONTH;

				const isToday =
					today.day === currentMonthDay && today.month === visualDate.month && today.year === visualDate.year;
				const isSelected =
					selectedDate?.day === currentMonthDay &&
					selectedDate?.month === visualDate.month &&
					selectedDate?.year === visualDate.year;

				if (isToday) {
					dayType = DayTypes.TODAY;
				}

				if (isSelected) {
					dayType = DayTypes.SELECTED;
				}

				return <Day key={`current-${currentMonthDay}`} text={currentMonthDay} type={dayType} onClick={onChangeDate} />;
			})}

			{nextMonthFirstDays.map((nextMonthDay) => (
				<Day disabled key={`next-${nextMonthDay}`} text={nextMonthDay} type={DayTypes.OTHER_MONTH} />
			))}
		</div>
	);
}, ViewMode.MAIN);
