import classNames from 'classnames';
import React from 'react';

import {NavTabButtonProps} from './NavTabButton.types';

function NavTabButton({
	onClick = () => {},
	tabClassName,
	isActiveButton,
	theme,
	disabled,
	title,
	...tabProps
}: NavTabButtonProps) {
	const tabTextClasses = classNames('ui-kit-navTabs__tab__text');
	const singleTabClasses = classNames('ui-kit-navTabs__tab', `ui-kit-navTabs__tab--theme-${theme}`, tabClassName);
	const activeTabClasses = classNames(isActiveButton && `ui-kit-navTabs__tab--active--theme-${theme}`);

	return (
		<button
			className={[singleTabClasses, activeTabClasses].join(' ')}
			disabled={disabled}
			type="button"
			onClick={onClick}
			{...tabProps}
		>
			{typeof title === 'string' ? (
				<span className={tabTextClasses} title={title}>
					{title}
				</span>
			) : (
				title
			)}
		</button>
	);
}

export default NavTabButton;
