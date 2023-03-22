import classNames from 'classnames';
import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import {defaultStyles} from './config';
import {SelectLocalProps} from './Select.types';

const components = {
	creatable: CreatableSelect,
	default: Select,
};

function SelectComponent({containerStyle = '', type = 'default', ...props}: SelectLocalProps) {
	const Component = components[type];
	return (
		<div className={classNames('container', containerStyle)}>
			<Component
				menuIsOpen
				styles={{
					...defaultStyles,
				}}
				{...props}
			/>
		</div>
	);
}

export default SelectComponent;
