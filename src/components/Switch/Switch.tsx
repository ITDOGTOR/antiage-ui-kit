import {Switch as SwitchAntd} from 'antd';
import classNames from 'classnames';
import React, {useState} from 'react';

import {SwitchProps} from './Switch.types';

function Switch({
	theme = 'white',
	className,
	classNameContainer,
	status,
	label,
	disabled,
	defaultChecked,
	unCheckedChildren,
	checkedChildren,
	onChange = () => {},
	...props
}: SwitchProps) {
	const [isChecked, setIsChecked] = useState(defaultChecked || false);

	const onToggle = (checked: boolean, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsChecked(checked);
		onChange(checked, event);
	};

	const classesContainer = classNames(
		'ui-kit-switch-container',
		{
			'ui-kit-switch-status-container': status,
			'ui-kit-switch-status-disabled': status && disabled,
			'ui-kit-switch-status-checked': status && isChecked,
		},
		classNameContainer,
	);
	const classesSwitch = classNames('ui-kit-switch', theme, className);

	return (
		<label className={classesContainer}>
			<SwitchAntd className={classesSwitch} disabled={disabled} onChange={onToggle} {...props} />

			{label && !status && <span className={classNames('ui-kit-switch-label')}>{label}</span>}

			{status && !label && (
				<span className={classNames('ui-kit-switch-status-label', {'ui-kit-switch-status-label-checked': isChecked})}>
					{isChecked ? checkedChildren : unCheckedChildren}
				</span>
			)}
		</label>
	);
}

export default Switch;
