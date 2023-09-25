import classNames from 'classnames';
import React from 'react';

import {DateAttributes} from '../../index.types';
import {setMaskedInputValue} from '../../lib';
import {useDatePickerContext} from '../../model';

export const ViewField = React.memo(({name, value, error, disabled, withLabel, theme, placeholder, isSplit}) => {
	const {onChangeDate, onToggle} = useDatePickerContext();

	/*	const placeholderStyles = classNames(
		styles.placeholder,
		styles[!!selectedDate.day && !withLabel && 'hide'],
		styles[!!selectedDate.day && withLabel && 'haveValue'],
		styles[error && 'errorPlaceholder'],
	); */

	/*	const inputStyles = classNames(
		styles.field,
		styles[theme],
		styles[error && 'error'],
		styles[withLabel && 'withLabel'],
		styles[isSplit && 'radiusLeft'],
	); */

	const inputStyles = classNames('ui-kit-date-picker__input', {
		'ui-kit-date-picker__input--split': isSplit,
		'ui-kit-date-picker__input--withLabel': withLabel,
		theme,
		error,
	});

	const placeholderStyles = classNames('ui-kit-date-picker__placeholder', {
		'ui-kit-date-picker__placeholder--hide': Boolean(value) && !withLabel,
		'ui-kit-date-picker__placeholder--have-value': Boolean(value) && withLabel,
		error,
	});

	/*	const onClickHandle = (e) => {
		e.preventDefault();
		if (selectedDate.day && !disabled) {
			onReset();
		}
	}; */

	return (
		<label className={classNames('ui-kit-date-picker__label')} htmlFor={name}>
			<input
				className={inputStyles}
				disabled={disabled}
				id={name}
				name={name}
				placeholder={placeholder}
				type="text"
				value={setMaskedInputValue(value)}
				onChange={({target}) => onChangeDate(DateAttributes.INPUT, target.value)}
				// @ts-ignore
				onClick={onToggle}
			/>

			<span className={placeholderStyles} id={name}>
				{placeholder}
			</span>

			{/* {!disabled && (
				<>
					{(error?.message || error) && (
						<span className={classNames('icon-error')}>
							<Tooltip
								arrow={false}
								overlayClassName={classNames('tooltip__container')}
								placement="topRight"
								showArrow={false}
								title={error?.message || error}
								trigger={['hover', 'click']}
							>
								<ReportProblem className={classNames('error-icon')} />
							</Tooltip>
						</span>
					)}
					<span className={classNames('icon-chevron')}>
						<ChevronVertical />
					</span>
				</>
			)}

			<button
				className={classNames('icon-calendar', {
					'display-cross': !!selectedDate.day && !disabled,
					'disabled-icon': disabled,
				})}
				id="selectFieldId"
				type="button"
				onClick={onClickHandle}
			>
				<Calendar />
				<Cross />
			</button> */}
		</label>
	);
});
