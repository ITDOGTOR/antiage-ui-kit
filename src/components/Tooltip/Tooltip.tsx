import {Tooltip as TooltipAntd} from 'antd';
import classNames from 'classnames';
import React from 'react';

import {TooltipProps} from './Tooltip.types';

const overlayInnerStyles = {
	padding: '14px',
	color: 'var(--base-strong)',
	borderRadius: 'var(--brad-base)',
	boxShadow: 'box-shadow: 0 10px 15px 0 rgb(0 0 0 / 0.1)',
};

function Tooltip({
	align = {offset: [0, 0]},
	showArrow = false,
	placement = 'topLeft',
	color = 'white',
	overlayClassName,
	children,
	...props
}: TooltipProps) {
	return (
		<TooltipAntd
			align={align}
			color={color}
			overlayClassName={classNames('ui-kit-tooltip', overlayClassName)}
			overlayInnerStyle={overlayInnerStyles}
			placement={placement}
			showArrow={showArrow}
			{...props}
		>
			{children}
		</TooltipAntd>
	);
}

export default Tooltip;
