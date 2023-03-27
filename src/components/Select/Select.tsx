import classNames from 'classnames';
import React, {useState} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import InputError from '../InputError';
import {defaultStyles} from './config';
import {SelectLocalProps} from './Select.types';

const components = {
	creatable: CreatableSelect,
	default: Select,
};

function SelectComponent({
	containerStyle = '',
	type = 'default',
	customStyles = {},
	label = '',
	error,
	theme,
	...props
}: SelectLocalProps) {
	const [search, setSearch] = useState('');
	const {value} = props;

	const containerClasses = classNames('ui-kit-select-container', containerStyle);
	const contentClasses = classNames('ui-kit-select-content-container');
	const labelContainerClasses = classNames('ui-kit-select-label-container', {
		'ui-kit-select-label-container-active': search || value,
	});
	const labelClasses = classNames('ui-kit-select-label', {'ui-kit-select-label-error': error});

	const Component = components[type];
	return (
		<div className={containerClasses} data-error={error} data-theme={theme}>
			<div className={contentClasses}>
				{label ? (
					<p className={labelContainerClasses}>
						<span className={labelClasses}>{label}</span>
					</p>
				) : null}
				<Component
					classNamePrefix="ui-kit-select"
					styles={{
						...defaultStyles,
						...customStyles,
					}}
					onInputChange={setSearch}
					{...props}
				/>
			</div>
			{error ? <InputError error={error} /> : null}
		</div>
	);
}

export default SelectComponent;
