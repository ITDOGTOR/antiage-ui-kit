import classNames from 'classnames';
import React from 'react';

import {ReportProblem} from '../../../../assets';
import Tooltip from '../../../Tooltip';
import {InputErrorTooltipProps} from './InputErrorTooltip.types';

function InputErrorTooltip({errorText}: InputErrorTooltipProps) {
	const tooltipOverlayClasses = classNames('ui-kit-input__error-tooltip');
	const tooltipContentClasses = classNames('ui-kit-input__error-tooltip-text');
	const iconWrapperClasses = classNames('ui-kit-input__errorIcon__wrapper', {
		'ui-kit-input__errorIcon__wrapper--hidden': !errorText,
	});
	const iconClasses = classNames('ui-kit-input__errorIcon', {'ui-kit-input__errorIcon--hidden': !errorText});

	return (
		<Tooltip
			overlayClassName={tooltipOverlayClasses}
			placement="bottom"
			title={<div className={tooltipContentClasses}>{errorText}</div>}
		>
			<div className={iconWrapperClasses}>
				<ReportProblem aria-label="error" className={iconClasses} />
			</div>
		</Tooltip>
	);
}

export default InputErrorTooltip;
