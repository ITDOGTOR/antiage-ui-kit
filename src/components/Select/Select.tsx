import classNames from 'classnames';
import React, {useState} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import {defaultStyles} from './config';
import {SelectLocalProps} from './Select.types';

const components = {
	creatable: CreatableSelect,
	default: Select,
};

function SelectComponent({containerStyle = '', type = 'default', customStyles = {}, label = '', ...props}: SelectLocalProps) {
	const [search, setSearch] = useState('');
	const { value } = props;

	const containerClasses = classNames(
		'ui-kit-select-container',
		containerStyle
	);
	const labelContainerClasses = classNames(
		'ui-kit-select-label-container',
		{ 'ui-kit-select-label-container-active': search || value },
	);
	const labelClasses = classNames(
		'ui-kit-select-label',
	);

	const Component = components[type];
	return (
		<div className={containerClasses}>
			{label ? (
				<p className={labelContainerClasses}>
					<span className={labelClasses}>{label}</span>
				</p>
			) : null}
			<Component
				styles={{
					...defaultStyles,
					...customStyles
				}}
				onInputChange={setSearch}
				{...props}
			/>
		</div>
	);
}

export default SelectComponent;
