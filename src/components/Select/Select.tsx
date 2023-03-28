import classNames from 'classnames';
import React, {useState} from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import {Search} from '../../assets';
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
	showLabelAlways = false,
	search = false,
	...props
}: SelectLocalProps) {
	const [localSearch, setLocalSearch] = useState('');
	const {value} = props;

	const containerClasses = classNames('ui-kit-select-container', containerStyle);
	const contentClasses = classNames('ui-kit-select-content-container');
	const labelContainerClasses = classNames('ui-kit-select-label-container', {
		'ui-kit-select-label-container-active': showLabelAlways || localSearch || value,
	});
	const labelClasses = classNames('ui-kit-select-label', {'ui-kit-select-label-error': error});
	const iconClasses = classNames('ui-kit-select-icon', {error});

	const Component = components[type];

	return (
		<div className={containerClasses} data-error={error} data-search={search} data-theme={theme}>
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
					onInputChange={setLocalSearch}
					{...props}
				/>
				{search ? <Search className={iconClasses} /> : null}
			</div>
			{error ? <InputError error={error} /> : null}
		</div>
	);
}

export default SelectComponent;
