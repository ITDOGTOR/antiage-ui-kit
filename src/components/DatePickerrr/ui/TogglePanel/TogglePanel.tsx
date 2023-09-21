import './TogglePanel.css';

import classNames from 'classnames';
import React, {MouseEvent} from 'react';

import {ChevronHorizontal} from '../../../../assets';
import {DateAttributes, ToggleButtons, ViewMode} from '../../index.types';
import {getMonthName, useDatePickerContext, withCurrentModeCheck} from '../../lib';

export const TogglePanel = withCurrentModeCheck(() => {
	const {
		visualDate: {month, year},
		onChangeDate,
		setMode,
		lang,
	} = useDatePickerContext();

	const onClick = (evt: MouseEvent<HTMLButtonElement>) => {
		const eventName = evt.currentTarget.name;

		if (eventName === ToggleButtons.MONTH_AND_YEAR) {
			setMode(ViewMode.MONTHS_AND_YEARS_LISTS);
		} else if (eventName === ToggleButtons.NEXT) {
			onChangeDate(DateAttributes.MONTH, month >= 11 ? 0 : month + 1);
		} else if (eventName === ToggleButtons.PREV) {
			onChangeDate(DateAttributes.MONTH, month <= 0 ? 11 : month - 1);
		}
	};

	return (
		<div className={classNames('ui-kit-toggle-panel')}>
			<button
				className={classNames('ui-kit-toggle-panel__nav', 'ui-kit-toggle-panel__nav--prev')}
				name={ToggleButtons.PREV}
				type="button"
				onClick={onClick}
			>
				<ChevronHorizontal />
			</button>

			<button
				className={classNames('ui-kit-toggle-panel__nav', 'ui-kit-toggle-panel__nav--main')}
				name={ToggleButtons.MONTH_AND_YEAR}
				type="button"
				onClick={onClick}
			>
				<span className={classNames('ui-kit-toggle-panel__month')}>{getMonthName(month, lang)}</span>
				<span>{year}</span>
			</button>

			<button
				className={classNames('ui-kit-toggle-panel__nav', 'ui-kit-toggle-panel__nav--next')}
				name={ToggleButtons.NEXT}
				type="button"
				onClick={onClick}
			>
				<ChevronHorizontal />
			</button>
		</div>
	);
}, ViewMode.MAIN);
