import './ViewInput.css';

import classNames from 'classnames';
import React from 'react';

import {Calendar, ReportProblem} from '../../../../assets';
import Tooltip from '../../../Tooltip';
import {DateAttributes} from '../../index.types';
import {setMaskedInputValue} from '../../lib';
import {useDatePickerContext} from '../../model';
import {ViewInputProps} from './ViewInput.types';

export const ViewField = React.memo(
	({
		name,
		value,
		disabled,
		label,
		placeholder,
		error,
		withLabel,
		isSplit,
		theme,
		inputMask = setMaskedInputValue,
		...props
	}: ViewInputProps) => {
		const {onChangeDate, onToggle} = useDatePickerContext();

		return (
			<div className={classNames('ui-kit-date-picker__view-input')}>
				<span
					className={classNames('ui-kit-date-picker__icon-calendar', {
						'ui-kit-date-picker__icon-calendar--disabled': disabled,
						error,
					})}
				>
					<Calendar />
				</span>

				<label className={classNames('ui-kit-date-picker__label')} htmlFor={name}>
					<input
						{...props}
						className={classNames('ui-kit-date-picker__input', theme, {
							'ui-kit-date-picker__input--split': isSplit,
							'ui-kit-date-picker__input--withLabel': Boolean(value) && withLabel,
							error,
						})}
						disabled={disabled}
						id={name}
						name={name}
						type="text"
						value={inputMask(value)}
						onChange={({target}) => onChangeDate(DateAttributes.INPUT, target.value)}
						// @ts-ignore
						onClick={onToggle}
					/>

					<span
						className={classNames('ui-kit-date-picker__placeholder', {
							'ui-kit-date-picker__placeholder--hide': Boolean(value) && !withLabel,
							'ui-kit-date-picker__placeholder--have-value': Boolean(value) && withLabel,
							error,
						})}
						id={name}
					>
						{label || placeholder}
					</span>
				</label>

				{((typeof error === 'object' && error?.message) || error) && (
					<span className={classNames('ui-kit-date-picker__error')}>
						<Tooltip
							align={{offset: [0, 16]}}
							overlayClassName={classNames('ui-kit-date-picker__error-tooltip')}
							placement="bottomRight"
							// @ts-ignore
							title={error?.message || error}
						>
							<ReportProblem />
						</Tooltip>
					</span>
				)}
			</div>
		);
	},
);
